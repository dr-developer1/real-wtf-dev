import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post('bulk')
    bulkCreate(@Body() createUserDto: CreateUserDto) {
        return this.usersService.bulkCreate(createUserDto);
    }

    @Get()
    findAll() {
        return this.usersService.findAll();
    }
}
