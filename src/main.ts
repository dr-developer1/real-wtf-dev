import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors({
        origin: process.env.CORS_ORIGIN ?? '',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        credentials: true,
    });
    if (process.env.NODE_ENV === 'development') {
        const config = new DocumentBuilder()
            .setTitle('NestJS Practical API Example')
            .setDescription(
                'A production-ready NestJS API with CORS configuration, environment variables, and Swagger documentation. Clone and use as a starting point for your own projects.',
            )
            .setVersion('1.0')
            .addTag('api')
            .build();
        const documentFactory = () => SwaggerModule.createDocument(app, config);
        SwaggerModule.setup('api', app, documentFactory);
    }
    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
            whitelist: true,
        }),
    );

    await app.listen(process.env.PORT ?? 3000);
    console.log(
        `Application is running on port ${process.env.PORT ?? 3000} in ${process.env.NODE_ENV} mode`,
    );
}

void bootstrap();
