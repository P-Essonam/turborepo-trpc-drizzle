CREATE TABLE "users" (
	"banned" boolean DEFAULT false NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"default_store_id" text,
	"email" text NOT NULL,
	"first_name" text NOT NULL,
	"id" text PRIMARY KEY NOT NULL,
	"image_url" text,
	"last_name" text NOT NULL,
	"locked" boolean DEFAULT false NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
