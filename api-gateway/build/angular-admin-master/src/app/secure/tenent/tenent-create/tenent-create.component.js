"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenentCreateComponent = void 0;
const core_1 = require("@angular/core");
let TenentCreateComponent = class TenentCreateComponent {
    constructor(formBuilder, userService, tenantService, router) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.tenantService = tenantService;
        this.router = router;
        this.users = [];
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            name: '',
            users: this.formBuilder.array([])
        });
        this.userService.all().subscribe(users => {
            this.users = users.data;
            this.users.forEach((p) => {
                this.userArray.push(this.formBuilder.group({
                    value: false,
                    id: p.id
                }));
            });
        });
    }
    get userArray() {
        return this.form.get('users');
    }
    submit() {
        const formData = this.form.getRawValue();
        const data = {
            name: formData.name,
            users: formData.users.filter((p) => p.value === true).map((p) => p.id)
        };
        this.tenantService.create(data).subscribe(() => this.router.navigate(['/tenent']));
    }
};
TenentCreateComponent = __decorate([
    core_1.Component({
        selector: 'app-tenent-create',
        templateUrl: './tenent-create.component.html',
        styleUrls: ['./tenent-create.component.css']
    })
], TenentCreateComponent);
exports.TenentCreateComponent = TenentCreateComponent;
//# sourceMappingURL=tenent-create.component.js.map