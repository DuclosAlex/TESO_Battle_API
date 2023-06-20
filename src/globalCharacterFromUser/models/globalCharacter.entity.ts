import { UserEntity } from 'src/auth/models/auth.entity';
import { CharacterEntity } from 'src/characters/models/character.entity';
import { Entity, PrimaryGeneratedColumn, OneToOne, ManyToOne, JoinColumn} from 'typeorm';
import { CharacterCharacteristicsEntity } from 'src/characterCharacteristics/models/characterCharacteristics.entity';

@Entity('globalCharacter')
export class GlobalCharacterEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => UserEntity, (user) => user.globalCharacter)
    user: UserEntity;

    @ManyToOne(() => CharacterEntity, (character) => character.globalCharacter)
    character: CharacterEntity;

    @OneToOne(() => CharacterCharacteristicsEntity, (caracteristics) => caracteristics.globalCharacter)
    @JoinColumn()
    caracteristics: CharacterCharacteristicsEntity;
}