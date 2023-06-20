import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CharactersModule } from './characters/character.module';
import { SkillModule } from './skills/skill.module';
import { CharacterCharacteristicsModule } from './characterCharacteristics/characterCharacteristics.module';
import { GlobalCharacterModule } from './globalCharacterFromUser/globalCharacter.module';
import { AuthModule } from './auth/auth.module';
import { CampaignModule } from './campaigns/campaigns.module';
import { EnnemyModule } from './ennemies/ennemy.module';
import { StageModule } from './stages/stage.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal : true}),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(<string>process.env.DATABASE_PORT),
      username : process.env.DATABASE_USER,
      password : process.env.DATABASE_PASSWORD,
      database : process.env.DATABASE_NAME,
      autoLoadEntities : true,
      synchronize : true,
    }),
    CharactersModule, SkillModule, CharacterCharacteristicsModule, GlobalCharacterModule, AuthModule,
    EnnemyModule, CampaignModule, StageModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
