import { CharacterEntity } from "src/characters/models/character.entity";

export interface SkillModel {
    id?: number;
    name: string;
    power: number;
    type: string;
    character: CharacterEntity;
}