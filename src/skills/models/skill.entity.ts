import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn} from "typeorm";
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

    @OneToOne(() => CharacterEntity)
    @JoinColumn()
    character: CharacterEntity;
}