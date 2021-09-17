import ClientsAppService from "../appservices/clients.appservice";
import { ClientsDto } from "../../submodules/Ecommerce-Platform-Dtos/clientsDto";
import { Client } from "../../submodules/Ecommerce-Platform-Entities/clients";
import FacadeBase from "./facadebase";
export declare class ClientsFacade extends FacadeBase<Client, ClientsDto> {
    private clientsAppService;
    constructor(clientsAppService: ClientsAppService);
}
