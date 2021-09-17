"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersComponent = void 0;
const core_1 = require("@angular/core");
let UsersComponent = class UsersComponent {
    constructor(userService) {
        this.userService = userService;
        this.users = [];
    }
    ngOnInit() {
        this.load();
    }
    load(page = 1) {
        this.userService.all(page).subscribe((res) => {
            this.users = res.data;
            this.lastPage = res.meta.last_page;
        });
    }
    delete(id) {
        if (confirm('Are you sure you want to delete this record?')) {
            this.userService.delete(id).subscribe(() => {
                this.users = this.users.filter(u => u.id !== id);
            });
        }
    }
};
UsersComponent = __decorate([
    core_1.Component({
        selector: 'app-users',
        templateUrl: './users.component.html',
        styleUrls: ['./users.component.css']
    })
], UsersComponent);
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map