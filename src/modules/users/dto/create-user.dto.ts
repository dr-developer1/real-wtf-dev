import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    firstName: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty({ message: 'Last name should not be empty' })
    lastName: string;

    @ApiProperty()
    @IsEmail()
    @IsNotEmpty({ message: 'Email should not be empty' })
    email: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty({ message: 'Password should not be empty' })
    @MinLength(6)
    password: string;
}
