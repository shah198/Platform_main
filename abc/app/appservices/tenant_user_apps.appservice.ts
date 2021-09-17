import { HttpService, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Tenant_User_AppsDto } from "../../submodules/Ecommerce-Platform-Dtos/tenant_user_appsDto";
import { Tenant_User_App } from "../../submodules/Ecommerce-Platform-Entities/tenant_user_apps";
import AppService from "../../submodules/Ecommerce-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
let dto = require('../../submodules/Ecommerce-Platform-Mappings/tenant_user_apps.mapper')

@Injectable()
export default class Tenant_User_AppsAppService extends AppService<Tenant_User_App,Tenant_User_AppsDto>{
    constructor(@InjectRepository(Tenant_User_App) private readonly tenant_user_appsRepository: Repository<Tenant_User_App>,public http:HttpService) {
        super(http,tenant_user_appsRepository,Tenant_User_App,Tenant_User_App,Tenant_User_AppsDto,dto.tenant_user_appsentityJson, dto.tenant_user_appsdtoJson,dto.tenant_user_appsentityToDtoJson, dto.tenant_user_appsdtoToEntityJson);
             
    }

} 