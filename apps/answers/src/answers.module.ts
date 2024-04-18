import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { AnswersController } from './answers.controller';
import { AnswersService } from './answers.service';
import { Answer } from './entities/answer.entity';
import { dataBaseConfig } from './infra/database.config';

@Module({
  imports: [
    SequelizeModule.forFeature([Answer]),
    SequelizeModule.forRoot(dataBaseConfig),
  ],
  controllers: [AnswersController],
  providers: [AnswersService],
})
export class AnswersModule {}
