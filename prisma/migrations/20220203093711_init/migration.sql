-- CreateTable
CREATE TABLE `user` (
    `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(35) NULL,
    `password` VARCHAR(30) NULL,

    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `stockwerke` (
    `stockwerk_id` INTEGER NOT NULL,
    `stockwerk_nr` INTEGER NULL,
    `stockwerk_name` VARCHAR(30) NULL,

    PRIMARY KEY (`stockwerk_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
