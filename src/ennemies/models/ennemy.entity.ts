import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';

@Entity('ennemy')
export class EnnemyEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    lp: number;

    @Column()
    src: string;

    @Column()
    alt: string;

}