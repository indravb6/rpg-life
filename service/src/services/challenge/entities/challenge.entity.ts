import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "../../../common/entity/base.entity";
import { Category } from "./category.entity";
import { ChallengeSubmission } from "./challenge-submission.entity";

@Entity()
export class Challenge extends BaseEntity {
  @Column({ type: "varchar", length: 100 })
  title: string;

  @ManyToOne((type) => Category, (category) => category.challenges)
  category: Category;

  @Column({ type: "smallint" })
  exp: number;

  @Column({ type: "smallint" })
  requiredLevel: number;

  // Gained by completing achievements that improve or require physical health and fitness.
  @Column({ type: "smallint", nullable: true })
  strengthPoint: number;

  // Gained by completing achievements that make you more worldly,
  // open-minded, and appreciative of history, the arts, and traditions and practices of humanity.
  @Column({ type: "smallint", nullable: true })
  culturePoint: number;

  // Gained by completing achievements that improve your surroundings
  // both indoor and outdoor or involves improving or connecting you with
  // your city, country, or the world.
  @Column({ type: "smallint", nullable: true })
  environmentPoint: number;

  // Gained by completing achievements that involve social skills, interaction
  // or communication with others
  @Column({ type: "smallint", nullable: true })
  charismaPoint: number;

  // Gained by completing achievements that improve or require a specialized skill or ability.
  @Column({ type: "smallint", nullable: true })
  talentPoint: number;

  //Gained by completing achievements that improve knowledge or requires education and research to complete.
  @Column({ type: "smallint", nullable: true })
  intellectPoint: number;

  @OneToMany((type) => ChallengeSubmission, (challengeSubmission) => challengeSubmission.challenge)
  challengeSubmissions: ChallengeSubmission[];
}
