import FeaturesAppService from "../appservices/features.appservice";
import { FeaturesDto } from "../../submodules/Ecommerce-Platform-Dtos/featuresDto";
import { Feature } from "../../submodules/Ecommerce-Platform-Entities/features";
import FacadeBase from "./facadebase";
export declare class FeaturesFacade extends FacadeBase<Feature, FeaturesDto> {
    private featuresAppService;
    constructor(featuresAppService: FeaturesAppService);
}
