import { StageEntity } from 'src/stages/models/stage.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { campaignSlug } from 'src/stages/models/campaignSlug.enum';

@Entity('campaign')
export class CampaignEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column( { default : 2})
    levelNumber: number;

    @Column({ type : 'enum', enum : campaignSlug})
    slug : campaignSlug;

    @OneToMany(() => StageEntity, (stages) => stages.campaign)
    stages: StageEntity;
}