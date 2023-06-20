import { Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import { CharacterEntity } from "src/characters/models/character.entity";

@Entity('skills')
export class SkillEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    type: string;

    @Column()
    power: number;

    @ManyToOne(() => CharacterEntity, (character) => character.skills)
    character: CharacterEntity
}