import { HttpService, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AppsDto } from "../../submodules/Ecommerce-Platform-Dtos/appsDto";
import { App } from "../../submodules/Ecommerce-Platform-Entities/apps";
import AppService from "../../submodules/Ecommerce-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
let dto = require('../../submodules/Ecommerce-Platform-Mappings/apps.mapper')

@Injectable()
export default class AppsAppService extends AppService<App,AppsDto>{
    constructor(@InjectRepository(App) private readonly appsRepository: Repository<App>,public http:HttpService) {
        super(http,appsRepository,App,App,AppsDto,dto.appsentityJson, dto.appsdtoJson,dto.appsentityToDtoJson, dto.appsdtoToEntityJson);
             
    }

} 