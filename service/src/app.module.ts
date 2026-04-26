import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppDataSource } from "./data-source";
import { UserModule } from "./services/user/user.module";

@Module({
  imports: [TypeOrmModule.forRoot(AppDataSource.options), UserModule],
})
export class AppModule {}
