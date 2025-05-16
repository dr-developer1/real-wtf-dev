import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '@modules/users/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}
    async create(createUserDto: CreateUserDto) {
        const user = this.userRepository.create(createUserDto);
        user.password = await this.hashPassword(user.password);
        return this.userRepository.save(user);
    }

    async findAll() {
        return await this.userRepository.find();
    }

    async bulkCreate(createUserDto: CreateUserDto) {
        const emailParts = createUserDto.email.split('@');
        for (let i = 0; 1000 > i; i++) {
            await this.create({ ...createUserDto, email: `${emailParts[0]}${i}@${emailParts[1]}` });
        }
    }

    private async hashPassword(password: string): Promise<string> {
        const salt = await bcrypt.genSalt(10);
        return bcrypt.hash(password, salt);
    }
}
