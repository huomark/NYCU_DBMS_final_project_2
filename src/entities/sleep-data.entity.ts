import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'sleep_health_lifestyle_dataset' }) 
export class SleepData {
  @PrimaryGeneratedColumn({ name: 'Person ID' })
  personId: number;

  @Column({ name: 'Gender' })
  gender: string;

  @Column({ name: 'Age' })
  age: number;

  @Column({ name: 'Occupation' })
  occupation: string;

  @Column({ name: 'Sleep Duration (hours)', type: 'real' })
  sleepDuration: number;

  @Column({ name: 'Quality of Sleep (scale: 1-10)', type: 'real' })
  qualityOfSleep: number;

  @Column({ name: 'Physical Activity Level (minutes/day)' })
  physicalActivityLevel: number;

  @Column({ name: 'Stress Level (scale: 1-10)' })
  stressLevel: number;

  @Column({ name: 'BMI Category' })
  bmiCategory: string;

  @Column({ name: 'Blood Pressure (systolic/diastolic)' })
  bloodPressure: string;

  @Column({ name: 'Heart Rate (bpm)' })
  heartRate: number;

  @Column({ name: 'Daily Steps' })
  dailySteps: number;

  @Column({ name: 'Sleep Disorder' })
  sleepDisorder: string;
}