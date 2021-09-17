"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateComponent = void 0;
const core_1 = require("@angular/core");
let UserCreateComponent = class UserCreateComponent {
    constructor(formBuilder, roleService, userService, router) {
        this.formBuilder = formBuilder;
        this.roleService = roleService;
        this.userService = userService;
        this.router = router;
        this.roles = [];
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            first_name: '',
            last_name: '',
            email: '',
            role_id: ''
        });
        this.roleService.all().subscribe(roles => this.roles = roles);
    }
    submit() {
        this.userService.create(this.form.getRawValue()).subscribe(() => this.router.navigate(['/users']));
    }
};
UserCreateComponent = __decorate([
    core_1.Component({
        selector: 'app-user-create',
        templateUrl: './user-create.component.html',
        styleUrls: ['./user-create.component.css']
    })
], UserCreateComponent);
exports.UserCreateComponent = UserCreateComponent;
//# sourceMappingURL=user-create.component.js.map