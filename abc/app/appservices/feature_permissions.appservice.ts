import { HttpService, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Feature_PermissionsDto } from "../../submodules/Ecommerce-Platform-Dtos/feature_permissionsDto";
import { Feature_Permission } from "../../submodules/Ecommerce-Platform-Entities/feature_permissions";
import AppService from "../../submodules/Ecommerce-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
let dto = require('../../submodules/Ecommerce-Platform-Mappings/feature_permissions.mapper')

@Injectable()
export default class Feature_PermissionsAppService extends AppService<Feature_Permission,Feature_PermissionsDto>{
    constructor(@InjectRepository(Feature_Permission) private readonly feature_permissionsRepository: Repository<Feature_Permission>,public http:HttpService) {
        super(http,feature_permissionsRepository,Feature_Permission,Feature_Permission,Feature_PermissionsDto,dto.feature_permissionsentityJson, dto.feature_permissionsdtoJson,dto.feature_permissionsentityToDtoJson, dto.feature_permissionsdtoToEntityJson);
             
    }

} 