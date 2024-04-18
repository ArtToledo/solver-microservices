import { Controller, Get } from '@nestjs/common';
import { AnswersService } from './answers.service';

@Controller()
export class AnswersController {
  constructor(private readonly answersService: AnswersService) {}

  @Get()
  getHello(): string {
    return this.answersService.getHello();
  }
}
