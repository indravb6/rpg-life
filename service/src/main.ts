import { INestApplication, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import cookieParser from "cookie-parser";
import { AppModule } from "./app.module";
import { ValidationPipe } from "./common/middleware/validation.pipe";

function setupSwagger(app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle("RPG-Life")
    .setDescription(
      "A social life RPG that guides users through curated real-world challenges and turns personal growth into a shared, engaging experience.",
    )
    .setVersion("1.0")
    .build();
  SwaggerModule.setup("/swagger", app, () => SwaggerModule.createDocument(app, options));
}

async function run() {
  const app = await NestFactory.create(AppModule);

  const config = app.get(ConfigService);

  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({ credentials: true, origin: config.get<string>("CORS_ORIGIN") });

  // seed(app.get(DataSource));

  setupSwagger(app);

  const port = config.get<number>("PORT") || 3000;
  await app.listen(port);

  Logger.log(`Application running on port http://127.0.0.1:${port}`);
}

run();
