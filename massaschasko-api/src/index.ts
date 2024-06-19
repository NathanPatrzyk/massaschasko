import { Hono } from "hono";
import { drizzle } from "drizzle-orm/d1";
import * as schema from "./db/schema";

export type Env = {
  DB: D1Database;
};

const app = new Hono<{ Bindings: Env }>();

app.get("/pages", async (c) => {
  const db = drizzle(c.env.DB, { schema });
  const result = await db.query.pages.findMany();
  return c.json(result);
});

app.get("/pages/categories", async (c) => {
  const db = drizzle(c.env.DB, { schema });
  const result = await db.query.categories.findMany();
  return c.json(result);
});

app.get("/products", async (c) => {
  const db = drizzle(c.env.DB, { schema });
  const result = await db.query.products.findMany();
  return c.json(result);
});

export default app;
