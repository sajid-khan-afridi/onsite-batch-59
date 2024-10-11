CREATE TABLE IF NOT EXISTS "todo15" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"completed" boolean DEFAULT false
);
