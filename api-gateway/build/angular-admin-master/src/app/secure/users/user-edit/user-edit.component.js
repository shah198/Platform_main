"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEditComponent = void 0;
const core_1 = require("@angular/core");
let UserEditComponent = class UserEditComponent {
    constructor(formBuilder, roleService, userService, router, route) {
        this.formBuilder = formBuilder;
        this.roleService = roleService;
        this.userService = userService;
        this.router = router;
        this.route = route;
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
        this.id = this.route.snapshot.params.id;
        this.userService.get(this.id).subscribe(user => {
            this.form.patchValue({
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                role_id: user.role.id
            });
        });
    }
    submit() {
        this.userService.update(this.id, this.form.getRawValue())
            .subscribe(() => this.router.navigate(['/users']));
    }
};
UserEditComponent = __decorate([
    core_1.Component({
        selector: 'app-user-edit',
        templateUrl: './user-edit.component.html',
        styleUrls: ['./user-edit.component.css']
    })
], UserEditComponent);
exports.UserEditComponent = UserEditComponent;
//# sourceMappingURL=user-edit.component.js.map