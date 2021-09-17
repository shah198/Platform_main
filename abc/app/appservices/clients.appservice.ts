import { HttpService, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ClientsDto } from "../../submodules/Ecommerce-Platform-Dtos/clientsDto";
import { Client } from "../../submodules/Ecommerce-Platform-Entities/clients";
import AppService from "../../submodules/Ecommerce-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
let dto = require('../../submodules/Ecommerce-Platform-Mappings/clients.mapper')

@Injectable()
export default class ClientsAppService extends AppService<Client,ClientsDto>{
    constructor(@InjectRepository(Client) private readonly clientsRepository: Repository<Client>,public http:HttpService) {
        super(http,clientsRepository,Client,Client,ClientsDto,dto.clientsentityJson, dto.clientsdtoJson,dto.clientsentityToDtoJson, dto.clientsdtoToEntityJson);
             
    }

} 