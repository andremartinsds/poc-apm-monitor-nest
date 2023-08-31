import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as apm from 'elastic-apm-node';

async function bootstrap() {
  apm.start({
    serviceName: 'apm-monitor-nest',
    serverUrl: 'http://apm-server:8200',
    logLevel: 'debug',
    active: true,
  });

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
