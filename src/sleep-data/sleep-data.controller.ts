import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SleepDataService } from './sleep-data.service';
import { CreateSleepDatumDto } from './dto/create-sleep-datum.dto';
import { UpdateSleepDatumDto } from './dto/update-sleep-datum.dto';

@Controller('sleep-data')
export class SleepDataController {
  constructor(private readonly sleepDataService: SleepDataService) {}

  // @Post()
  // create(@Body() createSleepDatumDto: CreateSleepDatumDto) {
  //   return this.sleepDataService.create(createSleepDatumDto);
  // }

  @Get()
  findAll() {
    return this.sleepDataService.findAll();
  }


  
  // @Get()
  // findAll() {
  //   return 'hello';
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.sleepDataService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateSleepDatumDto: UpdateSleepDatumDto) {
  //   return this.sleepDataService.update(+id, updateSleepDatumDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.sleepDataService.remove(+id);
  // }
}
