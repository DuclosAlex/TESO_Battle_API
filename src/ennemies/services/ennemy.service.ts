import { EnnemyModel } from "../models/ennemy.interface";
import { EnnemyEntity } from "../models/ennemy.entity";
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable, from } from 'rxjs'
import { Repository } from 'typeorm';

@Injectable()
export class EnnemyService {
    constructor(
        @InjectRepository(EnnemyEntity)
        private readonly ennemyRepository: Repository<EnnemyEntity>
    ) {}

    create(ennemy: EnnemyModel): Observable<EnnemyModel> {
        return from(this.ennemyRepository.save(ennemy));
    }

    findById(id: number): Observable<EnnemyModel> {
        return from(this.ennemyRepository.findOne({
            where : {
                id: id
            }
        }))
    }
}