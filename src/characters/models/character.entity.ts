import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { SkillEntity } from "src/skills/models/skill.entity";

@Entity('characters')
export class CharacterEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => SkillEntity, (skills) => skills.character)
    skills: SkillEntity[];

    @Column()
    src: string;

    @Column()
    alt: string;
}