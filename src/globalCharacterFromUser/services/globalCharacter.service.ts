import { GlobalCharacterEntity } from "../models/globalCharacter.entity";
import { GlobalCharacter } from "../models/globalCharacter.interface";
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable, from } from 'rxjs'
import { Repository } from 'typeorm';

@Injectable()
export class GlobalCharacterService {
    constructor(
        @InjectRepository(GlobalCharacterEntity)
        private readonly globalCharacterRepository: Repository<GlobalCharacterEntity>
    ) {}

    create(globalCharacter: GlobalCharacter): Observable<GlobalCharacter> {
        return from(this.globalCharacterRepository.save(globalCharacter));
    }

    findById(id: number): Observable<GlobalCharacter> {
        return from(this.globalCharacterRepository.findOne( {
            where : {
                id: id
            }, relations : {
                user : true,
                caracteristics :true,
                character : true
            }
        }))
    }
}