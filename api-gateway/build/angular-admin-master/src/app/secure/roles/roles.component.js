"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesComponent = void 0;
const core_1 = require("@angular/core");
let RolesComponent = class RolesComponent {
    constructor(roleService) {
        this.roleService = roleService;
        this.roles = [];
    }
    ngOnInit() {
        this.roleService.all().subscribe(roles => this.roles = roles);
    }
    delete(id) {
        if (confirm('Are you sure you want to delete this record?')) {
            this.roleService.delete(id).subscribe(() => this.roles = this.roles.filter(r => r.id !== id));
        }
    }
};
RolesComponent = __decorate([
    core_1.Component({
        selector: 'app-roles',
        templateUrl: './roles.component.html',
        styleUrls: ['./roles.component.css']
    })
], RolesComponent);
exports.RolesComponent = RolesComponent;
//# sourceMappingURL=roles.component.js.map