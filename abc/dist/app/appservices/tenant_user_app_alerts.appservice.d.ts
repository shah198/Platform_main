import { HttpService } from "@nestjs/common";
import { Tenant_User_App_AlertsDto } from "../../submodules/Ecommerce-Platform-Dtos/tenant_user_app_alertsDto";
import { Tenant_User_App_Alert } from "../../submodules/Ecommerce-Platform-Entities/tenant_user_app_alerts";
import AppService from "../../submodules/Ecommerce-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
export default class Tenant_User_App_AlertsAppService extends AppService<Tenant_User_App_Alert, Tenant_User_App_AlertsDto> {
    private readonly tenant_user_app_alertsRepository;
    http: HttpService;
    constructor(tenant_user_app_alertsRepository: Repository<Tenant_User_App_Alert>, http: HttpService);
}
