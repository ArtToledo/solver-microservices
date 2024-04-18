import { Injectable } from '@nestjs/common';

@Injectable()
export class AnswersService {
  getHello(): string {
    return 'Hello World!';
  }
}
