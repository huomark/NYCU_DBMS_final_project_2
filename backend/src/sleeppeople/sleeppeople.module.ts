import { Module } from '@nestjs/common';
import { SleeppeopleService } from './sleeppeople.service';
import { SleeppeopleController } from './sleeppeople.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [SleeppeopleController],
  providers: [SleeppeopleService],
})
export class SleeppeopleModule {}
