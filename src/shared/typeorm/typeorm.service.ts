import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { CharacterEntity } from 'src/characters/models/character.entity';
import { SkillEntity } from 'src/skills/models/skill.entity';
import { CharacterCharacteristicsEntity } from 'src/characterCharacteristics/models/characterCharacteristics.entity';


@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  @Inject(ConfigService)
  private readonly config: ConfigService;

  public createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.config.get<string>('DATABASE_HOST'),
      port: this.config.get<number>('DATABASE_PORT'),
      database: this.config.get<string>('DATABASE_NAME'),
      username: this.config.get<string>('DATABASE_USER'),
      password: this.config.get<string>('DATABASE_PASSWORD'),
      entities : [ CharacterEntity, SkillEntity, CharacterCharacteristicsEntity],
      synchronize: true, // never use TRUE in production!
    };
  }
}