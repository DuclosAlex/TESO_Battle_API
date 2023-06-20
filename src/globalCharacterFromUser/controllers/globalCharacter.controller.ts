import { Controller, Body, Get, Post, Param, ParseIntPipe } from '@nestjs/common';
import  { Observable} from 'rxjs'
import { GlobalCharacter } from '../models/globalCharacter.interface';
import { GlobalCharacterService } from '../services/globalCharacter.service';

@Controller('globalCharacter')
export class GlobalCharacterController {
    constructor( private globalCharacterService: GlobalCharacterService) {}

    @Post('create')
    createGlobalCharacter(@Body() globalCharacter: GlobalCharacter): Observable<GlobalCharacter> {
        return this.globalCharacterService.create(globalCharacter);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number): Observable<GlobalCharacter> {
        return this.globalCharacterService.findById(id)
    }
}