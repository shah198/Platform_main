import { HttpService } from "@nestjs/common";
import { TenantsDto } from "../../submodules/Ecommerce-Platform-Dtos/tenantsDto";
import { Tenant } from "../../submodules/Ecommerce-Platform-Entities/tenants";
import AppService from "../../submodules/Ecommerce-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
export default class TenantsAppService extends AppService<Tenant, TenantsDto> {
    private readonly tenantsRepository;
    http: HttpService;
    constructor(tenantsRepository: Repository<Tenant>, http: HttpService);
}
