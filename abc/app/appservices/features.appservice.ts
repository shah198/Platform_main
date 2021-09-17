import { HttpService, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FeaturesDto } from "../../submodules/Ecommerce-Platform-Dtos/featuresDto";
import { Feature } from "../../submodules/Ecommerce-Platform-Entities/features";
import AppService from "../../submodules/Ecommerce-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
let dto = require('../../submodules/Ecommerce-Platform-Mappings/features.mapper')

@Injectable()
export default class FeaturesAppService extends AppService<Feature,FeaturesDto>{
    constructor(@InjectRepository(Feature) private readonly featuresRepository: Repository<Feature>,public http:HttpService) {
        super(http,featuresRepository,Feature,Feature,FeaturesDto,dto.featuresentityJson, dto.featuresdtoJson,dto.featuresentityToDtoJson, dto.featuresdtoToEntityJson);
             
    }

} 