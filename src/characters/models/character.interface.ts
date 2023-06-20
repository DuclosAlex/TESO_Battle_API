export interface CharacterModel {

    id?: number;
    name: string;
    src: string;
    alt: string;
    description?: null | string;
    speed : number;
    initiative: number;
    strength: number;
    vitality: number;
    lp: number;
}