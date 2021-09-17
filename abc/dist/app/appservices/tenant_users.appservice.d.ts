import { HttpService } from "@nestjs/common";
import { Tenant_UsersDto } from "../../submodules/Ecommerce-Platform-Dtos/tenant_usersDto";
import { Tenant_User } from "../../submodules/Ecommerce-Platform-Entities/tenant_users";
import AppService from "../../submodules/Ecommerce-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
export default class Tenant_UsersAppService extends AppService<Tenant_User, Tenant_UsersDto> {
    private readonly tenant_usersRepository;
    http: HttpService;
    constructor(tenant_usersRepository: Repository<Tenant_User>, http: HttpService);
}
