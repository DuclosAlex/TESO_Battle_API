import { StageEntity } from "src/stages/models/stage.entity";


export interface EnnemyModel {
    id?: number;
    lp: number;
    name: string;
    src: string;
    alt: string;
    stage: StageEntity;
}