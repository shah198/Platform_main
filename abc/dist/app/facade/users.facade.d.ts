import UsersAppService from "../appservices/users.appservice";
import { UsersDto } from "../../submodules/Ecommerce-Platform-Dtos/usersDto";
import { User } from "../../submodules/Ecommerce-Platform-Entities/users";
import FacadeBase from "./facadebase";
export declare class UsersFacade extends FacadeBase<User, UsersDto> {
    private usersAppService;
    constructor(usersAppService: UsersAppService);
}
