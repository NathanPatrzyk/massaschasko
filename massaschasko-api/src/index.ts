import { drizzle } from "drizzle-orm/d1";
import { eq } from "drizzle-orm";
import { Hono } from "hono";
import { categories, pages, products } from "./db/schema";
import { SQLiteBaseInteger } from "drizzle-orm/sqlite-core";
import { float } from "drizzle-orm/mysql-core";

export type Env = {
  DB: D1Database;
};

const app = new Hono<{ Bindings: Env }>();

app.get("/pages", async (c) => {
  const db = drizzle(c.env.DB);
  const result = await db
    .select({
      id: pages.id,
      name: pages.name,
    })
    .from(pages)
    .all();
  return c.json(result);
});

app.get("/pages/categories", async (c) => {
  const db = drizzle(c.env.DB);
  const result = await db
    .select({
      id: categories.id,
      name: categories.name,
      weight: categories.weight,
      pageId: categories.pageId,
    })
    .from(categories)
    .all();
  return c.json(result);
});

app.get("/pages/:page_id/categories", async (c) => {
  const pageId = Number(c.req.param("page_id"));

  const db = drizzle(c.env.DB);
  const result = await db
    .select({
      id: categories.id,
      name: categories.name,
      weight: categories.weight,
      pageId: categories.pageId,
    })
    .from(categories)
    .where(eq(categories.pageId, pageId));
  return c.json(result);
});

app.get("/pages/categories/:category_id/products", async (c) => {
  const categoryId = Number(c.req.param("category_id"));

  const db = drizzle(c.env.DB);
  const result = await db
    .select()
    .from(products)
    .where(eq(products.categoryId, categoryId));
  return c.json(result);
});

export default app;
