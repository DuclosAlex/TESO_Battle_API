import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable, from } from 'rxjs'
import { Repository } from 'typeorm';
import { CampaignEntity } from '../models/campaign.entity';
import { CampaignModel } from '../models/campaign.interface';

@Injectable()
export class CampaignService {
    constructor(
        @InjectRepository(CampaignEntity)
        private readonly campaignRepository: Repository<CampaignEntity>
    ) {}

    create(campaign: CampaignModel): Observable<CampaignModel> {
        return from(this.campaignRepository.save(campaign));
    }

    findByID(id: number): Observable<CampaignModel> {
        return from(this.campaignRepository.findOne({
            where : {
                id: id
            }
        }))
    }
}