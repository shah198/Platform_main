import RolesAppService from "../appservices/roles.appservice";
import { RolesDto } from "../../submodules/Ecommerce-Platform-Dtos/rolesDto";
import { Role } from "../../submodules/Ecommerce-Platform-Entities/roles";
import FacadeBase from "./facadebase";
export declare class RolesFacade extends FacadeBase<Role, RolesDto> {
    private rolesAppService;
    constructor(rolesAppService: RolesAppService);
}
