import { Injectable } from '@nestjs/common';
import { Question } from './entities/question.entity';
import { InjectModel } from '@nestjs/sequelize';
import { CreateQuestionDto } from './dtos';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectModel(Question) private questionRepository: typeof Question,
  ) {}

  createQuestions(question: CreateQuestionDto): Promise<Question> {
    return this.questionRepository.create<Question>({
      title: question.title,
      description: question.description,
    });
  }

  getAllQuestions(): Promise<Question[]> {
    return this.questionRepository.findAll();
  }
}
