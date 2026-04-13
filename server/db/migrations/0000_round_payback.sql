CREATE TABLE `products` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`price` real NOT NULL,
	`category` text NOT NULL,
	`image` text NOT NULL,
	`description` text,
	`stock` integer DEFAULT 0,
	`featured` integer DEFAULT false,
	`special` integer DEFAULT false
);
