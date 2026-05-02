import { Column, Entity, Index, OneToOne } from "typeorm";

import { BaseEntity } from "../../../common/entity/base.entity";
import { Profile } from "./profile.entity";

@Entity()
export class User extends BaseEntity {
  @Index("IDX_USER_USERNAME", { unique: true })
  @Column({ type: "varchar", length: 50 })
  username: string;

  @Column({ type: "varchar", length: 256, nullable: true, unique: true })
  email: string;

  @Column({ type: "varchar", length: 64 })
  password: string;

  @OneToOne((type) => Profile, (profile) => profile.user)
  profile: Profile;
}
