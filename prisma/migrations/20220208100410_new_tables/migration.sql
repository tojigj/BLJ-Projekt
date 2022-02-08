/*
  Warnings:

  - The primary key for the `stockwerke` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `stockwerk_id` on the `stockwerke` table. All the data in the column will be lost.
  - You are about to drop the column `stockwerk_name` on the `stockwerke` table. All the data in the column will be lost.
  - You are about to drop the column `stockwerk_nr` on the `stockwerke` table. All the data in the column will be lost.
  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `user_id` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `stockwerke` DROP PRIMARY KEY,
    DROP COLUMN `stockwerk_id`,
    DROP COLUMN `stockwerk_name`,
    DROP COLUMN `stockwerk_nr`,
    ADD COLUMN `stockwerkID` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `stockwerkName` VARCHAR(30) NULL,
    ADD COLUMN `stockwerkNr` INTEGER NULL,
    ADD PRIMARY KEY (`stockwerkID`);

-- AlterTable
ALTER TABLE `user` DROP PRIMARY KEY,
    DROP COLUMN `user_id`,
    ADD COLUMN `userID` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`userID`);

-- CreateTable
CREATE TABLE `Sitzungszimmer` (
    `sitzungszimmerID` INTEGER NOT NULL AUTO_INCREMENT,
    `anzPersonen` INTEGER NOT NULL,
    `sitzungszimmerStOID` INTEGER NOT NULL,
    `sitzungsZimmerStId` INTEGER NOT NULL,

    UNIQUE INDEX `Sitzungszimmer_anzPersonen_key`(`anzPersonen`),
    PRIMARY KEY (`sitzungszimmerID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Standorte` (
    `standortID` INTEGER NOT NULL AUTO_INCREMENT,
    `standortName` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Standorte_standortName_key`(`standortName`),
    PRIMARY KEY (`standortID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Sitzungszimmer` ADD CONSTRAINT `Sitzungszimmer_sitzungsZimmerStId_fkey` FOREIGN KEY (`sitzungsZimmerStId`) REFERENCES `Stockwerke`(`stockwerkID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Sitzungszimmer` ADD CONSTRAINT `Sitzungszimmer_sitzungszimmerStOID_fkey` FOREIGN KEY (`sitzungszimmerStOID`) REFERENCES `Standorte`(`standortID`) ON DELETE RESTRICT ON UPDATE CASCADE;
