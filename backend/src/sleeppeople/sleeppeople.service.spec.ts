import { Test, TestingModule } from '@nestjs/testing';
import { SleeppeopleService } from './sleeppeople.service';

describe('SleeppeopleService', () => {
  let service: SleeppeopleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SleeppeopleService],
    }).compile();

    service = module.get<SleeppeopleService>(SleeppeopleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
