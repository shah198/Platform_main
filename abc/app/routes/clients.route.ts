import { Body,Query, Controller, Delete, Get, HttpException, HttpStatus, Inject, Injectable, Param, Patch, Post, Put, Req } from '@nestjs/common';
import { ClientsFacade } from '../facade/clients.facade';
import { ResponseModel } from '../../submodules/Ecommerce-Platform-Common/ResponseModel';
import { SNS_SQS } from '../../submodules/Ecommerce-Platform-RabbitMQConfig/SNS_SQS';
import { ClientsDto } from '../../submodules/Ecommerce-Platform-Dtos/clientsDto';
import { RequestModel } from '../../submodules/Ecommerce-Platform-Common/RequestModel';
import { Message } from '../../submodules/Ecommerce-Platform-Common/Message';
import { RequestModelQuery } from 'submodules/Ecommerce-Platform-Common/RequestModelQuery';
import {Request} from 'express'

@Controller('clients')
export class ClientsRoutes{

  constructor(private clientsFacade : ClientsFacade) { }

  private sns_sqs = SNS_SQS.getInstance();
  private topicArray = ['CLIENTS_ADD','CLIENTS_UPDATE','CLIENTS_DELETE'];
  private serviceName = ['CLIENTS_SERVICE','CLIENTS_SERVICE','CLIENTS_SERVICE'];
  
  onModuleInit() {
   
    for (var i = 0; i < this.topicArray.length; i++) {
      this.sns_sqs.listenToService(this.topicArray[i], this.serviceName[i], (() => {
        let value = this.topicArray[i];
        return async (result) => {
          console.log("Result is........" + JSON.stringify(result));
          try {
            let responseModelOfClientsDto: ResponseModel<ClientsDto> = null;
            console.log(`listening to  ${value} topic.....result is....`);
            // ToDo :- add a method for removing queue message from queue....
            switch (value) {
              case 'CLIENTS_ADD':
                console.log("Inside CLIENTS_ADD Topic");
                responseModelOfClientsDto = await this.createClients(result["message"]);
                break;
              case 'CLIENTS_UPDATE':
                  console.log("Inside CLIENTS_UPDATE Topic");
                  responseModelOfClientsDto = await this.updateClients(result["message"]);
                  break;
              case 'CLIENTS_DELETE':
                    console.log("Inside CLIENTS_DELETE Topic");
                    responseModelOfClientsDto = await this.deleteClients(result["message"]);
                    break;
  
            }
  
            console.log("Result of aws of GroupRoutes  is...." + JSON.stringify(result));
            let requestModelOfClientsDto: RequestModel<ClientsDto> = result["message"];
            responseModelOfClientsDto.setSocketId(requestModelOfClientsDto.SocketId)
            responseModelOfClientsDto.setCommunityUrl(requestModelOfClientsDto.CommunityUrl);
            responseModelOfClientsDto.setRequestId(requestModelOfClientsDto.RequestGuid);
            responseModelOfClientsDto.setStatus(new Message("200", "Group Inserted Successfully", null));

            for (let index = 0; index < result.OnSuccessTopicsToPush.length; index++) {
              const element = result.OnSuccessTopicsToPush[index];
              console.log("ELEMENT: ", JSON.stringify(responseModelOfClientsDto));
              this.sns_sqs.publishMessageToTopic(element, responseModelOfClientsDto)
            }
          }
          catch (error) {
            console.log("Inside Catch.........");
            console.log(error, result);
            for (let index = 0; index < result.OnFailureTopicsToPush.length; index++) {
              const element = result.OnFailureTopicsToPush[index];
              let errorResult: ResponseModel<ClientsDto> = new ResponseModel<ClientsDto>(null,null,null,null,null,null,null,null,null);;
              errorResult.setStatus(new Message("500",error,null))
              let requestModelOfClientsDto: RequestModel<ClientsDto> = result["message"];
              errorResult.setSocketId(requestModelOfClientsDto.SocketId)
              errorResult.setCommunityUrl(requestModelOfClientsDto.CommunityUrl);
              errorResult.setRequestId(requestModelOfClientsDto.RequestGuid);

              this.sns_sqs.publishMessageToTopic(element, errorResult);
            }
          }
        }
      })())
    }

  }


  @Get()
  allClients() {
    try {
    //read the requestModel from query , type-cast it to RequestModelQuery and then pass it to next method as param

      return this.clientsFacade.getAll();
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  
  @Get(':id')
    ClientById(@Param('id') id: number): Promise<ResponseModel<ClientsDto>> {
    try {
      console.log("id is............." + JSON.stringify(id));
      return this.clientsFacade.getByIds([id]);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }


  @Get('/search')
  searchClients(@Req() req:Request) {
    try {
      console.log("Inside controller ......CLIENTS");
      let requestModelQuery: RequestModelQuery = JSON.parse(req.headers['requestmodel'].toString());
      
      console.log("RESPONSEMODELQUERY"+JSON.stringify(requestModelQuery))

      console.log("FILTER"+JSON.stringify(requestModelQuery.Filter))

      console.log("CHILDREN"+JSON.stringify(requestModelQuery.Children))

      return this.clientsFacade.search(requestModelQuery);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }


  @Post("/") 
  async createClients(@Body() body:RequestModel<ClientsDto>): Promise<ResponseModel<ClientsDto>> {  //requiestmodel<STUDENTDto></STUDENTDto>....Promise<ResponseModel<Grou[pDto>>]
    try {

      let result = await this.clientsFacade.create(body);
   
      return result;
      // return null;
    } catch (error) {
       console.log("Error is....." + error);
       throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Put("/")
  async updateClients(@Body() body: RequestModel<ClientsDto>): Promise<ResponseModel<ClientsDto>> {  //requiestmodel<STUDENTDto></STUDENTDto>....Promise<ResponseModel<Grou[pDto>>]
    try {


      console.log("Executing update query..............")
      return await this.clientsFacade.update(body);
    } catch (error) {
      console.log("Error is....." + error);
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete('/')
  deleteClients(@Body() body:RequestModel<ClientsDto>): Promise<ResponseModel<ClientsDto>>{
    try {
      return this.clientsFacade.deleteById(body);
        } catch (error) {
          throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
        }
  }

}