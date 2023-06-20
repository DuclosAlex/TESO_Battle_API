import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CharacterCharacteristicsController } from "./controllers/characterCharacteristics.controller";
import { CharacterCharacteristicsEntity } from "./models/characterCharacteristics.entity";
import { CharacterCharacteristicsService } from "./services/characterCharacteristics.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([CharacterCharacteristicsEntity])
    ],
    providers : [ CharacterCharacteristicsService],
    controllers : [ CharacterCharacteristicsController]
})
export class CharacterCharacteristicsModule {}