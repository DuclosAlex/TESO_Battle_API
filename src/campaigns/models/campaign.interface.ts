import { campaignSlug } from "src/stages/models/campaignSlug.enum";

export interface CampaignModel {
    id?: number;
    name: string;
    levelNumber?: number;
    slug: campaignSlug;
}