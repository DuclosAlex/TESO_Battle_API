import { StageEntity } from '../models/stage.entity';
import { StageModel } from '../models/stage.interface';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable, from } from 'rxjs'
import { Repository } from 'typeorm';
import { campaignSlug } from '../models/campaignSlug.enum';

@Injectable()
export class StageService {
    constructor(
        @InjectRepository(StageEntity)
        private readonly stageRepository: Repository<StageEntity>
    ) {}

    create(stage: StageModel): Observable<StageModel> {
        return from(this.stageRepository.save(stage));
    }

    findById(id: number): Observable<StageModel> {
        return from(this.stageRepository.findOne({
            where : {
                id: id
            }
        }))
    }

    // stage and ennemies fetching logic 

    processSlug(slug: campaignSlug): number {
        switch(slug) {
            case campaignSlug.PACT : 
                return 1;
                break;
            case campaignSlug.ALLIANCE : 
                return 2;
                break;
            case campaignSlug.DOMAIN : 
                return 3;
                break;
            default : 
                break;
        }
    }


    findWithEnnemies(slug: campaignSlug): Observable<StageModel[]> {
        const campaignId = this.processSlug(slug)
        return from(this.stageRepository
            .createQueryBuilder('stage')
            .select(['stage.id', 'stage.name'])
            .where('stage.campaignId = :campaignId', { campaignId})
            .getMany()
        );
    }
}