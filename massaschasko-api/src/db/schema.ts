import { sql } from "drizzle-orm";
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const pages = sqliteTable("pages", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name", { length: 200 }).notNull(),
  description: text("description", { length: 2000 }),
});

export const categories = sqliteTable("categories", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name", { length: 200 }).notNull(),
  weight: text("weight", { length: 200 }).notNull(),
  pageId: integer("page_id").references(() => pages.id),
});

export const products = sqliteTable("products", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name", { length: 200 }).notNull(),
  categoryId: integer("category_id").references(() => categories.id),
});
