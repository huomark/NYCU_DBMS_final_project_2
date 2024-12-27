import { IsNumber, IsPositive } from 'class-validator';

export class GetSleepPRDto {
  @IsNumber()
  @IsPositive()
  duration: number;
}
