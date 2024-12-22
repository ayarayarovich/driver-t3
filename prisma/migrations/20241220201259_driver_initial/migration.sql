/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "TruckType" AS ENUM ('Tanker', 'Box', 'Flatbed', 'Refrigerated', 'Curtainsider');

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_createdById_fkey";

-- DropTable
DROP TABLE "Post";

-- CreateTable
CREATE TABLE "Truck" (
    "id" TEXT NOT NULL,
    "make" TEXT,
    "model" TEXT,
    "type" "TruckType",
    "year" INTEGER NOT NULL,
    "maxWeight" INTEGER NOT NULL,
    "mileage" INTEGER NOT NULL DEFAULT 0,
    "inFlight" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Truck_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Driver" (
    "id" TEXT NOT NULL,
    "firstname" TEXT,
    "lastname" TEXT,
    "surname" TEXT,

    CONSTRAINT "Driver_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Flight" (
    "id" TEXT NOT NULL,
    "sourceAddressName" TEXT NOT NULL,
    "sourceAddressLatitude" DOUBLE PRECISION NOT NULL,
    "sourceAddressLongitude" DOUBLE PRECISION NOT NULL,
    "destAddressName" TEXT NOT NULL,
    "destAddressLatitude" DOUBLE PRECISION NOT NULL,
    "destAddressLongitude" DOUBLE PRECISION NOT NULL,
    "driverId" TEXT,
    "truckId" TEXT,

    CONSTRAINT "Flight_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Truck_type_maxWeight_year_mileage_inFlight_idx" ON "Truck"("type", "maxWeight", "year", "mileage", "inFlight");

-- AddForeignKey
ALTER TABLE "Flight" ADD CONSTRAINT "Flight_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "Driver"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Flight" ADD CONSTRAINT "Flight_truckId_fkey" FOREIGN KEY ("truckId") REFERENCES "Truck"("id") ON DELETE SET NULL ON UPDATE CASCADE;
