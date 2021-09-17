import { HttpService } from "@nestjs/common";
import { Tenant_User_App_RolesDto } from "../../submodules/Ecommerce-Platform-Dtos/tenant_user_app_rolesDto";
import { Tenant_User_App_Role } from "../../submodules/Ecommerce-Platform-Entities/tenant_user_app_roles";
import AppService from "../../submodules/Ecommerce-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
export default class Tenant_User_App_RolesAppService extends AppService<Tenant_User_App_Role, Tenant_User_App_RolesDto> {
    private readonly tenant_user_app_rolesRepository;
    http: HttpService;
    constructor(tenant_user_app_rolesRepository: Repository<Tenant_User_App_Role>, http: HttpService);
}
