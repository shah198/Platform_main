import { HttpService, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Tenant_AppsDto } from "../../submodules/Ecommerce-Platform-Dtos/tenant_appsDto";
import { Tenant_App } from "../../submodules/Ecommerce-Platform-Entities/tenant_apps";
import AppService from "../../submodules/Ecommerce-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
let dto = require('../../submodules/Ecommerce-Platform-Mappings/tenant_apps.mapper')

@Injectable()
export default class Tenant_AppsAppService extends AppService<Tenant_App,Tenant_AppsDto>{
    constructor(@InjectRepository(Tenant_App) private readonly tenant_appsRepository: Repository<Tenant_App>,public http:HttpService) {
        super(http,tenant_appsRepository,Tenant_App,Tenant_App,Tenant_AppsDto,dto.tenant_appsentityJson, dto.tenant_appsdtoJson,dto.tenant_appsentityToDtoJson, dto.tenant_appsdtoToEntityJson);
             
    }

} 