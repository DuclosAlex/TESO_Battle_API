import { EnnemyEntity } from 'src/ennemies/models/ennemy.entity';
import { CampaignEntity } from 'src/campaigns/models/campaign.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';

@Entity('stage')
export class StageEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column( { default : false})
    isClear: boolean;

    @Column()
    stageNumber: number;

    @OneToMany(() => EnnemyEntity, (ennemies) => ennemies.stage) 
    ennemies: EnnemyEntity[];

    @ManyToOne(() => CampaignEntity, (campaign) => campaign.stages)
    campaign: CampaignEntity;
}