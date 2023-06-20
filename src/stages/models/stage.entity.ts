import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('stage')
export class stageEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column( { default : false})
    isClear: boolean;

    @Column()
    stageNumber: number;
}