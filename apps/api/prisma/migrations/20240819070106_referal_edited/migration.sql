/*
  Warnings:

  - You are about to drop the column `referal` on the `EO` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `EO_referal_key` ON `EO`;

-- AlterTable
ALTER TABLE `EO` DROP COLUMN `referal`;

-- AlterTable
ALTER TABLE `User` MODIFY `referal` VARCHAR(191) NULL;
