import { HttpService, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Tenant_App_FeaturesDto } from "../../submodules/Ecommerce-Platform-Dtos/tenant_app_featuresDto";
import { Tenant_App_Feature } from "../../submodules/Ecommerce-Platform-Entities/tenant_app_features";
import AppService from "../../submodules/Ecommerce-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
let dto = require('../../submodules/Ecommerce-Platform-Mappings/tenant_app_featuresMapper')

@Injectable()
export default class Tenant_App_FeaturesAppService extends AppService<Tenant_App_Feature,Tenant_App_FeaturesDto>{
    constructor(@InjectRepository(Tenant_App_Feature) private readonly tenant_app_featuresRepository: Repository<Tenant_App_Feature>,public http:HttpService) {
        super(http,tenant_app_featuresRepository,Tenant_App_Feature,Tenant_App_Feature,Tenant_App_FeaturesDto,dto.tenant_app_featuresentityJson, dto.tenant_app_featuresdtoJson,dto.tenant_app_featuresentityToDtoJson, dto.tenant_app_featuresdtoToEntityJson);
             
    }

} 