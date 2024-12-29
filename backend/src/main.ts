import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaClient } from '@prisma/client';
import { config } from 'dotenv';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const Prisma = new PrismaClient();
  try {
    await Prisma.$connect();
    console.log('Prisma Connected to the database');
  } catch (error) {
    console.error('Prisma failed to connect to the database');
  }
  await app.listen(process.env.PORT ?? 3000);
}
config();
bootstrap();
