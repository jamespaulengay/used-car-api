import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
const cookieSession = require('cookie-session');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
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
