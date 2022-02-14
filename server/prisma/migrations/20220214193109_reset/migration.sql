-- CreateTable
CREATE TABLE `User` (
    `userID` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(35) NULL,
    `password` VARCHAR(30) NULL,

    PRIMARY KEY (`userID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Stockwerke` (
    `stockwerkID` INTEGER NOT NULL AUTO_INCREMENT,
    `stockwerkNr` INTEGER NULL,
    `stockwerkName` VARCHAR(30) NULL,

    PRIMARY KEY (`stockwerkID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Sitzungszimmer` (
    `sitzungszimmerID` INTEGER NOT NULL AUTO_INCREMENT,
    `anzPersonen` INTEGER NOT NULL,
    `sitzungszimmerStID` INTEGER NOT NULL,

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
ALTER TABLE `Sitzungszimmer` ADD CONSTRAINT `Sitzungszimmer_sitzungszimmerStID_fkey` FOREIGN KEY (`sitzungszimmerStID`) REFERENCES `Standorte`(`standortID`) ON DELETE RESTRICT ON UPDATE CASCADE;
