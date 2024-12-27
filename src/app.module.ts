import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { SleeppeopleModule } from './sleeppeople/sleeppeople.module';

@Module({
  imports: [DatabaseModule, SleeppeopleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}