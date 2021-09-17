"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecureModule = void 0;
const forms_1 = require("@angular/forms");
const router_1 = require("@angular/router");
const menu_component_1 = require("./menu/menu.component");
const nav_component_1 = require("./nav/nav.component");
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const secure_component_1 = require("./secure.component");
const profile_component_1 = require("./profile/profile.component");
const dashboard_component_1 = require("./dashboard/dashboard.component");
const users_component_1 = require("./users/users.component");
const user_create_component_1 = require("./users/user-create/user-create.component");
const user_edit_component_1 = require("./users/user-edit/user-edit.component");
const roles_component_1 = require("./roles/roles.component");
const role_create_component_1 = require("./roles/role-create/role-create.component");
const role_edit_component_1 = require("./roles/role-edit/role-edit.component");
const products_component_1 = require("./products/products.component");
const product_create_component_1 = require("./products/product-create/product-create.component");
const product_edit_component_1 = require("./products/product-edit/product-edit.component");
const orders_component_1 = require("./orders/orders.component");
const animations_1 = require("@angular/platform-browser/animations");
const tenent_component_1 = require("./tenent/tenent.component");
const tenent_create_component_1 = require("./tenent/tenent-create/tenent-create.component");
const paginator_component_1 = require("./components/paginator/paginator.component");
const upload_component_1 = require("./components/upload/upload.component");
let SecureModule = class SecureModule {
};
SecureModule = __decorate([
    core_1.NgModule({
        declarations: [nav_component_1.NavComponent, menu_component_1.MenuComponent, secure_component_1.SecureComponent, profile_component_1.ProfileComponent, dashboard_component_1.DashboardComponent, users_component_1.UsersComponent, user_create_component_1.UserCreateComponent, user_edit_component_1.UserEditComponent, roles_component_1.RolesComponent, role_create_component_1.RoleCreateComponent, role_edit_component_1.RoleEditComponent, products_component_1.ProductsComponent, paginator_component_1.PaginatorComponent, product_create_component_1.ProductCreateComponent, product_edit_component_1.ProductEditComponent, upload_component_1.UploadComponent, orders_component_1.OrdersComponent, tenent_component_1.TenentComponent, tenent_create_component_1.TenentCreateComponent],
        imports: [
            common_1.CommonModule,
            router_1.RouterModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            animations_1.BrowserAnimationsModule
        ]
    })
], SecureModule);
exports.SecureModule = SecureModule;
//# sourceMappingURL=secure.module.js.map