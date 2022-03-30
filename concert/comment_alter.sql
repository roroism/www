ALTER TABLE `free_ripple` ADD `depth` int DEFAULT 0 after regist_day
ALTER TABLE `free_ripple` ADD `c_order` int DEFAULT 0 after depth
ALTER TABLE `free_ripple` ADD `groupNum` int after c_order
ALTER TABLE `free_ripple` ADD `updateFlag` int DEFAULT 0 after groupNum
ALTER TABLE `free_ripple` ADD `to_nick` char(10) after updateFlag