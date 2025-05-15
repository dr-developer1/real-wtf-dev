import { BaseEntity } from '@shared/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('users')
export class User extends BaseEntity {
    @Column({ type: 'varchar', length: 50, nullable: false })
    firstName: string;

    @Column({ type: 'varchar', length: 50, nullable: false })
    lastName: string;

    @Column({ type: 'varchar', length: 50, nullable: false, unique: true })
    email: string;

    @Column({ type: 'varchar', length: 255, nullable: false })
    password: string;
}
