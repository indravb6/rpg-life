import { Column, Entity, ManyToOne, Unique } from "typeorm";
import { BaseEntity } from "../../../common/entity/base.entity";
import { Profile } from "../../user/entities/profile.entity";
import { Challenge } from "./challenge.entity";

@Entity()
@Unique(["profile", "challenge"])
export class ChallengeSubmission extends BaseEntity {
  @ManyToOne((type) => Profile, (profile) => profile.challengeSubmissions, { nullable: false })
  profile: Profile;

  @ManyToOne((type) => Challenge, (challenge) => challenge.challengeSubmissions, { nullable: false })
  challenge: Challenge;

  @Column({ type: "varchar", length: 250 })
  comment: string;

  // TODO: add image
}
