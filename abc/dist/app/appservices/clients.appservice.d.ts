import { HttpService } from "@nestjs/common";
import { ClientsDto } from "../../submodules/Ecommerce-Platform-Dtos/clientsDto";
import { Client } from "../../submodules/Ecommerce-Platform-Entities/clients";
import AppService from "../../submodules/Ecommerce-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
export default class ClientsAppService extends AppService<Client, ClientsDto> {
    private readonly clientsRepository;
    http: HttpService;
    constructor(clientsRepository: Repository<Client>, http: HttpService);
}
