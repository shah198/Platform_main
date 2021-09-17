import { HttpService } from "@nestjs/common";
import { AppsDto } from "../../submodules/Ecommerce-Platform-Dtos/appsDto";
import { App } from "../../submodules/Ecommerce-Platform-Entities/apps";
import AppService from "../../submodules/Ecommerce-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
export default class AppsAppService extends AppService<App, AppsDto> {
    private readonly appsRepository;
    http: HttpService;
    constructor(appsRepository: Repository<App>, http: HttpService);
}
