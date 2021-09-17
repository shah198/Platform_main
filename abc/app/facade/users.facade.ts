import { Injectable } from "@nestjs/common";
import UsersAppService from "../appservices/users.appservice";
import { UsersDto } from "../../submodules/Ecommerce-Platform-Dtos/usersDto";
import { User } from "../../submodules/Ecommerce-Platform-Entities/users";
import FacadeBase from "./facadebase";

@Injectable()
export class UsersFacade extends FacadeBase<User,UsersDto>{
    constructor(private usersAppService: UsersAppService){
       super(usersAppService);
    }
}