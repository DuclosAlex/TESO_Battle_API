import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GlobalCharacterEntity } from './models/globalCharacter.entity';
import { GlobalCharacterController } from './controllers/globalCharacter.controller';
import { GlobalCharacterService } from './services/globalCharacter.service';

@Module({
    imports : [
        TypeOrmModule.forFeature([GlobalCharacterEntity])
    ],
    providers: [ GlobalCharacterService],
    controllers: [ GlobalCharacterController],
})
export class GlobalCharacterModule {}