"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenentComponent = void 0;
const core_1 = require("@angular/core");
let TenentComponent = class TenentComponent {
    constructor(tenentService) {
        this.tenentService = tenentService;
        this.tenent = [];
    }
    ngOnInit() {
        this.tenentService.all().subscribe(tenent => this.tenent = tenent);
    }
    delete(id) {
        if (confirm('Are you sure you want to delete this record?')) {
            this.tenentService.delete(id).subscribe(() => this.tenent = this.tenent.filter(r => r.id !== id));
        }
    }
};
TenentComponent = __decorate([
    core_1.Component({
        selector: 'app-tenent',
        templateUrl: './tenent.component.html',
        styleUrls: ['./tenent.component.css']
    })
], TenentComponent);
exports.TenentComponent = TenentComponent;
//# sourceMappingURL=tenent.component.js.map