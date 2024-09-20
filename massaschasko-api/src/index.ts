import { Hono } from "hono";
import { cors } from "hono/cors";
import { routes } from "./routes";

export type Env = {
  DB: D1Database;
};

const app = new Hono<{ Bindings: Env }>();

app.use(
  cors({
    origin: "https://massaschasko-api.nathanpatrzyk11.workers.dev",
    allowMethods: ["GET"],
  })
);

routes(app);

export default app;
