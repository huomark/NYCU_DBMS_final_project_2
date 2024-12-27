import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { SleeppeopleService } from './sleeppeople.service';
import { Prisma } from '@prisma/client';

@Controller('sleeppeople')
export class SleeppeopleController {
  constructor(private readonly sleeppeopleService: SleeppeopleService) {}

  @Post()
  create(@Body() createSleeppersonDto: Prisma.SleepHealthLifestyleDatasetCreateInput) {
    return this.sleeppeopleService.create(createSleeppersonDto);
  }

  @Post('bulk')
  create2(@Body() createSleeppersonDtos: Prisma.SleepHealthLifestyleDatasetCreateManyInput) {
    return this.sleeppeopleService.create(createSleeppersonDtos);
  }

  @Get('average-sleep-duration')
  getAverageSleepDuration() {
    return this.sleeppeopleService.getAverageSleepDuration();
  }

  @Get()
  findAll() {
    return this.sleeppeopleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sleeppeopleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSleeppersonDto: Prisma.SleepHealthLifestyleDatasetUpdateInput) {
    return this.sleeppeopleService.update(+id, updateSleeppersonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sleeppeopleService.remove(+id);
  }
}
