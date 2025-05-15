import { Module } from '@nestjs/common';
import { DatabaseModule } from '@app/core/database/database.module';
import { AppConfigModule } from '@app/core/config/config.module';
import { UsersModule } from '@modules/users/users.module';

@Module({
    imports: [AppConfigModule, DatabaseModule, UsersModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
