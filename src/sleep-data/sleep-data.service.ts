import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SleepData } from '../entities/sleep-data.entity';
import { CreateSleepDatumDto } from './dto/create-sleep-datum.dto';
import { UpdateSleepDatumDto } from './dto/update-sleep-datum.dto';

@Injectable()
export class SleepDataService {
  constructor(
    @InjectRepository(SleepData)
    private readonly sleepDataRepository: Repository<SleepData>,
  ) {}

  async findAll() {
    return await this.sleepDataRepository.find();
  }
  // async findSleepDurationById(id: number): Promise<number | null> {
  //   const record = await this.sleepDataRepository.findOneBy({ id });
  //   return record ? record.sleepDuration : null;
  // }
}