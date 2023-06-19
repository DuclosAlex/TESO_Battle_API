import { Observable } from 'rxjs';
import { Controller, Get, Param, Body, Post, ParseIntPipe} from '@nestjs/common';
import { SkillModel } from '../models/skill.interface';
import { SkillService } from '../services/skill.service';

@Controller('skills')
export class SkillController {
    constructor(private skillService: SkillService) {}

    @Post('create')
    createSkill(@Body() skill: SkillModel): Observable<SkillModel> {
        return this.skillService.create(skill);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number): Observable<SkillModel> {
        return this.skillService.findById(id);
    }
}