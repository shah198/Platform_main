"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleEditComponent = void 0;
const core_1 = require("@angular/core");
let RoleEditComponent = class RoleEditComponent {
    constructor(formBuilder, permissionService, roleService, router, route) {
        this.formBuilder = formBuilder;
        this.permissionService = permissionService;
        this.roleService = roleService;
        this.router = router;
        this.route = route;
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
        this.id = this.route.snapshot.params.id;
        this.roleService.get(this.id).subscribe((role) => {
            const values = this.permissions.map(p => {
                return {
                    value: role.permissions.some(r => r.id === p.id),
                    id: p.id
                };
            });
            this.form.patchValue({
                name: role.name,
                permissions: values
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
        this.roleService.update(this.id, data)
            .subscribe(() => this.router.navigate(['/roles']));
    }
};
RoleEditComponent = __decorate([
    core_1.Component({
        selector: 'app-role-edit',
        templateUrl: './role-edit.component.html',
        styleUrls: ['./role-edit.component.css']
    })
], RoleEditComponent);
exports.RoleEditComponent = RoleEditComponent;
//# sourceMappingURL=role-edit.component.js.map