import { Injectable } from "@nestjs/common";
import AppsAppService from "../appservices/apps.appservice";
import { AppsDto } from "../../submodules/Ecommerce-Platform-Dtos/appsDto";
import { App } from "../../submodules/Ecommerce-Platform-Entities/apps";
import FacadeBase from "./facadebase";

@Injectable()
export class AppsFacade extends FacadeBase<App,AppsDto>{
    constructor(private appsAppService: AppsAppService){
       super(appsAppService);
    }
}