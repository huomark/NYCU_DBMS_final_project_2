import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { SleeppeopleService } from './sleeppeople.service';
import { Prisma } from '@prisma/client';
import { GetSleepPRDto } from './dto/get-sleep-pr.dto';
import { Validate } from 'class-validator';

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

  @Get('average-sleep-duration-by-occupation')
  getAverageSleepDurationByOccupation(@Query('occupation') occupation?: string) {
    if (occupation) {
      return this.sleeppeopleService.getAverageSleepDurationByOccupation(occupation);
    }
    return this.sleeppeopleService.getAverageSleepDuration();
  }

  @Get('average-sleep-duration-by-age-range')
  getAverageSleepDurationByAgeRange(
      @Query('minAge', ParseIntPipe) minAge: number = 0, 
      @Query('maxAge', ParseIntPipe) maxAge: number = 100) {
    return this.sleeppeopleService.getAverageSleepDurationByAgeRange(minAge, maxAge);
  }

  @Get('average-sleep-duration-by-gender')
  getAverageSleepDurationByGender(@Query('gender') gender: string) {
    return this.sleeppeopleService.getAverageSleepDurationByGender(gender);
  }

  @Get('sleep-pr')
  getSleepPR(@Query() query: GetSleepPRDto) {
    return this.sleeppeopleService.getSleepPR(query.duration);
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
