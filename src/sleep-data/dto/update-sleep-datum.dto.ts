import { PartialType } from '@nestjs/mapped-types';
import { CreateSleepDatumDto } from './create-sleep-datum.dto';

export class UpdateSleepDatumDto extends PartialType(CreateSleepDatumDto) {}
