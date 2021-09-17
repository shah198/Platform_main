global.fetch = require('node-fetch');
global.navigator = () => null;
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
var request = require('request');
const poolData = {
    UserPoolId: "ap-south-1_bLlBfp19E",
    ClientId: "11utk43fdo7l02ikrccp66pj3j"
 };


var atob = require('atob')
var jwt = require('jsonwebtoken');
var jwkToPem = require('jwk-to-pem');

const pool_region = "ap-south-1";
const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);


exports.Register = function (body, callback) {
   var name = body.name;
   var email = body.email;
   var password = body.password;
   var attributeList = [];
   
   attributeList.push(new    AmazonCognitoIdentity.CognitoUserAttribute({ Name: "email", Value: email }));
   userPool.signUp(name, password, attributeList, null, function (err, result) {
     if (err)
         callback(err);
     var cognitoUser = result.user;
     callback(null, cognitoUser);
   })
}

exports.Login = function (body, callback) {
   var userName = body.name;
   var password = body.password;
   var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails({
        Username: userName,
        Password: password
    });
    var userData = {
        Username: userName,
        Pool: userPool,
        Storage: new AmazonCognitoIdentity.CookieStorage({
         domain: 'localhost',
     })
    }
    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

    cognitoUser.authenticateUser(authenticationDetails, {

      // onSuccess: function (result) {
      //      var accesstoken = result.getAccessToken().getJwtToken();
      //      console.log(accesstoken + "GOT THE ACESSS TOKRN @@@@@#########")    
           
      //      callback(null, accesstoken);
      //   }
      
      onSuccess: function (session) {
         const tokens = {
            accessToken:session.getAccessToken().getJwtToken(),
            idToken: session.getIdToken().getJwtToken(),
            refreshToken: session.getRefreshToken().getToken()
         };

        // Save tokens for later use
            cognitoUser['tokens'] = tokens; // Save tokens for later use

        console.log(tokens.accessToken)
            const AccessToken = new AmazonCognitoIdentity.CognitoAccessToken({ AccessToken: tokens.accessToken });
            const IdToken = new AmazonCognitoIdentity.CognitoIdToken({ IdToken: tokens.idToken });
            const RefreshToken = new AmazonCognitoIdentity.CognitoRefreshToken({ RefreshToken: tokens.refreshToken });
            
            const sessionData = {
            IdToken: IdToken,
            AccessToken: AccessToken,
            RefreshToken: RefreshToken
            };
            const userSession = new AmazonCognitoIdentity.CognitoUserSession(sessionData)
            console.log(userSession)
            const userData = {
            Username: userName,
            Pool: this.userPool
            };

            cognitoUser.setSignInUserSession(userSession)
         
            cognitoUser.getSession(function (err, session) { // You must run this to verify that session (internally)
            if (session.isValid()) {
               cognitoUser.getUserAttributes(function (err, result) {
                  if (err) {
                      alert(err.message || JSON.stringify(err));
                      return;
                  }
                  for (i = 0; i < result.length; i++) {
                      console.log('attribute ' + result[i].getName() + ' has value ' + result[i].getValue());
                  }
              });
            } else {
               // TODO: What to do if session is invalid?
            }
            });

            console.log(JSON.stringify(userData) + " its the cognito user" + "cognito User ====@@@@@@@@@############>" + JSON.stringify(cognitoUser) )
   
         callback(null,parseJwt(tokens.accessToken));
      },
        onFailure: (function (err) {
           console.log(err)
           callback(err);
       })
   })
};



function parseJwt (token) {
   var base64Url = token.split('.')[1];
   var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
   var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
       return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
   }).join(''));

   return JSON.parse(jsonPayload);
};


//https://cognitoidp.ap-south-1.amazonaws.com/ap-south-1_AUTdtmdzo/.well-known/jwks.json

exports.Validate = function(token, callback){
   request({
       url : `https://cognito-idp." + pool_region + ".amazonaws.com/" + poolData.UserPoolId + "/.well-known/jwks.json`,
       json : true
    }, function(error, response, body){
       if (!error && response.statusCode === 200) {
           pems = {};
           var keys = body['keys'];
           for(var i = 0; i < keys.length; i++) {
                var key_id = keys[i].kid;
                var modulus = keys[i].n;
                var exponent = keys[i].e;
                var key_type = keys[i].kty;
                var jwk = { kty: key_type, n: modulus, e: exponent};
                var pem = jwkToPem(jwk);
                pems[key_id] = pem;
           }
        var decodedJwt = jwt.decode(token, {complete: true});
                if (!decodedJwt) {
                    console.log("Not a valid JWT token");
                    callback(new Error('Not a valid JWT token'));
                }
                var kid = decodedJwt.header.kid;
                var pem = pems[kid];
                if (!pem) {
                    console.log('Invalid token');
                    callback(new Error('Invalid token'));
                }
               jwt.verify(token, pem, function(err, payload) {
                    if(err) {
                        console.log("Invalid Token.");
                        callback(new Error('Invalid token'));
                    } else {
                         console.log("Valid Token.");
                         console.log(callback + " ==== >>>This is a callback")
                         callback(null, "Valid token");
                    }
               });
       } else {
             console.log("Error! Unable to download JWKs");
             callback(error);
       }
   });
}
