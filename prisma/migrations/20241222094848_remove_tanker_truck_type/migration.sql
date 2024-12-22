/*
  Warnings:

  - The values [Tanker] on the enum `TruckType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "TruckType_new" AS ENUM ('Box', 'Flatbed', 'Refrigerated', 'Curtainsider');
ALTER TABLE "Truck" ALTER COLUMN "type" TYPE "TruckType_new" USING ("type"::text::"TruckType_new");
ALTER TYPE "TruckType" RENAME TO "TruckType_old";
ALTER TYPE "TruckType_new" RENAME TO "TruckType";
DROP TYPE "TruckType_old";
COMMIT;
