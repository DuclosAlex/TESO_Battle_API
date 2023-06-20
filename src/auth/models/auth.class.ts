import { Role } from "./auth.enum";
import { IsString } from "class-validator";

export class User {
    id?: number;
    name: string;
    email: string;
    @IsString()
    password?: string;
    role: Role;
}