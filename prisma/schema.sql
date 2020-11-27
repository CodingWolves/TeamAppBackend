CREATE TABLE `courses` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`value` VARCHAR(45) NOT NULL,
	`label` VARCHAR(45) NOT NULL,
	PRIMARY KEY (`id`),
	UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE
);
CREATE TABLE `groups` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(45) NULL,
	`subject` VARCHAR(45) NULL,
	`studyTogether` TINYINT NULL,
	`where` VARCHAR(45) NULL,
	`instisution` VARCHAR(45) NULL,
	`participantsNumber` INT NULL,
	`description` VARCHAR(45) NULL,
	`timeRanges` VARCHAR(45) NULL,
	`howLong` VARCHAR(45) NULL,
	`ownerId` VARCHAR(45) NULL,
	PRIMARY KEY (`id`),
	UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE
);
CREATE TABLE `users` (
	`email` VARCHAR(45) NOT NULL,
	`name` VARCHAR(45) NOT NULL,
	`password` VARCHAR(45) NOT NULL,
	`degree` VARCHAR(45) NULL,
	`instisution` VARCHAR(45) NULL,
	`image` LONGTEXT NULL,
	`interested` VARCHAR(45) NULL,
	PRIMARY KEY (`email`),
	UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE
);