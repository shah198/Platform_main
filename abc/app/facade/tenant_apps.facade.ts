import { Injectable } from "@nestjs/common";
import Tenant_AppsAppService from "../appservices/tenant_apps.appservice";
import { Tenant_AppsDto } from "../../submodules/Ecommerce-Platform-Dtos/tenant_appsDto";
import { Tenant_App} from "../../submodules/Ecommerce-Platform-Entities/tenant_apps";
import FacadeBase from "./facadebase";

@Injectable()
export class Tenant_AppsFacade extends FacadeBase<Tenant_App,Tenant_AppsDto>{
    constructor(private tenant_appsAppService: Tenant_AppsAppService){
       super(tenant_appsAppService);
    }
}