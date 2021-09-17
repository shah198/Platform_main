import { HttpService } from "@nestjs/common";
import { FeaturesDto } from "../../submodules/Ecommerce-Platform-Dtos/featuresDto";
import { Feature } from "../../submodules/Ecommerce-Platform-Entities/features";
import AppService from "../../submodules/Ecommerce-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
export default class FeaturesAppService extends AppService<Feature, FeaturesDto> {
    private readonly featuresRepository;
    http: HttpService;
    constructor(featuresRepository: Repository<Feature>, http: HttpService);
}
