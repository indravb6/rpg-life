import { Column, Entity, Index } from "typeorm";

import { BaseEntity } from "../../common/entity/base.entity";

@Entity()
export class User extends BaseEntity {
  @Index("IDX_USER_EMAIL", { unique: true })
  @Column({ type: "varchar", length: 256 })
  email: string;

  @Column({ type: "varchar", length: 50 })
  username: string;

  @Column({ type: "varchar", length: 64 })
  password: string;
}
