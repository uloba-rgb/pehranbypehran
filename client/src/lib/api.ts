import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import type { Product as DBProduct, Review } from "@shared/schema";

// Import all product images
import pheran1 from "@assets/WhatsApp Image 2025-11-29 at 18.59.14 (2)_1764442956796.webp";
import pheran2 from "@assets/IMG_4175_1764442607509.webp";
import pheran3 from "@assets/image_1764845398156.webp";
import maroonVelvet from "@assets/image_1764846231975.webp";
import tillaBlack from "@assets/image_1764846223659.webp";
import tillaBlue from "@assets/image_1764846340788.webp";
import tillaGreen from "@assets/image_1764847584593.webp";
import noorahBlackRed from "@assets/image_1764847929971.webp";
import noorahNavyPink from "@assets/image_1764847945686.webp";
import noorahMaroonYellow from "@assets/image_1764847984894.webp";
import noorahBlackYellow from "@assets/image_1764848014557.webp";
import noorahBlackColorful from "@assets/Noorah_01-1_1766142098074.webp";
import noorahBlackColorful2 from "@assets/Noorah_01-2_1766143523061.webp";
import noorahBlackColorful3 from "@assets/Noorah_01-03_1766143523060.webp";
import gulnarWhite from "@assets/White_slide_01_1766235814591.webp";
import gulnarWhite2 from "@assets/White_slide_02_1766236138716.webp";
import gulnarWhite3 from "@assets/White_slide_03_1766236138717.webp";
import gulnarGreen from "@assets/Noorah_green_1766234959572.webp";
import gulrukhMaroon from "@assets/Gulrukh_side_pose_1766238480084.webp";
import gulrukhFront from "@assets/GUl_f_1_1766238672914.webp";
import gulrukhCloseup from "@assets/gurukh_close_up_1766238672914.webp";
import gulrukhBottom from "@assets/b99be966-9f8d-4ee0-8631-41da7dc12489_1766238672913.webp";
import blackRedGulrukh from "@assets/balck_slide_02_1766241868602.webp";
import blackRedGulnar from "@assets/WhatsApp_Image_2025-12-20_at_15.26.19_1766244659391.webp";
import blackRedGulnar2 from "@assets/WhatsApp_Image_2025-12-20_at_15.37.07_(1)_1766245079698.webp";
import blackRedGulnar3 from "@assets/WhatsApp_Image_2025-12-20_at_15.37.07_1766245079699.webp";
import tillaCrimson from "@assets/a618a936-88cf-49d7-aa2d-a332e54f2472_1766259410913.webp";
import tillaMustard from "@assets/d589d815-0454-404f-899e-44e3a77773cd_1766259477601.webp";
import tillaCrimson2 from "@assets/8835dfbb-5795-44ae-a0f1-7d3b44098fa8_1766259809632.webp";
import tillaCrimson3 from "@assets/6c6e7c3a-d841-4cfd-88b6-2dbeb7783fef_1766259809633.webp";
import tillaCrimson4 from "@assets/775b4ada-fb31-4f03-b8a0-0cf745994f06_1766259809633.webp";
import tillaYellow1 from "@assets/Yellow_1766260658309.webp";
import tillaYellow2 from "@assets/955632b4-8f3f-4aba-9df7-82cc4e7e5736_1766260658309.webp";
import tillaYellow3 from "@assets/64472979-ca03-417d-91a7-7484b408cc4f_1766260658308.webp";
import pashminaDress1 from "@assets/0ae1cdad-10de-4061-9c09-86ea36b8ad8e_1766315533000.webp";
import pashminaDress2 from "@assets/Pashmina_DResses_2_1766315532999.webp";
import pashminaDress3 from "@assets/97e0e331-d225-44f2-81a2-1aa0102c6756_1766315058986.webp";
import pashminaDress4 from "@assets/4b1e3341-c68d-4e09-9a2c-c0c3cf1a2f54_1766315058988.webp";
import whiteShawl from "@assets/45ad3c5b-a6f0-4bdc-bc78-644fc83247e6_1766316035866.webp";
import blackShawl from "@assets/304b37ec-37bc-4e1e-af40-5a45effb7f0f_1766316035867.webp";
import creamShawl from "@assets/296751c0-1163-4e62-a046-5921ca3764e7_1766316035868.webp";
import navyKurti from "@assets/5b55a646-e689-4aba-9f66-43ca6f4a2a9c_1766317792395.webp";
import maroonGoldKurti from "@assets/45f98240-6bb2-400d-88f8-d18baaea520a_1766317998419.webp";
import navyRedKurti from "@assets/1f597613-2304-44ef-8603-9c13b204af79_1766318228198.webp";
import navyWhiteKurti from "@assets/Navy_blue_x_white_1766318385340.webp";
import burgundyBlueKurti from "@assets/GULRUKH_01_FRONT_1766325065202.webp";
import burgundyBlueDetail from "@assets/b99be966-9f8d-4ee0-8631-41da7dc12489_1766325207819.webp";
import burgundyBlueCloseup from "@assets/gurukh_close_up_1766325207819.webp";
import burgundyBlueSide from "@assets/Gulrukh_side_pose_1766325207820.webp";
import burgundyBlueFront2 from "@assets/GUl_f_1_1766325207821.webp";
import navyBlueBack from "@assets/0eefb4ca-cb62-4e80-a5b1-582ad38da820_1766325406791.webp";
import navyBlueCloseup from "@assets/43f2c234-8764-4cc2-a708-533e9af7a005_1766325406792.webp";
import maroonGoldFront2 from "@assets/1c06a492-6094-4471-b68b-7b7ad053f6e6_1766325733476.webp";
import maroonGoldSide from "@assets/1f260ad5-0296-43e1-9599-4efbb72ffe8c_1766325733478.webp";
import maroonGoldAutumn from "@assets/9575fb0f-c45f-450a-82f5-bb69339f5e52_1766325733479.webp";
import navyRedMountain from "@assets/2ce5b1d1-c9c2-4047-baed-d2f8ec17208e_1766325973091.webp";
import navyWhiteCloseup from "@assets/f03dd1cb-07e4-48ed-81f7-01cf7d71e0d8_1766326157477.webp";
import navyWhiteFull from "@assets/navy_02_1766326157477.webp";

// Product gallery images (additional images for products)
export const productGalleryImages: Record<string, string[]> = {
  "crimson-black-noorah": [noorahBlackColorful, noorahBlackColorful2, noorahBlackColorful3],
  "burgundy-blue-gulrukh": [burgundyBlueKurti, burgundyBlueFront2, burgundyBlueSide, burgundyBlueCloseup, burgundyBlueDetail],
  "midnight-pink-noorah": [navyKurti, navyBlueCloseup, navyBlueBack],
  "golden-maroon-noorah": [maroonGoldKurti, maroonGoldFront2, maroonGoldSide, maroonGoldAutumn],
  "sunshine-black-noorah": [navyWhiteKurti, navyWhiteFull, navyWhiteCloseup],
  "white-floral-gulnar": [gulnarWhite, gulnarWhite2, gulnarWhite3],
  "violet-noorah": [navyRedKurti, navyRedMountain],
  "azure-gulnar": [blackRedGulnar, blackRedGulnar2, blackRedGulnar3],
  "emerald-floral-gulnar": [gulnarGreen],
  "crimson-tilla-pheran": [tillaCrimson, tillaCrimson2, tillaCrimson3, tillaCrimson4],
  "mustard-tilla-pheran": [tillaMustard, tillaYellow1, tillaYellow2, tillaYellow3],
  "beige-pashmina-dress": [pashminaDress1, pashminaDress2, pashminaDress3, pashminaDress4],
  "white-pashmina-shawl": [whiteShawl],
  "black-pashmina-shawl": [blackShawl],
  "cream-pashmina-shawl": [creamShawl],
};

// Map image filenames to imported assets
const imageMap: Record<string, string> = {
  "WhatsApp Image 2025-11-29 at 18.59.14 (2)_1764442956796.webp": pheran1,
  "IMG_4175_1764442607509.webp": pheran2,
  "image_1764845398156.webp": pheran3,
  "image_1764846231975.webp": maroonVelvet,
  "image_1764846223659.webp": tillaBlack,
  "image_1764846340788.webp": tillaBlue,
  "image_1764847584593.webp": tillaGreen,
  "image_1764847929971.webp": noorahBlackRed,
  "image_1764847945686.webp": noorahNavyPink,
  "image_1764847984894.webp": noorahMaroonYellow,
  "image_1764848014557.webp": noorahBlackYellow,
  "Noorah_01-1_1766142098074.webp": noorahBlackColorful,
  "White_slide_01_1766235814591.webp": gulnarWhite,
  "Noorah_green_1766234959572.webp": gulnarGreen,
  "Gulrukh_side_pose_1766238480084.webp": gulrukhMaroon,
  "balck_slide_02_1766241868602.webp": blackRedGulrukh,
  "WhatsApp_Image_2025-12-20_at_15.26.19_1766244659391.webp": blackRedGulnar,
  "a618a936-88cf-49d7-aa2d-a332e54f2472_1766259410913.webp": tillaCrimson,
  "d589d815-0454-404f-899e-44e3a77773cd_1766259477601.webp": tillaMustard,
  "0ae1cdad-10de-4061-9c09-86ea36b8ad8e_1766315533000.webp": pashminaDress1,
  "45ad3c5b-a6f0-4bdc-bc78-644fc83247e6_1766316035866.webp": whiteShawl,
  "304b37ec-37bc-4e1e-af40-5a45effb7f0f_1766316035867.webp": blackShawl,
  "296751c0-1163-4e62-a046-5921ca3764e7_1766316035868.webp": creamShawl,
  "5b55a646-e689-4aba-9f66-43ca6f4a2a9c_1766317792395.webp": navyKurti,
  "45f98240-6bb2-400d-88f8-d18baaea520a_1766317998419.webp": maroonGoldKurti,
  "1f597613-2304-44ef-8603-9c13b204af79_1766318228198.webp": navyRedKurti,
  "Navy_blue_x_white_1766318385340.webp": navyWhiteKurti,
  "GULRUKH_01_FRONT_1766325065202.webp": burgundyBlueKurti,
  "b99be966-9f8d-4ee0-8631-41da7dc12489_1766325207819.webp": burgundyBlueDetail,
  "gurukh_close_up_1766325207819.webp": burgundyBlueCloseup,
  "Gulrukh_side_pose_1766325207820.webp": burgundyBlueSide,
  "GUl_f_1_1766325207821.webp": burgundyBlueFront2,
  "0eefb4ca-cb62-4e80-a5b1-582ad38da820_1766325406791.webp": navyBlueBack,
  "43f2c234-8764-4cc2-a708-533e9af7a005_1766325406792.webp": navyBlueCloseup,
  "1c06a492-6094-4471-b68b-7b7ad053f6e6_1766325733476.webp": maroonGoldFront2,
  "1f260ad5-0296-43e1-9599-4efbb72ffe8c_1766325733478.webp": maroonGoldSide,
  "9575fb0f-c45f-450a-82f5-bb69339f5e52_1766325733479.webp": maroonGoldAutumn,
  "2ce5b1d1-c9c2-4047-baed-d2f8ec17208e_1766325973091.webp": navyRedMountain,
  "f03dd1cb-07e4-48ed-81f7-01cf7d71e0d8_1766326157477.webp": navyWhiteCloseup,
  "navy_02_1766326157477.webp": navyWhiteFull,
};

// Frontend product type that matches the UI expectations
export interface Product {
  id: string;
  brand: string;
  name: string;
  color: string;
  type: "tilla-pheran" | "woolen-aari" | "shawls" | "pashmina-shawls" | "pashmina-unstitched";
  description: string;
  longDescription: string;
  price: string;
  image: string;
  isSoldOut: boolean;
  details: {
    material: string;
    embroidery: string;
    care: string;
  }
}

// Convert database product to frontend product
function convertProduct(dbProduct: DBProduct): Product {
  return {
    id: dbProduct.productId,
    brand: dbProduct.brand,
    name: dbProduct.name,
    color: dbProduct.color,
    type: dbProduct.type as "tilla-pheran" | "woolen-aari" | "shawls" | "pashmina-shawls" | "pashmina-unstitched",
    description: dbProduct.description,
    longDescription: dbProduct.longDescription,
    price: dbProduct.priceUsd > 1000 ? `Rs. ${dbProduct.priceUsd.toLocaleString()}` : `$${dbProduct.priceUsd}`,
    image: imageMap[dbProduct.image] || dbProduct.image,
    isSoldOut: dbProduct.isSoldOut || false,
    details: {
      material: dbProduct.materialDetail,
      embroidery: dbProduct.embroideryDetail,
      care: dbProduct.careDetail,
    }
  };
}

// Fetch all products
export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await fetch(`/api/products?t=${Date.now()}`, {
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache',
        }
      });
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data: DBProduct[] = await response.json();
      return data.map(convertProduct);
    },
    staleTime: 0,
    refetchOnMount: 'always',
    refetchOnWindowFocus: true,
  });
}

// Fetch single product
export function useProduct(productId: string) {
  return useQuery({
    queryKey: ["products", productId],
    queryFn: async () => {
      const response = await fetch(`/api/products/${productId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch product");
      }
      const data: DBProduct = await response.json();
      return convertProduct(data);
    },
    enabled: !!productId,
  });
}

// Fetch reviews for a product
export function useProductReviews(productId: string) {
  return useQuery({
    queryKey: ["reviews", productId],
    queryFn: async () => {
      const response = await fetch(`/api/products/${productId}/reviews`);
      if (!response.ok) {
        throw new Error("Failed to fetch reviews");
      }
      const data: Review[] = await response.json();
      return data;
    },
    enabled: !!productId,
  });
}

// Create a review
export function useCreateReview() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (review: { productId: number; name: string; text: string; rating: number }) => {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(review),
      });
      
      if (!response.ok) {
        throw new Error("Failed to create review");
      }
      
      return response.json();
    },
    onSuccess: (_, variables) => {
      // Invalidate the reviews query for this product
      queryClient.invalidateQueries({ queryKey: ["reviews"] });
    },
  });
}
