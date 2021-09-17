import AppsAppService from "../appservices/apps.appservice";
import { AppsDto } from "../../submodules/Ecommerce-Platform-Dtos/appsDto";
import { App } from "../../submodules/Ecommerce-Platform-Entities/apps";
import FacadeBase from "./facadebase";
export declare class AppsFacade extends FacadeBase<App, AppsDto> {
    private appsAppService;
    constructor(appsAppService: AppsAppService);
}
