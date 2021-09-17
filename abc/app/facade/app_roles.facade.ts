import { Injectable } from "@nestjs/common";
import App_RolesAppService from "../appservices/app_roles.appservice";
import { App_RolesDto } from "../../submodules/Ecommerce-Platform-Dtos/app_rolesDto";
import { App_Role } from "../../submodules/Ecommerce-Platform-Entities/app_roles";
import FacadeBase from "./facadebase";

@Injectable()
export class App_RolesFacade extends FacadeBase<App_Role,App_RolesDto>{
    constructor(private app_rolesAppService: App_RolesAppService){
       super(app_rolesAppService);
    }
}