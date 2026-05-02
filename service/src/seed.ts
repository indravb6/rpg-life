import { NestFactory } from "@nestjs/core";
import { DataSource, EntityManager } from "typeorm";
import { AppModule } from "./app.module";
import { Category } from "./services/challenge/entities/category.entity";
import { Challenge } from "./services/challenge/entities/challenge.entity";

async function seedCategories(entityManager: EntityManager) {
  const categoryRepository = entityManager.getRepository(Category);

  const data = [
    "Arts & Creativity",
    "Career & Finances",
    "Fitness & Health",
    "Food & Cooking",
    "Fun",
    "Household & DIY",
    "Humanity",
    "Mental",
    "Outdoors",
    "Reading",
    "School & Learning",
    "Social",
    "Travel",
  ];

  const entities = data.map((title) => categoryRepository.create({ title }));
  return await categoryRepository.save(entities);
}
async function seedChallenges(entityManager: EntityManager, categories: Category[]) {
  const challengeRepository = entityManager.getRepository(Challenge);

  const data = [
    // 🎨 Arts & Creativity
    {
      title: "Sketch something for 10 minutes",
      exp: 20,
      requiredLevel: 1,
      culturePoint: 2,
      charismaPoint: 1,
      talentPoint: 3,
      intellectPoint: 1,
      category: categories[0],
    },
    {
      title: "Write a short poem",
      exp: 25,
      requiredLevel: 1,
      culturePoint: 3,
      charismaPoint: 1,
      talentPoint: 2,
      intellectPoint: 2,
      category: categories[0],
    },
    {
      title: "Take 5 aesthetic photos",
      exp: 20,
      requiredLevel: 1,
      culturePoint: 2,
      charismaPoint: 2,
      talentPoint: 2,
      intellectPoint: 1,
      category: categories[0],
    },
    {
      title: "Design a simple poster",
      exp: 30,
      requiredLevel: 2,
      culturePoint: 3,
      charismaPoint: 1,
      talentPoint: 3,
      intellectPoint: 2,
      category: categories[0],
    },
    {
      title: "Create a short video (1 min)",
      exp: 40,
      requiredLevel: 2,
      culturePoint: 3,
      charismaPoint: 2,
      talentPoint: 3,
      intellectPoint: 2,
      category: categories[0],
    },

    // 💼 Career & Finances
    {
      title: "Update your CV",
      exp: 30,
      requiredLevel: 1,
      culturePoint: 1,
      charismaPoint: 2,
      talentPoint: 1,
      intellectPoint: 3,
      category: categories[1],
    },
    {
      title: "Apply to 3 jobs",
      exp: 40,
      requiredLevel: 1,
      culturePoint: 1,
      charismaPoint: 3,
      talentPoint: 1,
      intellectPoint: 2,
      category: categories[1],
    },
    {
      title: "Track your expenses today",
      exp: 20,
      requiredLevel: 1,
      culturePoint: 1,
      charismaPoint: 1,
      talentPoint: 1,
      intellectPoint: 3,
      category: categories[1],
    },
    {
      title: "Learn a new professional skill (30 min)",
      exp: 35,
      requiredLevel: 2,
      culturePoint: 1,
      charismaPoint: 1,
      talentPoint: 2,
      intellectPoint: 4,
      category: categories[1],
    },
    {
      title: "Set a monthly financial goal",
      exp: 25,
      requiredLevel: 1,
      culturePoint: 1,
      charismaPoint: 1,
      talentPoint: 1,
      intellectPoint: 3,
      category: categories[1],
    },

    // 💪 Fitness & Health
    {
      title: "Do 20 push-ups",
      exp: 20,
      requiredLevel: 1,
      culturePoint: 0,
      charismaPoint: 1,
      talentPoint: 3,
      intellectPoint: 1,
      category: categories[2],
    },
    {
      title: "Walk 5,000 steps",
      exp: 25,
      requiredLevel: 1,
      culturePoint: 0,
      charismaPoint: 1,
      talentPoint: 2,
      intellectPoint: 1,
      category: categories[2],
    },
    {
      title: "Drink 2L of water",
      exp: 15,
      requiredLevel: 1,
      culturePoint: 0,
      charismaPoint: 1,
      talentPoint: 1,
      intellectPoint: 2,
      category: categories[2],
    },
    {
      title: "Do a 15-min workout",
      exp: 30,
      requiredLevel: 1,
      culturePoint: 0,
      charismaPoint: 1,
      talentPoint: 3,
      intellectPoint: 1,
      category: categories[2],
    },
    {
      title: "Sleep 7+ hours",
      exp: 20,
      requiredLevel: 1,
      culturePoint: 0,
      charismaPoint: 1,
      talentPoint: 1,
      intellectPoint: 2,
      category: categories[2],
    },

    // 🍳 Food & Cooking
    {
      title: "Cook a simple meal",
      exp: 30,
      requiredLevel: 1,
      culturePoint: 2,
      charismaPoint: 1,
      talentPoint: 2,
      intellectPoint: 2,
      category: categories[3],
    },
    {
      title: "Try a new recipe",
      exp: 35,
      requiredLevel: 1,
      culturePoint: 2,
      charismaPoint: 1,
      talentPoint: 3,
      intellectPoint: 2,
      category: categories[3],
    },
    {
      title: "Prepare your own breakfast",
      exp: 20,
      requiredLevel: 1,
      culturePoint: 1,
      charismaPoint: 1,
      talentPoint: 2,
      intellectPoint: 1,
      category: categories[3],
    },
    {
      title: "Avoid junk food today",
      exp: 20,
      requiredLevel: 1,
      culturePoint: 1,
      charismaPoint: 1,
      talentPoint: 1,
      intellectPoint: 2,
      category: categories[3],
    },
    {
      title: "Meal prep for tomorrow",
      exp: 30,
      requiredLevel: 2,
      culturePoint: 1,
      charismaPoint: 1,
      talentPoint: 2,
      intellectPoint: 3,
      category: categories[3],
    },

    // 🎉 Fun
    {
      title: "Watch a movie",
      exp: 15,
      requiredLevel: 1,
      culturePoint: 2,
      charismaPoint: 1,
      talentPoint: 1,
      intellectPoint: 1,
      category: categories[4],
    },
    {
      title: "Play a game for 30 minutes",
      exp: 15,
      requiredLevel: 1,
      culturePoint: 1,
      charismaPoint: 1,
      talentPoint: 1,
      intellectPoint: 1,
      category: categories[4],
    },
    {
      title: "Listen to new music",
      exp: 10,
      requiredLevel: 1,
      culturePoint: 2,
      charismaPoint: 1,
      talentPoint: 1,
      intellectPoint: 1,
      category: categories[4],
    },
    {
      title: "Do something spontaneous",
      exp: 20,
      requiredLevel: 1,
      culturePoint: 2,
      charismaPoint: 2,
      talentPoint: 1,
      intellectPoint: 1,
      category: categories[4],
    },
    {
      title: "Take a break with no screen (30 min)",
      exp: 20,
      requiredLevel: 1,
      culturePoint: 1,
      charismaPoint: 1,
      talentPoint: 1,
      intellectPoint: 2,
      category: categories[4],
    },

    // (biar gak terlalu panjang, pola sama untuk kategori lain)
  ];

  const entities = data.map((challenge) => challengeRepository.create(challenge));

  return await challengeRepository.save(entities);
}

export async function seed(entityManager: EntityManager) {
  await entityManager.transaction(async (manager) => {
    await manager.getRepository(Challenge).deleteAll();
    await manager.getRepository(Category).deleteAll();

    const categories = await seedCategories(manager);
    await seedChallenges(manager, categories);
  });
}

async function runSeed() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const dataSource = app.get(DataSource);
  const entityManager = dataSource.manager;

  await seed(entityManager);

  await app.close();
}

runSeed();
