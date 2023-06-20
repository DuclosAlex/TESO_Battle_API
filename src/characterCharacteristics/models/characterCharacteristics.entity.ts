import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { GlobalCharacterEntity } from 'src/globalCharacterFromUser/models/globalCharacter.entity';

@Entity('characterCharacteristics')
export class CharacterCharacteristicsEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    lp: number;

    @Column()
    strength: number;

    @Column()
    speed: number;

    @Column()
    initiative: number;

    @Column()
    vitality: number;

    @OneToOne(() => GlobalCharacterEntity, (globalCharacter) => globalCharacter.caracteristics)
    globalCharacter: GlobalCharacterEntity;
}