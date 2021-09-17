import { HttpService, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TenantsDto } from "../../submodules/Ecommerce-Platform-Dtos/tenantsDto";
import { Tenant } from "../../submodules/Ecommerce-Platform-Entities/tenants";
import AppService from "../../submodules/Ecommerce-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
let dto = require('../../submodules/Ecommerce-Platform-Mappings/tenants.mapper')

@Injectable()
export default class TenantsAppService extends AppService<Tenant,TenantsDto>{
    constructor(@InjectRepository(Tenant) private readonly tenantsRepository: Repository<Tenant>,public http:HttpService) {
        super(http,tenantsRepository,Tenant,Tenant,TenantsDto,dto.tenantsentityJson, dto.tenantsdtoJson,dto.tenantsentityToDtoJson, dto.tenantsdtoToEntityJson);
             
    }

} 