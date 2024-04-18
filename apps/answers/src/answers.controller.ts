import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

import { AnswersService } from './answers.service';
import { CreateAnswerDto } from './dtos';

@Controller()
export class AnswersController {
  constructor(private readonly answersService: AnswersService) {}

  @EventPattern('answer_created')
  createAnswer(answer: CreateAnswerDto) {
    return this.answersService.createAnswer(answer);
  }

  @MessagePattern({ cmd: 'get-all-answers-by-question' })
  getAllQuestions(questionId: number) {
    return this.answersService.getAllAnswers(questionId);
  }
}
