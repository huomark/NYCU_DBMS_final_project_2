-- CreateTable
CREATE TABLE "sleep_health_lifestyle_dataset" (
    "Person ID" SERIAL NOT NULL,
    "Gender" TEXT NOT NULL,
    "Age" INTEGER NOT NULL,
    "Occupation" TEXT NOT NULL,
    "Sleep Duration (hours)" DOUBLE PRECISION NOT NULL,
    "Quality of Sleep (scale: 1-10)" DOUBLE PRECISION NOT NULL,
    "Physical Activity Level (minutes/day)" INTEGER NOT NULL,
    "Stress Level (scale: 1-10)" INTEGER NOT NULL,
    "BMI Category" TEXT NOT NULL,
    "Blood Pressure (systolic/diastolic)" TEXT NOT NULL,
    "Heart Rate (bpm)" INTEGER NOT NULL,
    "Daily Steps" INTEGER NOT NULL,
    "Sleep Disorder" TEXT NOT NULL,

    CONSTRAINT "sleep_health_lifestyle_dataset_pkey" PRIMARY KEY ("Person ID")
);
