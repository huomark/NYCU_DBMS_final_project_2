"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const client_1 = require("@prisma/client");
const dotenv_1 = require("dotenv");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const Prisma = new client_1.PrismaClient();
    try {
        await Prisma.$connect();
        console.log('Prisma Connected to the database');
    }
    catch (error) {
        console.error('Prisma failed to connect to the database');
    }
    await app.listen(process.env.PORT ?? 3000);
}
(0, dotenv_1.config)();
bootstrap();
//# sourceMappingURL=main.js.map