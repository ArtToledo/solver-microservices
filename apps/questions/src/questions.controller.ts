import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

import { QuestionsService } from './questions.service';
import { CreateQuestionDto } from './dtos';

@Controller()
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @EventPattern('question_created')
  createQuestions(question: CreateQuestionDto) {
    return this.questionsService.createQuestions(question);
  }

  @MessagePattern({ cmd: 'get-all-questions' })
  getAllQuestions() {
    return this.questionsService.getAllQuestions();
  }
}
