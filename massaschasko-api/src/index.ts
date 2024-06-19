import { drizzle } from "drizzle-orm/d1";
import { Hono } from "hono";
import { categories, pages, products } from "./db/schema";

export type Env = {
  DB: D1Database;
};

const app = new Hono<{ Bindings: Env }>();

app.get("/pages", async (c) => {
  const db = drizzle(c.env.DB);
  const result = await db.select().from(pages).all();
  return c.json(result);
});

app.get("/categories", async (c) => {
  const db = drizzle(c.env.DB);
  const result = await db.select().from(categories).all();
  return c.json(result);
});

app.get("/products", async (c) => {
  const db = drizzle(c.env.DB);
  const result = await db.select().from(products).all();
  return c.json(result);
});

export default app;
