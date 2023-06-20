import { StageEntity } from '../models/stage.entity';
import { StageModel } from '../models/stage.interface';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable, from } from 'rxjs'
import { Repository } from 'typeorm';

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
}