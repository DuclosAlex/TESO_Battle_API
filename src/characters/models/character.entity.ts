import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { SkillEntity } from "src/skills/models/skill.entity";

@Entity('characters')
export class CharacterEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToOne(() => SkillEntity, (skills) => skills.character)
    skills: SkillEntity[]
}