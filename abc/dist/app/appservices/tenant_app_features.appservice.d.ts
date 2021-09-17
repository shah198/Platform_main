import { HttpService } from "@nestjs/common";
import { Tenant_App_FeaturesDto } from "../../submodules/Ecommerce-Platform-Dtos/tenant_app_featuresDto";
import { Tenant_App_Feature } from "../../submodules/Ecommerce-Platform-Entities/tenant_app_features";
import AppService from "../../submodules/Ecommerce-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
export default class Tenant_App_FeaturesAppService extends AppService<Tenant_App_Feature, Tenant_App_FeaturesDto> {
    private readonly tenant_app_featuresRepository;
    http: HttpService;
    constructor(tenant_app_featuresRepository: Repository<Tenant_App_Feature>, http: HttpService);
}
