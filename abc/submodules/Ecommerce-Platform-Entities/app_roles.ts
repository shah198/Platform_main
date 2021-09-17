import { Column, Entity, JoinColumn, ManyToOne, Unique } from "typeorm";
import { EntityBase } from "./EntityBase/entitybase";
import { App } from "./apps";
import { Role } from "./roles";

@Entity('app_roles',{"schema": "platform"})
@Unique(["id"])
export class App_Role extends EntityBase {
    
  @Column({ name: "role_id", nullable: false })
    role_id?: number;
  @Column({ name: "app_id", nullable: false })
    app_id?: number;
  @Column({ name: "app_role_permisssions" , nullable: false})
    app_role_permissions?: string;

    @ManyToOne(
      (type) => App,
      (apps) => apps.id,
    )
    @JoinColumn({name: "app_id"})
    apps: App[];
    @ManyToOne(
      (type) => Role,
      (roles) => roles.id,
    )
    @JoinColumn({name: "role_id"})
    roles: Role[];
}