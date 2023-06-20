import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnnemyEntity } from './models/ennemy.entity';
import { EnnemyController } from './controllers/ennemy.controller';
import { EnnemyService } from './services/ennemy.service';

@Module({
    imports : [
        TypeOrmModule.forFeature([EnnemyEntity])
    ],
    providers : [ EnnemyService],
    controllers : [ EnnemyController]
}) 
export class EnnemyModule {};