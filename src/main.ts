import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // 👈 automatically transform payloads
      transformOptions: {
        enableImplicitConversion: true, // 👈  transform payloads based on TS type
      },
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('UFC Type API - Rest Endpoints')
    .setDescription('REST Endpoints for Rankings, Fighters, Fights, Events')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    customSiteTitle: 'UFC Type API',
  });

  await app.listen(3000);
}
bootstrap();

//nest g resource fighters
//nest g resource fights
//nest g resource events
