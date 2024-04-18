import { NestFactory } from '@nestjs/core';
import { QuestionsModule } from './questions.module';

async function bootstrap() {
  const app = await NestFactory.create(QuestionsModule);
  await app.listen(3000);
}
bootstrap();
