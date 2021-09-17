import { HttpService, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { RolesDto } from "../../submodules/Ecommerce-Platform-Dtos/rolesDto";
import { Role } from "../../submodules/Ecommerce-Platform-Entities/roles";
import AppService from "../../submodules/Ecommerce-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
let dto = require('../../submodules/Ecommerce-Platform-Mappings/roles.mapper')

@Injectable()
export default class RolesAppService extends AppService<Role,RolesDto>{
    constructor(@InjectRepository(Role) private readonly rolesRepository: Repository<Role>,public http:HttpService) {
        super(http,rolesRepository,Role,Role,RolesDto,dto.rolesentityJson, dto.rolesdtoJson,dto.rolesentityToDtoJson, dto.rolesdtoToEntityJson);
             
    }
} 