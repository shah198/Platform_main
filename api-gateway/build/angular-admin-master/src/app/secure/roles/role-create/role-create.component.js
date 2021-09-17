"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleCreateComponent = void 0;
const core_1 = require("@angular/core");
let RoleCreateComponent = class RoleCreateComponent {
    constructor(formBuilder, permissionService, roleService, router) {
        this.formBuilder = formBuilder;
        this.permissionService = permissionService;
        this.roleService = roleService;
        this.router = router;
        this.permissions = [];
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            name: '',
            permissions: this.formBuilder.array([])
        });
        this.permissionService.all().subscribe(permissions => {
            this.permissions = permissions;
            this.permissions.forEach(p => {
                this.permissionArray.push(this.formBuilder.group({
                    value: false,
                    id: p.id
                }));
            });
        });
    }
    get permissionArray() {
        return this.form.get('permissions');
    }
    submit() {
        const formData = this.form.getRawValue();
        const data = {
            name: formData.name,
            permissions: formData.permissions.filter(p => p.value === true).map(p => p.id)
        };
        this.roleService.create(data)
            .subscribe(() => this.router.navigate(['/roles']));
    }
};
RoleCreateComponent = __decorate([
    core_1.Component({
        selector: 'app-role-create',
        templateUrl: './role-create.component.html',
        styleUrls: ['./role-create.component.css']
    })
], RoleCreateComponent);
exports.RoleCreateComponent = RoleCreateComponent;
//# sourceMappingURL=role-create.component.js.map