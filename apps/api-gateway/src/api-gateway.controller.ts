import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { CreateAnswerDto, CreateQuestionDto } from './dtos';

@Controller('/questions')
export class ApiGatewayController {
  constructor(
    @Inject('QUESTIONS_SERVICE')
    private clientQuest: ClientProxy,
    @Inject('ANSWERS_SERVICE')
    private clientAnsw: ClientProxy,
  ) {}

  @Post()
  async createQuestion(@Body() createQuestionDto: CreateQuestionDto) {
    return this.clientQuest.emit('question_created', createQuestionDto);
  }

  @Get()
  async getQuestions() {
    return this.clientQuest.send({ cmd: 'get-all-questions' }, '');
  }

  @Post('/:questionId/answer')
  async createAnswer(
    @Body() createAnswer: CreateAnswerDto,
    @Param('questionId', ParseIntPipe) questionId: number,
  ) {
    createAnswer.questionId = questionId;
    return this.clientAnsw.emit('answer_created', createAnswer);
  }

  @Get('/:questionId/answers')
  async getAnswers(@Param('questionId', ParseIntPipe) questionId: number) {
    return this.clientAnsw.send(
      { cmd: 'get-all-answers-by-question' },
      { questionId },
    );
  }
}
