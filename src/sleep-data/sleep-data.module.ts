import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SleepData } from '../entities/sleep-data.entity';
import { SleepDataController } from './sleep-data.controller'; 
import { SleepDataService } from './sleep-data.service'; 

@Module({
  imports: [TypeOrmModule.forFeature([SleepData])], 
  controllers: [SleepDataController], 
  providers: [SleepDataService], 
})
export class SleepModule {}
