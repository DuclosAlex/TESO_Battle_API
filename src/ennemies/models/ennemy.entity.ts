import { StageEntity } from 'src/stages/models/stage.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity('ennemy')
export class EnnemyEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    lp: number;

    @Column()
    src: string;

    @Column()
    alt: string;

    @ManyToOne(() => StageEntity, (stage) => stage.ennemies)
    stage: StageEntity;
}