import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import { AuthModule } from "./services/auth/auth.module";
import { ChallengeModule } from "./services/challenge/challenge.module";
import { UserModule } from "./services/user/user.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: "postgres",
        host: config.get("DB_HOST"),
        port: config.get<number>("DB_PORT") ?? 5432,
        username: config.get("DB_USER"),
        password: config.get("DB_PASS"),
        database: config.get("DB_NAME"),
        synchronize: true,
        logging: true,
        autoLoadEntities: true,
        subscribers: [],
        migrations: [],
        namingStrategy: new SnakeNamingStrategy(),
      }),
    }),
    AuthModule,
    UserModule,
    ChallengeModule,
  ],
})
export class AppModule {}
