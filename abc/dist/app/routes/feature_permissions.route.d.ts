import { Feature_PermissionsFacade } from '../facade/feature_permissions.facade';
import { ResponseModel } from '../../submodules/Ecommerce-Platform-Common/ResponseModel';
import { Feature_PermissionsDto } from '../../submodules/Ecommerce-Platform-Dtos/feature_permissionsDto';
import { RequestModel } from '../../submodules/Ecommerce-Platform-Common/RequestModel';
export declare class Feature_PermissionsRoutes {
    private feature_permissionsFacade;
    constructor(feature_permissionsFacade: Feature_PermissionsFacade);
    private sns_sqs;
    private topicArray;
    private serviceName;
    onModuleInit(): void;
    allFeaturePermissions(): Promise<ResponseModel<Feature_PermissionsDto>>;
    featurePermissionById(id: number): Promise<ResponseModel<Feature_PermissionsDto>>;
    createFeaturePermissions(body: RequestModel<Feature_PermissionsDto>): Promise<ResponseModel<Feature_PermissionsDto>>;
    updateFeaturePermissions(body: RequestModel<Feature_PermissionsDto>): Promise<ResponseModel<Feature_PermissionsDto>>;
    deleteFeaturePermissions(body: RequestModel<Feature_PermissionsDto>): Promise<ResponseModel<Feature_PermissionsDto>>;
}
