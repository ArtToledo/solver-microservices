import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { QuestionsController } from './questions.controller';
import { QuestionsService } from './questions.service';
import { dataBaseConfig } from './infra/database.config';
import { Question } from './entities/question.entity';

@Module({
  imports: [
    SequelizeModule.forFeature([Question]),
    SequelizeModule.forRoot(dataBaseConfig),
  ],
  controllers: [QuestionsController],
  providers: [QuestionsService],
})
export class QuestionsModule {}
