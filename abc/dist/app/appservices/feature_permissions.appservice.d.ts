import { HttpService } from "@nestjs/common";
import { Feature_PermissionsDto } from "../../submodules/Ecommerce-Platform-Dtos/feature_permissionsDto";
import { Feature_Permission } from "../../submodules/Ecommerce-Platform-Entities/feature_permissions";
import AppService from "../../submodules/Ecommerce-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
export default class Feature_PermissionsAppService extends AppService<Feature_Permission, Feature_PermissionsDto> {
    private readonly feature_permissionsRepository;
    http: HttpService;
    constructor(feature_permissionsRepository: Repository<Feature_Permission>, http: HttpService);
}
