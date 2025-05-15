import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export class BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @CreateDateColumn({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
    })
    createdAt: Date;

    @UpdateDateColumn({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
    })
    updatedAt: Date;

    @Column({
        nullable: true,
    })
    createdBy?: number;

    @Column({
        nullable: true,
        default: null,
    })
    updatedBy?: number;

    constructor(data?: any) {
        if (data) {
            Object.assign(this, data);
        }
    }
}
