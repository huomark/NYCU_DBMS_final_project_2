import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class SleeppeopleService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createSleeppersonDto: Prisma.SleepHealthLifestyleDatasetCreateInput) {
    return this.databaseService.sleepHealthLifestyleDataset.create({
      data: createSleeppersonDto
    })
  }

  async create2(createSleeppersonDtos: Prisma.SleepHealthLifestyleDatasetCreateManyInput[]) {
    return this.databaseService.sleepHealthLifestyleDataset.createMany({
      data: createSleeppersonDtos,
      skipDuplicates: true,
    });
  }

  async findAll() {
    return this.databaseService.sleepHealthLifestyleDataset.findMany()
  }

  async findOne(personId: number) {
    return this.databaseService.sleepHealthLifestyleDataset.findUnique({
      where: {
        personId,
      }
    })
  }

  async update(personId: number, updateSleeppersonDto: Prisma.SleepHealthLifestyleDatasetUpdateInput) {
    return this.databaseService.sleepHealthLifestyleDataset.update({
      where:{
        personId,
      },
      data: updateSleeppersonDto
    })
  }

  async remove(personId: number) {
    return this.databaseService.sleepHealthLifestyleDataset.delete({
      where: {
        personId,
      }
    })
  }
}
