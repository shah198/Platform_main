"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileComponent = void 0;
const core_1 = require("@angular/core");
const auth_1 = require("../../classes/auth");
let ProfileComponent = class ProfileComponent {
    constructor(formBuilder, authService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
    }
    ngOnInit() {
        const user = auth_1.Auth.user;
        this.infoForm = this.formBuilder.group({
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email
        });
        this.passwordForm = this.formBuilder.group({
            password: '',
            password_confirm: ''
        });
        auth_1.Auth.userEmitter.subscribe(user => {
            this.infoForm.patchValue(user);
        });
    }
    infoSubmit() {
        this.authService.updateInfo(this.infoForm.getRawValue()).subscribe(user => auth_1.Auth.userEmitter.emit(user));
    }
    passwordSubmit() {
        this.authService.updatePassword(this.passwordForm.getRawValue()).subscribe(res => console.log(res));
    }
};
ProfileComponent = __decorate([
    core_1.Component({
        selector: 'app-profile',
        templateUrl: './profile.component.html',
        styleUrls: ['./profile.component.css']
    })
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map