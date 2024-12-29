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

  async getAverageSleepDuration() {
    try {
      const result = await this.databaseService.sleepHealthLifestyleDataset.aggregate({
        _avg: {
          sleepDurationHours: true,
        },
      });
      return result._avg.sleepDurationHours;
    } catch (error) {
      console.error('Error calculating average sleep duration:', error.message, error.stack);
      throw new Error('Failed to calculate average sleep duration');
    }
  }

  async getSleepPR(duration: number): Promise<number> {
    const durationNum = typeof duration === 'string' ? parseFloat(duration) : duration;
    if (isNaN(durationNum)) {
      throw new Error('Duration must be a number');
    }
    const totalCount = await this.databaseService.sleepHealthLifestyleDataset.count();
    const lessThanOrEqualCount = await this.databaseService.sleepHealthLifestyleDataset.count({
      where: {
        sleepDurationHours: {
          lte: durationNum,
        },
      },
    });
    return (lessThanOrEqualCount / totalCount) * 100;
  }

  async getAverageSleepDurationByOccupation(occupation: string) {
    try {
      const result = await this.databaseService.sleepHealthLifestyleDataset.aggregate({
        _avg: {
          sleepDurationHours: true,
        },
        where: {
          occupation: occupation,
        },
      });
      return result._avg.sleepDurationHours;
    } catch (error) {
      console.error('Error calculating average sleep duration by occupation:', error.message, error.stack);
      throw new Error('Failed to calculate average sleep duration by occupation');
    }
  }
}
