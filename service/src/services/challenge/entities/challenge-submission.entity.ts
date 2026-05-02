import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntity } from "../../../common/entity/base.entity";
import { Profile } from "../../user/entities/profile.entity";
import { Challenge } from "./challenge.entity";

@Entity()
export class ChallengeSubmission extends BaseEntity {
  @ManyToOne((type) => Profile, (profile) => profile.challengeSubmissions)
  profile: Profile;

  @ManyToOne((type) => Challenge, (challenge) => challenge.challengeSubmissions)
  challenge: Challenge;

  @Column({ type: "varchar", length: 250 })
  comment: string;

  // TODO: add image
}
