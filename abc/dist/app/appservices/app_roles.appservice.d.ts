import { HttpService } from "@nestjs/common";
import { App_RolesDto } from "../../submodules/Ecommerce-Platform-Dtos/app_rolesDto";
import { App_Role } from "../../submodules/Ecommerce-Platform-Entities/app_roles";
import AppService from "../../submodules/Ecommerce-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
export default class App_RolesAppService extends AppService<App_Role, App_RolesDto> {
    private readonly app_rolesRepository;
    http: HttpService;
    constructor(app_rolesRepository: Repository<App_Role>, http: HttpService);
}
