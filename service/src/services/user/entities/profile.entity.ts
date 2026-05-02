import { Column, Entity, OneToMany, OneToOne } from "typeorm";
import { BaseEntity } from "../../../common/entity/base.entity";
import { ChallengeSubmission } from "../../challenge/entities/challenge-submission.entity";
import { User } from "./user.entity";

@Entity()
export class Profile extends BaseEntity {
  @OneToOne((type) => User, (user) => user.profile)
  user: User;

  @Column({ type: "smallint" })
  level: number;

  @Column({ type: "smallint" })
  exp: number;

  @Column({ type: "smallint" })
  strengthPoint: number;

  @Column({ type: "smallint" })
  culturePoint: number;

  @Column({ type: "smallint" })
  environmentPoint: number;

  @Column({ type: "smallint" })
  charismaPoint: number;

  @Column({ type: "smallint" })
  talentPoint: number;

  @Column({ type: "smallint" })
  intellectPoint: number;

  @OneToMany((type) => ChallengeSubmission, (challengeSubmission) => challengeSubmission.profile)
  challengeSubmissions: ChallengeSubmission[];
}
