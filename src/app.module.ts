import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SleepData } from './entities/sleep-data.entity';
import { AppController } from './app.controller';
import { DataSource } from 'typeorm';
import { AppService } from './app.service';
import { SleepModule } from './sleep-data/sleep-data.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: '../sleep_data.sqlite', 
      entities: [SleepData], 
      synchronize: false,
    }),
    TypeOrmModule.forFeature([SleepData]),
    SleepModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {
    console.log('Database connected:', dataSource.isInitialized); // 檢查是否連接成功
  }
}