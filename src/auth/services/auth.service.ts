import { Injectable } from '@nestjs/common';
import { Observable, from, switchMap, map } from 'rxjs'
import * as bcrypt from 'bcrypt'
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../models/auth.class';
import { UserEntity } from '../models/auth.entity';

@Injectable()
export class AuthService {
    constructor(@InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    ) {}

    hashPassword(password: string): Observable<string> {
        return from (bcrypt.hash(password, 12));
    }

    registerAccount(user: User): Observable<User> {
        const { name, email, password } = user;
        
        return this.hashPassword(password).pipe(
            switchMap((hashedPassword: string) => {
                return from(this.userRepository.save({
                    name,
                    email,
                    password: hashedPassword
                })).pipe(
                    map((user: User) => {
                        delete user.password;
                        return user;
                    })
                )
            })
        )
    }


} 