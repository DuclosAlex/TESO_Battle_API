import { CampaignEntity } from "src/campaigns/models/campaign.entity";


export interface StageModel {
    id?: number;
    stageNumber: number;
    isClear?: boolean;
    campaign: CampaignEntity;
}