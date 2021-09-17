"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutingModule = void 0;
// import { TenentCreateComponent } from './secure/tenent/tenent-create/tenent-create.component';
// import { TenentComponent } from './secure/tenent/tenent.component';
const role_create_component_1 = require("./secure/roles/role-create/role-create.component");
const orders_component_1 = require("./secure/orders/orders.component");
const product_edit_component_1 = require("./secure/products/product-edit/product-edit.component");
const product_create_component_1 = require("./secure/products/product-create/product-create.component");
const products_component_1 = require("./secure/products/products.component");
const role_edit_component_1 = require("./secure/roles/role-edit/role-edit.component");
const roles_component_1 = require("./secure/roles/roles.component");
const user_edit_component_1 = require("./secure/users/user-edit/user-edit.component");
const user_create_component_1 = require("./secure/users/user-create/user-create.component");
const users_component_1 = require("./secure/users/users.component");
const dashboard_component_1 = require("./secure/dashboard/dashboard.component");
const profile_component_1 = require("./secure/profile/profile.component");
const public_component_1 = require("./public/public.component");
const secure_component_1 = require("./secure/secure.component");
const register_component_1 = require("./public/register/register.component");
const login_component_1 = require("./public/login/login.component");
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const tenent_component_1 = require("./secure/tenent/tenent.component");
const tenent_create_component_1 = require("./secure/tenent/tenent-create/tenent-create.component");
const routes = [
    { path: '',
        component: secure_component_1.SecureComponent,
        children: [
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
            { path: 'users', component: users_component_1.UsersComponent },
            { path: 'profile', component: profile_component_1.ProfileComponent },
            { path: 'users/create', component: user_create_component_1.UserCreateComponent },
            { path: 'users/:id/edit', component: user_edit_component_1.UserEditComponent },
            { path: 'roles', component: roles_component_1.RolesComponent },
            { path: 'roles/create', component: role_create_component_1.RoleCreateComponent },
            { path: 'roles/:id/edit', component: role_edit_component_1.RoleEditComponent },
            { path: 'products', component: products_component_1.ProductsComponent },
            { path: 'products/create', component: product_create_component_1.ProductCreateComponent },
            { path: 'products/:id/edit', component: product_edit_component_1.ProductEditComponent },
            { path: 'orders', component: orders_component_1.OrdersComponent },
            { path: 'tenent', component: tenent_component_1.TenentComponent },
            { path: 'tenent/create', component: tenent_create_component_1.TenentCreateComponent }
        ]
    },
    {
        path: '',
        component: public_component_1.PublicComponent,
        children: [
            { path: 'login', component: login_component_1.LoginComponent },
            { path: 'register', component: register_component_1.RegisterComponent }
        ]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map