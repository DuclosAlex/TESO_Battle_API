import { Controller, Body, Get, Post, Param, ParseIntPipe } from "@nestjs/common";
import { CharacterModel } from "../models/character.interface";
import { Observable } from 'rxjs';
import { CharacterService } from "../services/character.service";

@Controller('characters')
export class CharacterController {
    constructor(private characterService: CharacterService) {}

    @Post('create')
    createCharacter(@Body() character: CharacterModel): Observable<CharacterModel> {
        return this.characterService.create(character);
    }

    @Get(':id') 
    findOne(@Param('id', ParseIntPipe) id: number): Observable<CharacterModel> {
        return this.characterService.findById(id);
    }
}