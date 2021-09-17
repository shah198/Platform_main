import { HttpService, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UsersDto } from "../../submodules/Ecommerce-Platform-Dtos/usersDto";
import { User } from "../../submodules/Ecommerce-Platform-Entities/users";
import AppService from "../../submodules/Ecommerce-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
let dto = require('../../submodules/Ecommerce-Platform-Mappings/users.mapper')

@Injectable()
export default class UsersAppService extends AppService<User,UsersDto>{
    constructor(@InjectRepository(User) private readonly usersRepository: Repository<User>,public http:HttpService) {
        super(http,usersRepository,User,User,UsersDto,dto.usersentityJson, dto.usersdtoJson,dto.usersentityToDtoJson, dto.usersdtoToEntityJson);
             
    }

} 