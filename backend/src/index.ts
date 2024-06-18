import { drizzle } from "drizzle-orm/d1";
import { Hono } from "hono";
import { weights } from "./db/schema";

export type Env = {
  DB: D1Database;
};

const app = new Hono<{ Bindings: Env }>();

app.get("/weights", async (c) => {
  const db = drizzle(c.env.DB);
  const result = await db.select().from(weights).all();
  return c.json(result);
});

export default app;
