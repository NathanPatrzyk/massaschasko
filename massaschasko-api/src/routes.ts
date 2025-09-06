import { drizzle } from "drizzle-orm/d1";
import { eq } from "drizzle-orm";
import { Hono } from "hono";
import { categories, pages, products } from "./db/schema";
import {
  generateSlug,
  generateImageName,
  generateDescription,
  generateMessageForWhatsapp,
} from "./utils";

export const routes = (app: Hono<{ Bindings: { DB: D1Database } }>) => {
  app.get("/pages", async (c) => {
    const db = drizzle(c.env.DB);

    const queriedPages = await db
      .select({
        id: pages.id,
        name: pages.name,
        description: pages.description,
      })
      .from(pages)
      .all();

    const processedPages: any[] = [];

    queriedPages.map((queriedPage) => {
      const slug: string = generateSlug(queriedPage.name);
      processedPages.push({ ...queriedPage, slug: slug });
    });

    return c.json(processedPages);
  });

  app.get("/pages/categories", async (c) => {
    const db = drizzle(c.env.DB);

    const queriedCategories = await db
      .select({
        id: categories.id,
        name: categories.name,
        weight: categories.weight,
      })
      .from(categories)
      .all();

    return c.json(queriedCategories);
  });

  app.get("/pages/:page_id/categories", async (c) => {
    const pageId = Number(c.req.param("page_id"));

    const db = drizzle(c.env.DB);

    const queriedCategories = await db
      .select({
        id: categories.id,
        name: categories.name,
        weight: categories.weight,
      })
      .from(categories)
      .where(eq(categories.pageId, pageId));

    return c.json(queriedCategories);
  });

  app.get("/pages/categories/:category_id/products", async (c) => {
    const categoryId = Number(c.req.param("category_id"));

    const db = drizzle(c.env.DB);

    const queriedProducts = await db
      .select()
      .from(products)
      .where(eq(products.categoryId, categoryId));

    const queriedCategories = await db
      .select({
        weight: categories.weight,
      })
      .from(categories)
      .where(eq(categories.id, categoryId))
      .limit(1);

    const { weight } = queriedCategories[0];

    const processedProducts: any[] = [];

    queriedProducts.map(async (queriedProduct) => {
      const name: string = queriedProduct.name;

      const imageName: string = generateImageName(name, weight);

      const description: string = generateDescription(weight);

      const messageForWhatsapp: string = generateMessageForWhatsapp(
        name,
        weight
      );

      processedProducts.push({
        imageName,
        name,
        weight,
        description,
        messageForWhatsapp,
      });
    });

    return c.json(processedProducts);
  });
};
