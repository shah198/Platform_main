"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecureComponent = void 0;
const core_1 = require("@angular/core");
const auth_1 = require("../classes/auth");
let SecureComponent = class SecureComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        this.authService.user().subscribe(user => {
            auth_1.Auth.userEmitter.emit(user);
            auth_1.Auth.user = user;
            this.user = user;
        }, () => this.router.navigate(['/login']));
    }
};
SecureComponent = __decorate([
    core_1.Component({
        selector: 'app-secure',
        templateUrl: './secure.component.html',
        styleUrls: ['./secure.component.css']
    })
], SecureComponent);
exports.SecureComponent = SecureComponent;
//# sourceMappingURL=secure.component.js.map