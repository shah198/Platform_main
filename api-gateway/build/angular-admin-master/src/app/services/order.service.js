"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const core_1 = require("@angular/core");
const rest_service_1 = require("./rest.service");
const environment_1 = require("../../environments/environment");
let OrderService = class OrderService extends rest_service_1.RestService {
    constructor() {
        super(...arguments);
        this.endpoint = `${environment_1.environment.api}/orders`;
    }
    export() {
        return this.http.post(`${environment_1.environment.api}/export`, {}, { responseType: 'blob' });
    }
    chart() {
        return this.http.get(`${environment_1.environment.api}/chart`);
    }
};
OrderService = __decorate([
    core_1.Injectable({
        providedIn: 'root'
    })
], OrderService);
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map