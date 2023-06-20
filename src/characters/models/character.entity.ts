import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { SkillEntity } from "src/skills/models/skill.entity";
import { GlobalCharacterEntity } from "src/globalCharacterFromUser/models/globalCharacter.entity";

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

    @Column({ default: null})
    description: null | string;

    @Column()
    speed: number;

    @Column()
    initiative: number;

    @Column()
    strength: number;

    @Column()
    vitality: number;

    @Column()
    lp: number;

    @OneToMany(() => GlobalCharacterEntity, (globalCharacter) => globalCharacter.character)
    globalCharacter: GlobalCharacterEntity;


    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMPZ' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMPZ' })
    updatedAt: Date;
}