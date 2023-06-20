import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StageController } from './controllers/stage.controller';
import { StageEntity } from './models/stage.entity';
import { StageService } from './services/stage.service';

@Module({
    imports : [
        TypeOrmModule.forFeature([ StageEntity])
    ],
    providers : [StageService],
    controllers : [ StageController]
})
export class StageModule {}