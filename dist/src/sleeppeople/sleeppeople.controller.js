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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SleeppeopleController = void 0;
const common_1 = require("@nestjs/common");
const sleeppeople_service_1 = require("./sleeppeople.service");
const client_1 = require("@prisma/client");
const get_sleep_pr_dto_1 = require("./dto/get-sleep-pr.dto");
let SleeppeopleController = class SleeppeopleController {
    constructor(sleeppeopleService) {
        this.sleeppeopleService = sleeppeopleService;
    }
    create(createSleeppersonDto) {
        return this.sleeppeopleService.create(createSleeppersonDto);
    }
    create2(createSleeppersonDtos) {
        return this.sleeppeopleService.create(createSleeppersonDtos);
    }
    getAverageSleepDurationByOccupation(occupation) {
        if (occupation) {
            return this.sleeppeopleService.getAverageSleepDurationByOccupation(occupation);
        }
        return this.sleeppeopleService.getAverageSleepDuration();
    }
    getSleepPR(query) {
        return this.sleeppeopleService.getSleepPR(query.duration);
    }
    findAll() {
        return this.sleeppeopleService.findAll();
    }
    findOne(id) {
        return this.sleeppeopleService.findOne(+id);
    }
    update(id, updateSleeppersonDto) {
        return this.sleeppeopleService.update(+id, updateSleeppersonDto);
    }
    remove(id) {
        return this.sleeppeopleService.remove(+id);
    }
};
exports.SleeppeopleController = SleeppeopleController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SleeppeopleController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('bulk'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SleeppeopleController.prototype, "create2", null);
__decorate([
    (0, common_1.Get)('average-sleep-duration'),
    __param(0, (0, common_1.Query)('occupation')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SleeppeopleController.prototype, "getAverageSleepDurationByOccupation", null);
__decorate([
    (0, common_1.Get)('sleep-pr'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_sleep_pr_dto_1.GetSleepPRDto]),
    __metadata("design:returntype", void 0)
], SleeppeopleController.prototype, "getSleepPR", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SleeppeopleController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SleeppeopleController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], SleeppeopleController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SleeppeopleController.prototype, "remove", null);
exports.SleeppeopleController = SleeppeopleController = __decorate([
    (0, common_1.Controller)('sleeppeople'),
    __metadata("design:paramtypes", [sleeppeople_service_1.SleeppeopleService])
], SleeppeopleController);
//# sourceMappingURL=sleeppeople.controller.js.map