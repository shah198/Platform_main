import { Injectable } from "@nestjs/common";
import RolesAppService from "../appservices/roles.appservice";
import { RolesDto } from "../../submodules/Ecommerce-Platform-Dtos/rolesDto";
import { Role} from "../../submodules/Ecommerce-Platform-Entities/roles";
import FacadeBase from "./facadebase";

@Injectable()
export class RolesFacade extends FacadeBase<Role,RolesDto>{
    constructor(private rolesAppService: RolesAppService){
       super(rolesAppService);
    }
}