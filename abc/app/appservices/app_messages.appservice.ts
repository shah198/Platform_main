import { HttpService, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { App_MessagesDto } from "../../submodules/Ecommerce-Platform-Dtos/app_messagesDto";
import { App_Message } from "../../submodules/Ecommerce-Platform-Entities/app_messages";
import AppService from "../../submodules/Ecommerce-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
let dto = require('../../submodules/Ecommerce-Platform-Mappings/app_messages.mapper')

@Injectable()
export default class App_MessagesAppService extends AppService<App_Message,App_MessagesDto>{
    constructor(@InjectRepository(App_Message) private readonly app_messagesRepository: Repository<App_Message>,public http:HttpService) {
        super(http,app_messagesRepository,App_Message,App_Message,App_MessagesDto,dto.app_messagesentityJson, dto.app_messagesdtoJson,dto.app_messagesentityToDtoJson, dto.app_messagesdtoToEntityJson);
             
    }

} 