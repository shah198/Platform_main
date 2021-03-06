import { HttpService } from "@nestjs/common";
import { Tenant_User_AppsDto } from "../../submodules/Ecommerce-Platform-Dtos/tenant_user_appsDto";
import { Tenant_User_App } from "../../submodules/Ecommerce-Platform-Entities/tenant_user_apps";
import AppService from "../../submodules/Ecommerce-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
export default class Tenant_User_AppsAppService extends AppService<Tenant_User_App, Tenant_User_AppsDto> {
    private readonly tenant_user_appsRepository;
    http: HttpService;
    constructor(tenant_user_appsRepository: Repository<Tenant_User_App>, http: HttpService);
}
