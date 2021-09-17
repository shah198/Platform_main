"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RabbitMQ_Utility_1 = require("./RabbitMQ_Utility");
var rabbitmq = RabbitMQ_Utility_1.RabbitMQ_Utility.getInstance();
rabbitmq.listenToService('STUDENTS_ADD', 'IOT_SERVICE', () => { });
//# sourceMappingURL=rabbpub.js.map