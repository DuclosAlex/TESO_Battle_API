import { UserEntity } from "src/auth/models/auth.entity";
import { CharacterEntity } from "src/characters/models/character.entity";
import { CharacterCharacteristicsEntity } from "src/characterCharacteristics/models/characterCharacteristics.entity";

export interface GlobalCharacter {
    id?: number;
    user: UserEntity;
    character: CharacterEntity;
    caracteristics: CharacterCharacteristicsEntity;
}