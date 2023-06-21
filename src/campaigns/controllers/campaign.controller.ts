import { Controller, Body, Get, Post, Param, ParseIntPipe } from '@nestjs/common';
import  { Observable} from 'rxjs';
import { CampaignModel } from '../models/campaign.interface';
import { CampaignService } from '../services/campaign.service';

@Controller('campaigns')
export class CampaignController {
    constructor(private campaignService: CampaignService) {}

    @Post('create')
    createCampaign(@Body() campaign: CampaignModel): Observable<CampaignModel> {
        return this.campaignService.create(campaign);
    }

    @Get('findAll')
    findAll(): Observable<CampaignModel[]> {
        return this.campaignService.findAll();
       
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number): Observable<CampaignModel> {
        return this.campaignService.findByID(id)
    }

    
}