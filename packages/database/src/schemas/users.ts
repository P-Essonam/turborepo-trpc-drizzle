import {
  boolean,
  pgTable,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const users = pgTable(
  "users",
  {
    createdAt: timestamp("created_at").notNull().defaultNow(),
    email: text("email").notNull().unique(),
    firstName: text("first_name").notNull(),
    id: text("id")
      .primaryKey()
      .$defaultFn(() => crypto.randomUUID()),
    imageUrl: text("image_url"),
    lastName: text("last_name").notNull(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
