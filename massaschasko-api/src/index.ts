import { Hono } from "hono";
import { routes } from "./routes";

export type Env = {
  DB: D1Database;
};

const app = new Hono<{ Bindings: Env }>();

routes(app);

export default app;
