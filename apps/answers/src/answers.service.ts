import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Answer } from './entities/answer.entity';
import { CreateAnswerDto } from './dtos';

@Injectable()
export class AnswersService {
  constructor(@InjectModel(Answer) private answerRepository: typeof Answer) {}

  async createAnswer(params: CreateAnswerDto): Promise<Answer> {
    return this.answerRepository.create({
      ...params,
    });
  }

  async getAllAnswers(questionId: number): Promise<Answer[]> {
    const found = await this.answerRepository.findAll({
      where: { questionId },
    });
    return found;
  }
}
