import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { ApiGatewayController } from './api-gateway.controller';

const RABBITMQ_URL =
  process.env.RABBITMQ_URL || 'amqp://localhost@rabbitmq:5672';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'QUESTIONS_SERVICE',
        transport: Transport.RMQ,
        options: { urls: [RABBITMQ_URL], queue: 'questions_queue' },
      },
      {
        name: 'ANSWERS_SERVICE',
        transport: Transport.RMQ,
        options: { urls: [RABBITMQ_URL], queue: 'answers_queue' },
      },
    ]),
  ],
  controllers: [ApiGatewayController],
})
export class ApiGatewayModule {}
