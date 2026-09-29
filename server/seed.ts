import { db } from "./db";
import { products } from "@shared/schema";
import { eq } from "drizzle-orm";

const seedProducts = [
  {
    productId: "crimson-tilla-pheran",
    brand: "Koh-e-Noor",
    name: "Crimson Tilla Pheran",
    color: "Crimson",
    type: "tilla-pheran",
    description: "Luxurious Crimson Pheran with Gold Tilla",
    longDescription: "A masterpiece of craftsmanship, this Crimson Tilla Pheran features the finest fabric adorned with traditional gold Tilla embroidery. The Pheran only - pants/sharara shown in images are not included.",
    priceUsd: 12990,
    image: "a618a936-88cf-49d7-aa2d-a332e54f2472_1766259410913.webp",
    materialDetail: "Premium Fabric",
    embroideryDetail: "Gold Tilla Work",
    careDetail: "Machine wash or dry clean only"
  },
  {
    productId: "mustard-tilla-pheran",
    brand: "Koh-e-Noor",
    name: "Mustard Tilla Pheran",
    color: "Mustard",
    type: "tilla-pheran",
    description: "Elegant Mustard Pheran with Silver Tilla",
    longDescription: "Step into elegance with the Mustard Tilla Pheran. The vibrant mustard fabric provides the perfect canvas for the intricate silver Tilla motifs. The Pheran only - pants/sharara shown in images are not included.",
    priceUsd: 12990,
    image: "d589d815-0454-404f-899e-44e3a77773cd_1766259477601.webp",
    materialDetail: "Premium Fabric",
    embroideryDetail: "Silver Tilla Work",
    careDetail: "Machine wash or dry clean only"
  },
  {
    productId: "azure-gulnar",
    brand: "Gulnar",
    name: "Black Red Gulnar",
    color: "Black with Red",
    type: "shawls",
    description: "Elegant Woolen Aari Elite Pheran",
    longDescription: "The Black Red Gulnar features bold red Aari embroidery on premium black wool. A striking statement piece from our elite Woolen Aari collection.",
    priceUsd: 8990,
    image: "WhatsApp_Image_2025-12-20_at_15.26.19_1766244659391.webp",
    materialDetail: "Premium Wool",
    embroideryDetail: "Red Aari Work",
    careDetail: "Machine wash or dry clean only"
  },
  {
    productId: "white-floral-gulnar",
    brand: "Gulnar",
    name: "White Floral Gulnar",
    color: "White with Pink Floral",
    type: "shawls",
    description: "Exquisite White Woolen Aari Elite Pheran",
    longDescription: "The White Floral Gulnar combines pristine white wool with delicate pink floral Aari embroidery. An elegant piece for special occasions.",
    priceUsd: 8990,
    image: "White_slide_01_1766235814591.webp",
    materialDetail: "Premium Wool",
    embroideryDetail: "Pink Floral Aari Work",
    careDetail: "Machine wash or dry clean only"
  },
  {
    productId: "emerald-floral-gulnar",
    brand: "Gulnar",
    name: "Emerald Floral Gulnar",
    color: "Emerald Green with Floral",
    type: "shawls",
    description: "Stunning Emerald Woolen Aari Elite Pheran",
    longDescription: "The Emerald Floral Gulnar showcases rich emerald green wool with intricate floral Aari patterns. A vibrant masterpiece of Kashmiri artistry.",
    priceUsd: 8990,
    image: "Noorah_green_1766234959572.webp",
    materialDetail: "Premium Wool",
    embroideryDetail: "Floral Aari Work",
    careDetail: "Machine wash or dry clean only"
  },
  {
    productId: "midnight-pink-noorah",
    brand: "Gulrukh",
    name: "Navy Blue Gulrukh",
    color: "Navy Blue",
    type: "woolen-aari",
    description: "Classic Navy Wool with Aari Embroidery",
    longDescription: "The Navy Blue Gulrukh features delicate Aari embroidery on premium navy wool, creating a harmonious blend of traditional artistry and modern style.",
    priceUsd: 8500,
    image: "5b55a646-e689-4aba-9f66-43ca6f4a2a9c_1766317792395.webp",
    materialDetail: "Fine Wool",
    embroideryDetail: "Colorful Aari Work",
    careDetail: "Machine wash or dry clean only"
  },
  {
    productId: "golden-maroon-noorah",
    brand: "Gulrukh",
    name: "Maroon Gold Gulrukh",
    color: "Maroon Gold",
    type: "woolen-aari",
    description: "Rich Maroon Wool with Golden Aari",
    longDescription: "Warmth meets luxury in the Maroon Gold Gulrukh. Rich maroon wool serves as the perfect canvas for intricate golden Aari embroidery.",
    priceUsd: 8500,
    image: "45f98240-6bb2-400d-88f8-d18baaea520a_1766317998419.webp",
    materialDetail: "Fine Wool",
    embroideryDetail: "Golden Aari Work",
    careDetail: "Machine wash or dry clean only"
  },
  {
    productId: "violet-noorah",
    brand: "Gulrukh",
    name: "Navy Red Gulrukh",
    color: "Navy Red",
    type: "woolen-aari",
    description: "Navy Wool with Red Aari Embroidery",
    longDescription: "The Navy Red Gulrukh brings the warmth of fine navy wool together with the vibrancy of red Aari embroidery. Perfect for the modern connoisseur of Kashmiri art.",
    priceUsd: 8500,
    image: "1f597613-2304-44ef-8603-9c13b204af79_1766318228198.webp",
    materialDetail: "Fine Wool",
    embroideryDetail: "Red Aari Work",
    careDetail: "Machine wash or dry clean only"
  },
  {
    productId: "sunshine-black-noorah",
    brand: "Gulrukh",
    name: "Navy White Gulrukh",
    color: "Navy White",
    type: "woolen-aari",
    description: "Navy Wool with White Aari",
    longDescription: "Elegant navy wool with pristine white Aari patterns. The Navy White Gulrukh brings a refined contrast to your winter wardrobe.",
    priceUsd: 8500,
    image: "Navy_blue_x_white_1766318385340.webp",
    materialDetail: "Fine Wool",
    embroideryDetail: "White Aari Work",
    careDetail: "Machine wash or dry clean only"
  },
  {
    productId: "crimson-black-noorah",
    brand: "Gulrukh",
    name: "Crimson Black Gulrukh",
    color: "Black with Crimson",
    type: "woolen-aari",
    description: "Elegant Black Wool with Crimson Aari",
    longDescription: "A striking contrast of crimson Aari embroidery on a classic black woolen base. This Gulrukh Pheran brings a bold statement to winter elegance.",
    priceUsd: 8500,
    image: "Noorah_01-1_1766142098074.webp",
    materialDetail: "Fine Wool",
    embroideryDetail: "Crimson Aari Work",
    careDetail: "Machine wash or dry clean only"
  },
  {
    productId: "burgundy-blue-gulrukh",
    brand: "Gulrukh",
    name: "Burgundy Blue Gulrukh",
    color: "Burgundy Blue",
    type: "woolen-aari",
    description: "Burgundy Wool with Blue Aari Embroidery",
    longDescription: "The Burgundy Blue Gulrukh features stunning blue Aari patterns on rich burgundy wool. A beautiful fusion of colors for the discerning wearer.",
    priceUsd: 8500,
    image: "GULRUKH_01_FRONT_1766325065202.webp",
    materialDetail: "Fine Wool",
    embroideryDetail: "Blue Aari Work",
    careDetail: "Machine wash or dry clean only"
  },
  {
    productId: "beige-pashmina-dress",
    brand: "Pashmina",
    name: "Beige Pashmina Dress",
    color: "Beige",
    type: "pashmina-unstitched",
    description: "Elegant Pashmina Dress with Traditional Embroidery",
    longDescription: "Luxurious beige Pashmina dress featuring traditional Kashmiri embroidery. Crafted from the finest Pashmina for ultimate comfort and elegance.",
    priceUsd: 12490,
    image: "0ae1cdad-10de-4061-9c09-86ea36b8ad8e_1766315533000.webp",
    materialDetail: "Pure Pashmina",
    embroideryDetail: "Traditional Kashmiri Embroidery",
    careDetail: "Machine wash or dry clean only"
  },
  {
    productId: "white-pashmina-shawl",
    brand: "Pashmina",
    name: "White Pashmina Shawl",
    color: "White",
    type: "pashmina-shawls",
    description: "Luxurious White Pashmina Shawl",
    longDescription: "Pure white Pashmina shawl handwoven with traditional techniques. The epitome of luxury and warmth for any occasion.",
    priceUsd: 4990,
    image: "45ad3c5b-a6f0-4bdc-bc78-644fc83247e6_1766316035866.webp",
    materialDetail: "Pure Pashmina",
    embroideryDetail: "Handwoven",
    careDetail: "Machine wash or dry clean only"
  },
  {
    productId: "black-pashmina-shawl",
    brand: "Pashmina",
    name: "Black Pashmina Shawl",
    color: "Black",
    type: "pashmina-shawls",
    description: "Classic Black Pashmina Shawl",
    longDescription: "Elegant black Pashmina shawl handwoven with traditional techniques. A timeless piece that adds sophistication to any outfit.",
    priceUsd: 4990,
    image: "304b37ec-37bc-4e1e-af40-5a45effb7f0f_1766316035867.webp",
    materialDetail: "Pure Pashmina",
    embroideryDetail: "Handwoven",
    careDetail: "Machine wash or dry clean only"
  },
  {
    productId: "cream-pashmina-shawl",
    brand: "Pashmina",
    name: "Cream Pashmina Shawl",
    color: "Cream",
    type: "pashmina-shawls",
    description: "Soft Cream Pashmina Shawl",
    longDescription: "Luxurious cream Pashmina shawl handwoven with traditional techniques. A versatile piece perfect for any occasion.",
    priceUsd: 4990,
    image: "296751c0-1163-4e62-a046-5921ca3764e7_1766316035868.webp",
    materialDetail: "Pure Pashmina",
    embroideryDetail: "Handwoven",
    careDetail: "Machine wash or dry clean only"
  }
];

export async function seedDatabase(): Promise<void> {
  try {
    const existingProducts = await db.select().from(products);
    
    if (existingProducts.length === 0) {
      console.log("[seed] Database is empty, seeding products...");
      for (const product of seedProducts) {
        await db.insert(products).values(product);
      }
      console.log(`[seed] Successfully seeded ${seedProducts.length} products`);
    } else {
      console.log(`[seed] Syncing ${seedProducts.length} products...`);
      
      for (const product of seedProducts) {
        const existing = await db.select().from(products).where(eq(products.productId, product.productId));
        if (existing.length > 0) {
          await db.update(products).set(product).where(eq(products.productId, product.productId));
        } else {
          await db.insert(products).values(product);
        }
      }
      console.log(`[seed] Successfully synced ${seedProducts.length} products`);
    }
  } catch (error) {
    console.error("[seed] Error seeding database:", error);
    throw error;
  }
}
