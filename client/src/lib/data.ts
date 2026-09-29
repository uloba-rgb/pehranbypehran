import pheran1 from "@assets/WhatsApp Image 2025-11-29 at 18.59.14 (2)_1764442956796.webp";
import pheran2 from "@assets/IMG_4175_1764442607509.webp";
import pheran3 from "@assets/image_1764845398156.webp";
import maroonVelvet from "@assets/image_1764846231975.webp";

// New Tilla Pherans
import tillaBlack from "@assets/image_1764846223659.webp";
import tillaBlue from "@assets/image_1764846340788.webp";
import tillaGreen from "@assets/image_1764847584593.webp";

// New Gulrukh Pherans
import noorahBlackRed from "@assets/image_1764847929971.webp";
import noorahNavyPink from "@assets/image_1764847945686.webp";
import noorahMaroonYellow from "@assets/image_1764847984894.webp";
import noorahBlackYellow from "@assets/image_1764848014557.webp";

export interface Product {
  id: string;
  brand: string; // Koh-e-Noor, Gulrukh, Gulnar
  name: string; // e.g. "Maroon Koh-e-Noor"
  color: string;
  type: "tilla-pheran" | "woolen-aari" | "shawls" | "pashmina-shawls" | "pashmina-unstitched";
  description: string;
  longDescription: string;
  price: string;
  image: string;
  details: {
    material: string;
    embroidery: string;
    care: string;
  }
}

export const products: Product[] = [
  {
    id: "black-koh-e-noor",
    brand: "Koh-e-Noor",
    name: "Black Koh-e-Noor",
    color: "Black",
    type: "tilla-pheran",
    description: "Luxurious Black Pheran with Copper Tilla",
    longDescription: "A masterpiece of craftsmanship, this Black Koh-e-Noor Pheran features the finest fabric adorned with traditional silver Tilla embroidery. A symbol of royalty and elegance.",
    price: "$135",
    image: tillaBlack,
    details: {
      material: "Premium Fabric",
      embroidery: "Copper/Gold Tilla Work",
      care: "Dry Clean Only"
    }
  },
  {
    id: "royal-blue-koh-e-noor",
    brand: "Koh-e-Noor",
    name: "Royal Blue Koh-e-Noor",
    color: "Royal Blue",
    type: "tilla-pheran",
    description: "Regal Blue Pheran with Gold Tilla",
    longDescription: "Step into elegance with the Royal Blue Koh-e-Noor. The deep blue fabric provides the perfect canvas for the intricate gold Tilla motifs, creating a look of pure royalty.",
    price: "$130",
    image: tillaBlue,
    details: {
      material: "Premium Fabric",
      embroidery: "Gold Tilla Work",
      care: "Dry Clean Only"
    }
  },
  {
    id: "alpine-green-koh-e-noor",
    brand: "Koh-e-Noor",
    name: "Alpine Green Koh-e-Noor",
    color: "Alpine Green",
    type: "tilla-pheran",
    description: "Rich Alpine Green Pheran with Silver Tilla",
    longDescription: "The Alpine Green Koh-e-Noor captures the essence of Kashmir's lush landscapes. Featuring deep green fabric with delicate silver Tilla embroidery.",
    price: "$125",
    image: tillaGreen,
    details: {
      material: "Premium Fabric",
      embroidery: "Silver Tilla Work",
      care: "Dry Clean Only"
    }
  },
  {
    id: "violet-noorah",
    brand: "Gulrukh",
    name: "Violet Gulrukh",
    color: "Violet",
    type: "woolen-aari",
    description: "Lightweight Wool Pheran with Aari embroidery",
    longDescription: "The Violet Gulrukh brings the warmth of fine wool together with the vibrancy of Aari embroidery. Perfect for the modern connoisseur of Kashmiri art.",
    price: "$145",
    image: pheran2,
    details: {
      material: "Fine Wool",
      embroidery: "Vibrant Aari Work",
      care: "Dry Clean Recommended"
    }
  },
  {
    id: "crimson-black-noorah",
    brand: "Gulrukh",
    name: "Crimson Black Gulrukh",
    color: "Black with Crimson",
    type: "woolen-aari",
    description: "Elegant Black Wool with Crimson Aari",
    longDescription: "A striking contrast of crimson Aari embroidery on a classic black woolen base. This Gulrukh Pheran brings a bold statement to winter elegance.",
    price: "$145",
    image: noorahBlackRed,
    details: {
      material: "Fine Wool",
      embroidery: "Crimson Aari Work",
      care: "Dry Clean Recommended"
    }
  },
  {
    id: "midnight-pink-noorah",
    brand: "Gulrukh",
    name: "Midnight Pink Gulrukh",
    color: "Navy with Pink",
    type: "woolen-aari",
    description: "Deep Navy Wool with Pink Aari",
    longDescription: "The Midnight Pink Gulrukh features delicate pink Aari motifs on deep navy wool, creating a harmonious blend of traditional artistry and modern style.",
    price: "$145",
    image: noorahNavyPink,
    details: {
      material: "Fine Wool",
      embroidery: "Pink Aari Work",
      care: "Dry Clean Recommended"
    }
  },
  {
    id: "golden-maroon-noorah",
    brand: "Gulrukh",
    name: "Golden Maroon Gulrukh",
    color: "Maroon with Gold",
    type: "woolen-aari",
    description: "Rich Maroon Wool with Golden Aari",
    longDescription: "Warmth meets luxury in the Golden Maroon Gulrukh. Rich maroon wool serves as the perfect canvas for intricate golden Aari embroidery.",
    price: "$145",
    image: noorahMaroonYellow,
    details: {
      material: "Fine Wool",
      embroidery: "Golden Aari Work",
      care: "Dry Clean Recommended"
    }
  },
  {
    id: "sunshine-black-noorah",
    brand: "Gulrukh",
    name: "Sunshine Black Gulrukh",
    color: "Black with Gold",
    type: "woolen-aari",
    description: "Classic Black Wool with Bright Gold Aari",
    longDescription: "Illuminate your winter wardrobe with the Sunshine Black Gulrukh. Bright golden Aari patterns dance across premium black wool for a radiant look.",
    price: "$145",
    image: noorahBlackYellow,
    details: {
      material: "Fine Wool",
      embroidery: "Golden Aari Work",
      care: "Dry Clean Recommended"
    }
  },
  {
    id: "azure-gulnar",
    brand: "Gulnar",
    name: "Azure Gulnar",
    color: "Azure",
    type: "shawls",
    description: "Exquisite Kashmiri Shawl",
    longDescription: "Wrap yourself in the luxury of a Gulnar Shawl. Woven with the softest threads and embellished with delicate motifs, it is a warm embrace of tradition.",
    price: "$110",
    image: pheran3,
    details: {
      material: "Pashmina Blend",
      embroidery: "Needle Work",
      care: "Dry Clean Only"
    }
  }
];
