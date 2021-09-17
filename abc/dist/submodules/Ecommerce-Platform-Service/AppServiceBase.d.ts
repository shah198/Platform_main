import { RequestModelQuery } from './../Ecommerce-Platform-Common/RequestModelQuery';
import { ClassType } from "class-transformer/ClassTransformer";
import { ResponseModel } from "../Ecommerce-Platform-Common/ResponseModel";
import { ObjectType, Repository, SelectQueryBuilder } from "typeorm";
import { DtoBase } from "../Ecommerce-Platform-Dtos/DtoBase/dtobase";
import { RequestModel } from "../Ecommerce-Platform-Common/RequestModel";
import { HttpService } from "@nestjs/common";
import { EntityBase } from "../Ecommerce-Platform-Entities/EntityBase/entitybase";
import { SNS_SQS } from "../Ecommerce-Platform-RabbitMQConfig/SNS_SQS";
import { Condition } from 'submodules/Ecommerce-Platform-Common/condition';
export default class AppService<TEntity extends EntityBase, TDto extends DtoBase> {
    http: HttpService;
    readonly genericRepository: Repository<TEntity>;
    private type3;
    private entityClassType;
    private dtoClassType;
    private entityMap;
    private dtoMap;
    private entityToDtoMap;
    private dtoToEntitymap;
    private dict;
    sns_sqs: SNS_SQS;
    constructor(http: HttpService, genericRepository: Repository<TEntity>, type3: ObjectType<TEntity>, entityClassType: ClassType<TEntity>, dtoClassType: ClassType<TDto>, entityMap: Record<string, unknown>, dtoMap: Record<string, unknown>, entityToDtoMap: Record<string, unknown>, dtoToEntityMap: Record<string, unknown>);
    addDtoMap(map: Record<string, unknown>): void;
    addEntityMap(map: Record<string, unknown>): void;
    addEntityToDtoMap(map: Record<string, unknown>): void;
    addDtoToEntityMap(map: Record<string, unknown>): void;
    mapToDto(entities: TEntity[]): Promise<TDto[]>;
    mapToEntity(dtos: TDto[]): Promise<TEntity[]>;
    getAll(): Promise<ResponseModel<TDto>>;
    create(entity: RequestModel<TDto>): Promise<ResponseModel<TDto>>;
    updateEntity(dtos: RequestModel<TDto>): Promise<ResponseModel<TDto>>;
    deleteById(ids: any[]): Promise<ResponseModel<TDto>>;
    getByIds(id: any[]): Promise<ResponseModel<TDto>>;
    search(requestModel: RequestModelQuery, isCustomApi?: boolean, entityArray?: Array<Array<string>>): Promise<ResponseModel<TDto>>;
    private createQueryByRequestModelQuery;
    private createQueryByCustomApiRequirement;
    divideQueryByPageSizeAndPageNo(requestModel: RequestModelQuery, queryField: SelectQueryBuilder<TEntity>): Promise<SelectQueryBuilder<TEntity>>;
    assignConditionsToRequestModelQuery(requestModel: RequestModelQuery, queryField: SelectQueryBuilder<TEntity>): Promise<SelectQueryBuilder<TEntity>>;
    assignConditionsToRequestModelQueryV2(requestModel: RequestModelQuery, queryField: SelectQueryBuilder<TEntity>, isCaseInsensitiveSearch?: boolean): Promise<SelectQueryBuilder<TEntity>>;
    handleOrCondition(sourceEntity: string, condition: Condition, queryField: SelectQueryBuilder<TEntity>, sequence: number, isCaseInsensitiveSearch?: boolean): SelectQueryBuilder<TEntity>;
    handleAndCondition(sourceEntity: string, condition: Condition, queryField: SelectQueryBuilder<TEntity>, sequence: number, isCaseInsensitiveSearch?: boolean): SelectQueryBuilder<TEntity>;
}