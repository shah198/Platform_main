import { HttpService } from "@nestjs/common";
import { RolesDto } from "../../submodules/Ecommerce-Platform-Dtos/rolesDto";
import { Role } from "../../submodules/Ecommerce-Platform-Entities/roles";
import AppService from "../../submodules/Ecommerce-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
export default class RolesAppService extends AppService<Role, RolesDto> {
    private readonly rolesRepository;
    http: HttpService;
    constructor(rolesRepository: Repository<Role>, http: HttpService);
}
