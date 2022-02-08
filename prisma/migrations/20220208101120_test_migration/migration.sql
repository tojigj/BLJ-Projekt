/*
  Warnings:

  - Added the required column `standortNr` to the `Standorte` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `standorte` ADD COLUMN `standortNr` INTEGER NOT NULL;
