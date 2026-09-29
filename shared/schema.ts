import { sql } from "drizzle-orm";
import { pgTable, text, varchar, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  productId: text("product_id").notNull().unique(),
  brand: text("brand").notNull(),
  name: text("name").notNull(),
  color: text("color").notNull(),
  type: text("type").notNull(),
  description: text("description").notNull(),
  longDescription: text("long_description").notNull(),
  priceUsd: integer("price_usd").notNull(),
  image: text("image").notNull(),
  materialDetail: text("material_detail").notNull(),
  embroideryDetail: text("embroidery_detail").notNull(),
  careDetail: text("care_detail").notNull(),
  isSoldOut: boolean("is_sold_out").default(false),
});

export const insertProductSchema = createInsertSchema(products).omit({
  id: true,
});

export type InsertProduct = z.infer<typeof insertProductSchema>;
export type Product = typeof products.$inferSelect;

export const reviews = pgTable("reviews", {
  id: serial("id").primaryKey(),
  productId: integer("product_id").notNull().references(() => products.id),
  name: text("name").notNull(),
  text: text("text").notNull(),
  rating: integer("rating").notNull(),
});

export const insertReviewSchema = createInsertSchema(reviews).omit({
  id: true,
});

export type InsertReview = z.infer<typeof insertReviewSchema>;
export type Review = typeof reviews.$inferSelect;
