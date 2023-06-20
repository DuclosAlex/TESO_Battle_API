import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CampaignEntity } from './models/campaign.entity';
import { CampaignController } from './controllers/campaign.controller';
import { CampaignService } from './services/campaign.service';


@Module({
    imports : [
        TypeOrmModule.forFeature([ CampaignEntity])
    ],
    providers : [ CampaignService],
    controllers : [ CampaignController]
})
export class CampaignModule {}