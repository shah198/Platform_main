import { HttpService, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Tenant_User_App_AlertsDto } from "../../submodules/Ecommerce-Platform-Dtos/tenant_user_app_alertsDto";
import { Tenant_User_App_Alert } from "../../submodules/Ecommerce-Platform-Entities/tenant_user_app_alerts";
import AppService from "../../submodules/Ecommerce-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
let dto = require('../../submodules/Ecommerce-Platform-Mappings/tenant_user_app_alerts.mapper')

@Injectable()
export default class Tenant_User_App_AlertsAppService extends AppService<Tenant_User_App_Alert,Tenant_User_App_AlertsDto>{
    constructor(@InjectRepository(Tenant_User_App_Alert) private readonly tenant_user_app_alertsRepository: Repository<Tenant_User_App_Alert>,public http:HttpService) {
        super(http,tenant_user_app_alertsRepository,Tenant_User_App_Alert,Tenant_User_App_Alert,Tenant_User_App_AlertsDto,dto.tenant_user_app_alertsentityJson, dto.tenant_user_app_alertsdtoJson,dto.tenant_user_app_alertsentityToDtoJson, dto.tenant_user_app_alertsdtoToEntityJson);
             
    }

} 