import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SkillController } from "./controllers/skill.controller";
import { SkillEntity } from "./models/skill.entity";
import { SkillService } from "./services/skill.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([SkillEntity])
    ],
    providers: [SkillService],
    controllers: [ SkillController]
})
export class SkillModule {}