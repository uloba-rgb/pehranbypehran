import { db } from "../server/db";
import { products } from "../shared/schema";
import { eq, and } from "drizzle-orm";

async function updatePashminaPrices() {
  console.log("Updating pashmina-shawls prices from 4490 to 4990...");
  
  const result = await db
    .update(products)
    .set({ priceUsd: 4990 })
    .where(
      and(
        eq(products.type, "pashmina-shawls"),
        eq(products.priceUsd, 4490)
      )
    );
  
  console.log("Price update completed successfully!");
}

updatePashminaPrices().catch(console.error);