import { Body, Controller, Post } from '@nestjs/common';
import { User } from '../models/auth.class';
import { Observable, map } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('register')
    resgister(@Body() user: User): Observable<User> {
        return this.authService.registerAccount(user);
    }
}