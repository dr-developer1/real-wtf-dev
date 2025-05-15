import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import databaseConfig from '@app/core/config/database.config';
import * as Joi from 'joi';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [databaseConfig],
            validationSchema: Joi.object({
                NODE_ENV: Joi.string()
                    .valid('development', 'production', 'test')
                    .default('development'),
                DB_HOST: Joi.string().default('localhost'),
                DB_PORT: Joi.number().default(5432),
                DB_USER: Joi.string().required(),
                DB_PASSWORD: Joi.string().required(),
                DB_NAME: Joi.string().required(),
                DB_LOGGING: Joi.boolean().default(false),
            }),
        }),
    ],
    exports: [ConfigModule],
})
export class AppConfigModule {}
