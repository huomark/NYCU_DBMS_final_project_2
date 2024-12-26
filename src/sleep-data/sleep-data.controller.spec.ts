import { Test, TestingModule } from '@nestjs/testing';
import { SleepDataController } from './sleep-data.controller';
import { SleepDataService } from './sleep-data.service';

describe('SleepDataController', () => {
  let controller: SleepDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SleepDataController],
      providers: [SleepDataService],
    }).compile();

    controller = module.get<SleepDataController>(SleepDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
