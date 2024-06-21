import { drizzle } from "drizzle-orm/d1";
import { eq } from "drizzle-orm";
import { Hono } from "hono";
import { categories, pages, products } from "./db/schema";

export type Env = {
  DB: D1Database;
};

const app = new Hono<{ Bindings: Env }>();

app.get("/pages", async (c) => {
  const db = drizzle(c.env.DB);
  const pagesList = await db
    .select({
      id: pages.id,
      name: pages.name,
    })
    .from(pages)
    .all();
  return c.json(pagesList);
});

app.get("/pages/categories", async (c) => {
  const db = drizzle(c.env.DB);
  const categoriesList = await db
    .select({
      id: categories.id,
      name: categories.name,
      weight: categories.weight,
      pageId: categories.pageId,
    })
    .from(categories)
    .all();
  return c.json(categoriesList);
});

app.get("/pages/:page_id/categories", async (c) => {
  const pageId = Number(c.req.param("page_id"));

  const db = drizzle(c.env.DB);
  const categoriesList = await db
    .select({
      id: categories.id,
      name: categories.name,
      weight: categories.weight,
      pageId: categories.pageId,
    })
    .from(categories)
    .where(eq(categories.pageId, pageId));
  return c.json(categoriesList);
});

app.get("/pages/categories/:category_id/products", async (c) => {
  const categoryId = Number(c.req.param("category_id"));

  const db = drizzle(c.env.DB);
  const productsList = await db
    .select()
    .from(products)
    .where(eq(products.categoryId, categoryId));

  const categoriesList = await db
    .select({
      weight: categories.weight,
    })
    .from(categories)
    .where(eq(categories.id, categoryId))
    .limit(1);

  const categoryWeight = categoriesList;

  const productsData: any[] = [];

  productsList.map(async (product) => {
    const productName: string = product.name;

    const imageName: string = generateImageName(productName, categoryWeight);

    productsData.push({ imageName });
  });

  return c.json(data);
});

const generateImageName = (name: string, weight: string) => {
  return (
    name
      .toLowerCase()
      .replace(/[^\w ]+/g, "")
      .replace(/ +/g, "-") +
    "-" +
    weight +
    ".webp"
  );
};

export default app;
