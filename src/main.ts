import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

const cookieSession = require('cookie-session');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger @OpenApi Specification
  const config = new DocumentBuilder()
    .setTitle('Used Car API')
    .setDescription('The used CAR API description')
    .setVersion('1.0')
    .addTag('car')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Middleware
  app.use(
    cookieSession({
      keys: ['uiasjdkasn'],
    }),
  );
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Stripped out
    }),
  );
  await app.listen(3000);
}
bootstrap();
