import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthController } from "./controllers/auth.controller";
import { AuthService } from "./services/auth.service";
import { UserEntity } from "./models/auth.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([UserEntity])
    ],
    providers : [ AuthService],
    controllers : [ AuthController]
})
export class AuthModule {}