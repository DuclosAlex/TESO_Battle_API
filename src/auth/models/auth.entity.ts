import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { Role } from "./auth.enum";
import { GlobalCharacterEntity } from "src/globalCharacterFromUser/models/globalCharacter.entity";

@Entity('users')
export class UserEntity {
    @PrimaryGeneratedColumn() 
    id: number;
    
    @Column()
    name: string;

    @Column()
    password: string;

    @Column()
    email: string;

    @Column({ type : 'enum', enum: Role, default: Role.USER})
    role: Role;

    @OneToMany(() => GlobalCharacterEntity, (globalCharacter) => globalCharacter.user)
    globalCharacter: GlobalCharacterEntity[]


    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMPZ' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMPZ' })
    updatedAt: Date;
}
