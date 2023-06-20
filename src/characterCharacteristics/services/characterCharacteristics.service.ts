import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm";
import { Observable, from } from 'rxjs';
import { CharacterCharacteristicsEntity } from "../models/characterCharacteristics.entity";
import { CharacterCharacteristicsModel } from "../models/characterCharacteristics.interface";

@Injectable()
export class CharacterCharacteristicsService {
    constructor(
        @InjectRepository(CharacterCharacteristicsEntity)
        private readonly characterCharacteristicsRepository: Repository<CharacterCharacteristicsEntity>,
    ) {}

    create(characteristics: CharacterCharacteristicsModel): Observable<CharacterCharacteristicsModel> {
        return from(this.characterCharacteristicsRepository.save(characteristics));
    }

    findById(id: number): Observable<CharacterCharacteristicsModel> {
        return from(this.characterCharacteristicsRepository.findOne( {
            where : {
                id: id
            },
        }))
    }
}