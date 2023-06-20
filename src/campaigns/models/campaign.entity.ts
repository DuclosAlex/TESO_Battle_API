import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('campaign')
export class CampaignEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column( { default : 2})
    levelNumber: number;
}