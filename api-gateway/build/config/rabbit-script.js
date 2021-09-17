"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//const fs = require("fs");
const configureRabbitMq_1 = require("./configureRabbitMq");
const fs_1 = __importDefault(require("fs"));
//const {createExchange , createQueue } = require('C:/Workspace/rabbit mq/atpl-api-api_gateway/configureRabbitMq');
//import 'createExchange,createQueue' from "./configureRabbitMq";
//var createQueue = require('./c');
const configData = require('./config-local');
var initProject = async () => {
    let exchanges = configData.Exchanges;
    for (let i = 0; i < exchanges.length; i++) {
        let exchange = exchanges[i];
        let exchangeName = exchange.ExchangeName;
        let subscribers = exchange.Subscribers;
        console.log('creating exchange : ' + exchangeName);
        let exchangeArn = await configureRabbitMq_1.createExchange(exchangeName);
        //exchange.ExchangeArn = exchangeArn;
        for (let j = 0; j < subscribers.length; j++) {
            let subscriber = subscribers[j];
            let serviceName = subscriber.Service;
            let queueName = exchangeName + "-" + serviceName;
            console.log('creating queue : ' + queueName);
            let queueUrl = await configureRabbitMq_1.createQueue(queueName, exchangeName);
            subscriber.QueueName = queueName;
        }
    }
    let data = JSON.stringify((configData), null, 2);
    fs_1.default.writeFileSync("config-localq.json", data);
};
initProject();
//# sourceMappingURL=rabbit-script.js.map