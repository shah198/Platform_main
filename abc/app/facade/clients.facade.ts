import { Injectable } from "@nestjs/common";
import ClientsAppService from "../appservices/clients.appservice";
import { ClientsDto } from "../../submodules/Ecommerce-Platform-Dtos/clientsDto";
import { Client } from "../../submodules/Ecommerce-Platform-Entities/clients";
import FacadeBase from "./facadebase";

@Injectable()
export class ClientsFacade extends FacadeBase<Client,ClientsDto>{
    constructor(private clientsAppService: ClientsAppService){
       super(clientsAppService);
    }
}