"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SleeppeopleService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
let SleeppeopleService = class SleeppeopleService {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    async create(createSleeppersonDto) {
        return this.databaseService.sleepHealthLifestyleDataset.create({
            data: createSleeppersonDto
        });
    }
    async create2(createSleeppersonDtos) {
        return this.databaseService.sleepHealthLifestyleDataset.createMany({
            data: createSleeppersonDtos,
            skipDuplicates: true,
        });
    }
    async findAll() {
        return this.databaseService.sleepHealthLifestyleDataset.findMany();
    }
    async findOne(personId) {
        return this.databaseService.sleepHealthLifestyleDataset.findUnique({
            where: {
                personId,
            }
        });
    }
    async update(personId, updateSleeppersonDto) {
        return this.databaseService.sleepHealthLifestyleDataset.update({
            where: {
                personId,
            },
            data: updateSleeppersonDto
        });
    }
    async remove(personId) {
        return this.databaseService.sleepHealthLifestyleDataset.delete({
            where: {
                personId,
            }
        });
    }
    async getAverageSleepDuration() {
        try {
            const result = await this.databaseService.sleepHealthLifestyleDataset.aggregate({
                _avg: {
                    sleepDurationHours: true,
                },
            });
            return result._avg.sleepDurationHours;
        }
        catch (error) {
            console.error('Error calculating average sleep duration:', error.message, error.stack);
            throw new Error('Failed to calculate average sleep duration');
        }
    }
    async getSleepPR(duration) {
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
    async getAverageSleepDurationByOccupation(occupation) {
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
        }
        catch (error) {
            console.error('Error calculating average sleep duration by occupation:', error.message, error.stack);
            throw new Error('Failed to calculate average sleep duration by occupation');
        }
    }
};
exports.SleeppeopleService = SleeppeopleService;
exports.SleeppeopleService = SleeppeopleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], SleeppeopleService);
//# sourceMappingURL=sleeppeople.service.js.map