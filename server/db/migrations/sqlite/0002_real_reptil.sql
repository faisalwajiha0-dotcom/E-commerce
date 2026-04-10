PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_products` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`price` integer NOT NULL,
	`image` text NOT NULL,
	`description` text,
	`category` text
);
--> statement-breakpoint
INSERT INTO `__new_products`("id", "title", "price", "image", "description", "category") SELECT "id", "title", "price", "image", "description", "category" FROM `products`;--> statement-breakpoint
DROP TABLE `products`;--> statement-breakpoint
ALTER TABLE `__new_products` RENAME TO `products`;--> statement-breakpoint
PRAGMA foreign_keys=ON;