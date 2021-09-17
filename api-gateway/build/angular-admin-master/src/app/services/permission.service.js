"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionService = void 0;
const core_1 = require("@angular/core");
const rest_service_1 = require("./rest.service");
const environment_1 = require("../../environments/environment");
let PermissionService = class PermissionService extends rest_service_1.RestService {
    constructor() {
        super(...arguments);
        this.endpoint = `${environment_1.environment.api}/permissions`;
    }
};
PermissionService = __decorate([
    core_1.Injectable({
        providedIn: 'root'
    })
], PermissionService);
exports.PermissionService = PermissionService;
//# sourceMappingURL=permission.service.js.map