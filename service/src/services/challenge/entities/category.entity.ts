import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "../../../common/entity/base.entity";
import { Challenge } from "./challenge.entity";

@Entity()
export class Category extends BaseEntity {
  @Column({ type: "varchar", length: 50 })
  title: string;

  @OneToMany((type) => Challenge, (challenge) => challenge.category)
  challenges: Challenge[];
}
