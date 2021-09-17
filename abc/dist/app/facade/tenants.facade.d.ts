import TenantsAppService from "../appservices/tenants.appservice";
import { TenantsDto } from "../../submodules/Ecommerce-Platform-Dtos/tenantsDto";
import { Tenant } from "../../submodules/Ecommerce-Platform-Entities/tenants";
import FacadeBase from "./facadebase";
export declare class TenantsFacade extends FacadeBase<Tenant, TenantsDto> {
    private tenantsAppService;
    constructor(tenantsAppService: TenantsAppService);
}
