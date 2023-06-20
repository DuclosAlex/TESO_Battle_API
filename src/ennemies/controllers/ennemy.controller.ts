import { Controller, Body, Get, Post, Param, ParseIntPipe } from '@nestjs/common';
import  { Observable} from 'rxjs';
import { EnnemyModel } from '../models/ennemy.interface';
import { EnnemyService } from '../services/ennemy.service';

@Controller('ennemies')
export class EnnemyController {
    constructor(private ennemyService: EnnemyService) {}

    @Post('create')
    createEnnemy(@Body() ennemy: EnnemyModel): Observable<EnnemyModel> {
        return this.ennemyService.create(ennemy)
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number): Observable<EnnemyModel> {
        return this.ennemyService.findById(id);
    }
}