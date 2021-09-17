import Feature_PermissionsAppService from "../appservices/feature_permissions.appservice";
import { Feature_PermissionsDto } from "../../submodules/Ecommerce-Platform-Dtos/feature_permissionsDto";
import { Feature_Permission } from "../../submodules/Ecommerce-Platform-Entities/feature_permissions";
import FacadeBase from "./facadebase";
export declare class Feature_PermissionsFacade extends FacadeBase<Feature_Permission, Feature_PermissionsDto> {
    private feature_permissionsAppService;
    constructor(feature_permissionsAppService: Feature_PermissionsAppService);
}
