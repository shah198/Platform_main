"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createQueue = exports.createExchange = void 0;
const amqp = require('amqplib/callback_api');
const amqplib = require('amqplib');
let RABBIT_URL = 'amqps://doeeybac:tGBYUrS4TH6jjx6I9BV6f4rextUfpTZ3@puffin.rmq2.cloudamqp.com/doeeybac';
const createExchange = async (exchangeName) => {
    // var createTopicPromise = sns.createTopic({ Name: topicName }).promise();
    try {
        var conn = await amqplib.connect(RABBIT_URL);
        var ch = await conn.createChannel();
        await conn.createChannel();
        await ch.assertExchange(exchangeName, 'fanout', { durable: true });
        //return result.TopicArn;
    }
    catch (e) {
        console.log(e);
    }
};
exports.createExchange = createExchange;
const createQueue = async (queueName, exchangeName) => {
    try {
        var conn = await amqplib.connect(RABBIT_URL);
        var ch = await conn.createChannel();
        await conn.createChannel();
        await ch.assertExchange(exchangeName, 'fanout', { durable: true });
        await ch.assertQueue(queueName, { durable: true });
        await ch.bindQueue(queueName, exchangeName, '');
    }
    catch (e) {
        console.log(e);
    }
};
exports.createQueue = createQueue;
// module.exports = {
//   createExchange,
//   createQueue
// };
//# sourceMappingURL=configureRabbitMq.js.map