import { Test, TestingModule } from '@nestjs/testing';
import { SleeppeopleController } from './sleeppeople.controller';
import { SleeppeopleService } from './sleeppeople.service';

describe('SleeppeopleController', () => {
  let controller: SleeppeopleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SleeppeopleController],
      providers: [SleeppeopleService],
    }).compile();

    controller = module.get<SleeppeopleController>(SleeppeopleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
