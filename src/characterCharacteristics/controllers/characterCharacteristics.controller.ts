import { Controller, Body, Get, Post, Param, ParseIntPipe } from "@nestjs/common";
import { Observable } from 'rxjs';
import { CharacterCharacteristicsModel } from "../models/characterCharacteristics.interface";
import { CharacterCharacteristicsService } from "../services/characterCharacteristics.service";

@Controller('characteristics')
export class CharacterCharacteristicsController {
    constructor( private characteristicsService: CharacterCharacteristicsService) {}

    @Post('create')
    createCharacteristic(@Body() characteristic: CharacterCharacteristicsModel): Observable<CharacterCharacteristicsModel> {
        return this.characteristicsService.create(characteristic);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number): Observable<CharacterCharacteristicsModel> {
        return this.characteristicsService.findById(id);
    }
}