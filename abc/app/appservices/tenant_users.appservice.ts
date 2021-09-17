import { HttpService, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Tenant_UsersDto } from "../../submodules/Ecommerce-Platform-Dtos/tenant_usersDto";
import { Tenant_User } from "../../submodules/Ecommerce-Platform-Entities/tenant_users";
import AppService from "../../submodules/Ecommerce-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
let dto = require('../../submodules/Ecommerce-Platform-Mappings/tenant_users.mapper')

@Injectable()
export default class Tenant_UsersAppService extends AppService<Tenant_User,Tenant_UsersDto>{
    constructor(@InjectRepository(Tenant_User) private readonly tenant_usersRepository: Repository<Tenant_User>,public http:HttpService) {
        super(http,tenant_usersRepository,Tenant_User,Tenant_User,Tenant_UsersDto,dto.tenant_usersentityJson, dto.tenant_usersdtoJson,dto.tenant_usersentityToDtoJson, dto.tenant_usersdtoToEntityJson);
             
    }

} 