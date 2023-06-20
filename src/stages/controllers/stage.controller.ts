import { Controller, Body, Get, Post, Param, ParseIntPipe } from '@nestjs/common';
import  { Observable} from 'rxjs';
import { StageModel } from '../models/stage.interface';
import { StageService } from '../services/stage.service';

@Controller('stages')
export class StageController {
    constructor(private stageService: StageService) {}

    @Post('create')
    createStage(@Body() stage: StageModel): Observable<StageModel> {
        return this.stageService.create(stage);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number): Observable<StageModel> {
        return this.stageService.findById(id);
    }
}