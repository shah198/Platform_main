import { Injectable } from "@nestjs/common";
import TenantsAppService from "../appservices/tenants.appservice";
import { TenantsDto } from "../../submodules/Ecommerce-Platform-Dtos/tenantsDto";
import { Tenant } from "../../submodules/Ecommerce-Platform-Entities/tenants";
import FacadeBase from "./facadebase";

@Injectable()
export class TenantsFacade extends FacadeBase<Tenant,TenantsDto>{
    constructor(private tenantsAppService: TenantsAppService){
       super(tenantsAppService);
    }
}