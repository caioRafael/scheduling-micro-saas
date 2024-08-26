-- AlterTable
ALTER TABLE "patients" ADD COLUMN     "patientTagId" TEXT;

-- CreateTable
CREATE TABLE "PatientTag" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "color" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "PatientTag_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "patients" ADD CONSTRAINT "patients_patientTagId_fkey" FOREIGN KEY ("patientTagId") REFERENCES "PatientTag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PatientTag" ADD CONSTRAINT "PatientTag_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
