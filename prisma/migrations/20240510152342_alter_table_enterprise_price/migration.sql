/*
  Warnings:

  - You are about to alter the column `price` on the `Enterprise` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `Decimal(10,3)`.

*/
-- AlterTable
ALTER TABLE "Enterprise" ALTER COLUMN "price" SET DATA TYPE DECIMAL(10,3);
