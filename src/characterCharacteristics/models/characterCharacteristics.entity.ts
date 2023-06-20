import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}