import { HttpService } from "@nestjs/common";
import { UsersDto } from "../../submodules/Ecommerce-Platform-Dtos/usersDto";
import { User } from "../../submodules/Ecommerce-Platform-Entities/users";
import AppService from "../../submodules/Ecommerce-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
export default class UsersAppService extends AppService<User, UsersDto> {
    private readonly usersRepository;
    http: HttpService;
    constructor(usersRepository: Repository<User>, http: HttpService);
}
