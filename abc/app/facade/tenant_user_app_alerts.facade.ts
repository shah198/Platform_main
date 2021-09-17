import { Injectable } from "@nestjs/common";
import Tenant_User_App_AlertsAppService from "../appservices/tenant_user_app_alerts.appservice";
import { Tenant_User_App_AlertsDto } from "../../submodules/Ecommerce-Platform-Dtos/tenant_user_app_alertsDto";
import { Tenant_User_App_Alert } from "../../submodules/Ecommerce-Platform-Entities/tenant_user_app_alerts";
import FacadeBase from "./facadebase";

@Injectable()
export class Tenant_User_App_AlertsFacade extends FacadeBase<Tenant_User_App_Alert,Tenant_User_App_AlertsDto>{
    constructor(private tenant_user_app_alertsAppService: Tenant_User_App_AlertsAppService){
       super(tenant_user_app_alertsAppService);
    }
}