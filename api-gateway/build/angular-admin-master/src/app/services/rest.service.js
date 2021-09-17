"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestService = void 0;
const core_1 = require("@angular/core");
let RestService = class RestService {
    constructor(http) {
        this.http = http;
    }
    all(page) {
        let url = this.endpoint;
        if (page) {
            url += `?page=${page}`;
        }
        return this.http.get(url);
    }
    create(data) {
        return this.http.post(this.endpoint, data);
    }
    get(id) {
        return this.http.get(`${this.endpoint}/${id}`);
    }
    update(id, data) {
        return this.http.put(`${this.endpoint}/${id}`, data);
    }
    delete(id) {
        return this.http.delete(`${this.endpoint}/${id}`);
    }
};
RestService = __decorate([
    core_1.Injectable({
        providedIn: 'root'
    })
], RestService);
exports.RestService = RestService;
//# sourceMappingURL=rest.service.js.map