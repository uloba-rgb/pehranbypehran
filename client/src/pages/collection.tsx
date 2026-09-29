import { useRoute, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { useProducts } from "@/lib/api";
import { useEffect } from "react";
import heroBg from "@assets/generated_images/subtle_kashmiri_embroidery_background_pattern_in_deep_red_and_gold.webp";

const CATEGORIES = {
  "tilla-pheran": {
    title: "Tilla Pheran",
    brand: "Koh-e-Noor",
    description: "Premium Pherans featuring intricate Tilla embroidery and traditional craftsmanship."
  },
  "woolen-aari": {
    title: "Woolen Aari",
    brand: "Gulrukh",
    description: "Lightweight Pherans showcasing vibrant Aari needlework on fine wool."
  },
  "shawls": {
    title: "Woolen Aari Elite",
    brand: "Gulnar",
    description: "Premium Woolen Aari Pherans with exquisite embroidery and finest craftsmanship."
  },
  "pashmina-shawls": {
    title: "Pashmina Shawls",
    brand: "Pashmina",
    description: "Luxurious handwoven Pashmina shawls, the finest in Kashmiri craftsmanship."
  },
  "pashmina-unstitched": {
    title: "Pashmina Unstitched",
    brand: "Pashmina",
    description: "Premium unstitched Pashmina fabric for custom tailoring."
  }
};

export default function Collection() {
  const [, params] = useRoute("/collection/:type");
  const type = params?.type as keyof typeof CATEGORIES;
  const category = CATEGORIES[type];
  
  const { data: allProducts, isLoading, error } = useProducts();
  const categoryProducts = allProducts?.filter(p => p.type === type) || [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-[#f3d9b0]">
        <div className="text-center">
          <h1 className="text-2xl font-serif mb-4">Collection Not Found</h1>
          <Link href="/" className="text-secondary hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  if (isLoading || !allProducts) {
    return (
      <div className="min-h-screen bg-background text-foreground selection:bg-secondary selection:text-black pt-24 px-6 pb-12 relative">
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <motion.img 
            src={heroBg} 
            alt="Kashmiri Pattern Background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-background/70 mix-blend-multiply" />
        </div>
        <div className="container mx-auto relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-[#f3d9b0]/60 hover:text-secondary mb-12 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <motion.div className="text-center mb-16">
            <h2 className="text-secondary text-sm uppercase tracking-[0.3em] mb-4">{category.brand}</h2>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#f3d9b0] mb-6">{category.title}</h1>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8" />
            <p className="text-[#f3d9b0]/70 max-w-2xl mx-auto text-lg font-light">
              {category.description}
            </p>
          </motion.div>
          <div className="text-center text-[#f3d9b0]/60">
            <p>Loading products...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-secondary selection:text-black pt-24 px-6 pb-12 relative">
      {/* Full Page Background Pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <img 
          src={heroBg} 
          alt="Kashmiri Pattern Background" 
          className="w-full h-full object-cover opacity-60"
          loading="eager"
        />
        <div className="absolute inset-0 bg-background/70 mix-blend-multiply" />
      </div>

      <div className="container mx-auto relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-[#f3d9b0]/60 hover:text-secondary mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-secondary text-sm uppercase tracking-[0.3em] mb-4">{category.brand}</h2>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#f3d9b0] mb-6">{category.title}</h1>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8" />
          <p className="text-[#f3d9b0]/70 max-w-2xl mx-auto text-lg font-light">
            {category.description}
          </p>
        </motion.div>

        {error && (
          <div className="text-center text-red-400 mb-8">
            <p>Error loading products. Please refresh the page.</p>
          </div>
        )}
        
        {categoryProducts.length === 0 && !isLoading && !error && (
          <div className="text-center text-[#f3d9b0]/60 mb-8">
            <p>No products found in this collection.</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {categoryProducts.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`} data-testid={`product-card-${product.id}`}>
              <div className="group cursor-pointer">
                <div className="relative aspect-[3/4] mb-6 overflow-hidden rounded-sm bg-black/20">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 text-white border border-white px-6 py-3 uppercase tracking-widest text-sm font-bold transition-opacity duration-300">
                      View Details
                    </span>
                  </div>
                  {product.isSoldOut && (
                    <div className="absolute top-3 right-3 bg-[#99170e] text-white px-3 py-1.5 text-xs font-bold uppercase tracking-widest rounded-sm shadow-lg">
                      Sold Out
                    </div>
                  )}
                </div>
                <div className="space-y-2 text-center">
                  <p className="text-[#f3d9b0]/80 text-sm uppercase tracking-widest font-light">{product.color}</p>
                  <h3 className="text-2xl font-serif font-medium text-[#f3d9b0]">{product.brand}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
