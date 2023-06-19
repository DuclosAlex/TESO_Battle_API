import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm";
import { Observable, from } from 'rxjs';
import { SkillEntity } from "../models/skill.entity";
import { SkillModel } from "../models/skill.interface";

@Injectable()
export class SkillService {
    constructor(
        @InjectRepository(SkillEntity)
        private readonly skillRepository: Repository<SkillEntity>,
    ) {}

     create(skill: SkillModel): Observable<SkillModel> {
        return from(this.skillRepository.save(skill))
     }

     findById(id: number): Observable<SkillModel> {
        return from(this.skillRepository.findOne( {
            where : {
                id: id
            }
        }))
     }
}