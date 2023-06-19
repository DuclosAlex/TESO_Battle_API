import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm";
import { Observable, from } from 'rxjs'
import { CharacterEntity } from "../models/character.entity";
import { CharacterModel } from "../models/character.interface";

@Injectable()
export class CharacterService {
    constructor(
        @InjectRepository(CharacterEntity)
        private readonly characterRepository: Repository<CharacterEntity>,
    ) {}

    create(character: CharacterModel): Observable<CharacterModel> {
        return from(this.characterRepository.save(character))
    }

    findById(id: number): Observable<CharacterModel> {
        return from(this.characterRepository.findOne( {
            where : {
                id: id
            },
        }))
    }
}