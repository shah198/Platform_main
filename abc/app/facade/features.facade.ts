import { Injectable } from "@nestjs/common";
import FeaturesAppService from "../appservices/features.appservice";
import { FeaturesDto } from "../../submodules/Ecommerce-Platform-Dtos/featuresDto";
import { Feature } from "../../submodules/Ecommerce-Platform-Entities/features";
import FacadeBase from "./facadebase";

@Injectable()
export class FeaturesFacade extends FacadeBase<Feature,FeaturesDto>{
    constructor(private featuresAppService: FeaturesAppService){
       super(featuresAppService);
    }
}