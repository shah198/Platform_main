"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterComponent = void 0;
const core_1 = require("@angular/core");
let RegisterComponent = class RegisterComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.password = '';
        this.passwordConfirm = '';
    }
    ngOnInit() {
    }
    submit() {
        this.authService.register({
            first_name: this.firstName,
            last_name: this.lastName,
            email: this.email,
            password: this.password,
            password_confirm: this.passwordConfirm,
        }).subscribe(() => this.router.navigate(['/login']));
    }
};
RegisterComponent = __decorate([
    core_1.Component({
        selector: 'app-register',
        templateUrl: './register.component.html',
        styleUrls: ['./register.component.css', './../public.component.css']
    })
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map