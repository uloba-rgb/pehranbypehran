import { Link } from "wouter";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, MessageCircle, ShoppingBag, ArrowRight, Star, Facebook } from "lucide-react";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 1 0 7.75 6.82V9.08a9.93 9.93 0 0 0 6.58 2.72V8.25a6.24 6.24 0 0 1-5.1-1.56Z" />
  </svg>
);

// Import assets
import heroBg from "@assets/generated_images/subtle_kashmiri_embroidery_background_pattern_in_deep_red_and_gold.webp";
import pheran1 from "@assets/WhatsApp Image 2025-11-29 at 18.59.14 (2)_1764442956796.webp";
import pheran2 from "@assets/IMG_4175_1764442607509.webp";
import pheran3 from "@assets/image_1764845398156.webp";
import maroonVelvet from "@assets/image_1764846231975.webp";
import logo from "@assets/Profile PEHRAN_1764229059630.webp";
import brandImage1 from "@assets/ff21aa33-a1b1-40d8-b2c7-23066aa3acbc_1766327452742.webp";
import brandImage2 from "@assets/64472979-ca03-417d-91a7-7484b408cc4f_1766327452745.webp";
import brandImage3 from "@assets/gurukh_close_up_1766327489756.webp";
import brandImage4 from "@assets/5b4caf87-61d2-4f2d-9750-c8d1a15b8ac0_1766327609494.webp";
import brandImage5 from "@assets/d8cdeb7e-d888-43d3-85e9-27a3597598c7_1766327609495.webp";
import woolenAariMain from "@assets/Noorah_Cover_1766141693483.webp";
import gulnarImage from "@assets/Noorah_green_1766234959572.webp";
import gulrukhImage from "@assets/45f98240-6bb2-400d-88f8-d18baaea520a_1766326963109.webp";
import kohENoorCover from "@assets/d589d815-0454-404f-899e-44e3a77773cd_1766261237626.webp";
import pashminaDresses from "@assets/Pashmina_Dresses_1766314957262.webp";
import pashminaShawlsCover from "@assets/304b37ec-37bc-4e1e-af40-5a45effb7f0f_1766315860577.webp";

const collections = [
  {
    id: "tilla-pheran",
    title: "Tilla Pheran",
    brand: "Koh-e-Noor",
    image: kohENoorCover,
    description: "Premium Tilla Pherans"
  },
  {
    id: "shawls",
    title: "Woolen Aari Elite",
    brand: "Gulnar",
    image: gulnarImage,
    description: "Exquisite Kashmiri Shawls"
  },
  {
    id: "woolen-aari",
    title: "Woolen Aari",
    brand: "Gulrukh",
    image: gulrukhImage,
    description: "Lightweight Wool Pherans"
  }
];

const pashminaCategories = [
  {
    id: "pashmina-shawls",
    title: "Pashmina Shawls",
    brand: "Pashmina",
    image: pashminaShawlsCover,
    description: "Luxurious handwoven Pashmina shawls"
  },
  {
    id: "pashmina-unstitched",
    title: "Pashmina Dresses",
    brand: "Pashmina",
    image: pashminaDresses,
    description: "Elegant Pashmina dresses with traditional embroidery"
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const brandImages = [brandImage1, brandImage2, brandImage3, brandImage4, brandImage5];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % brandImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-secondary selection:text-black relative">
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
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
             <img src={logo} alt="PEHRAN Logo" className="h-12 w-auto object-contain rounded-full" />
             <span className="font-serif text-xl font-bold tracking-wider text-[#f3d9b0] hidden sm:block">PEHRAN</span>
          </div>
          
          <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide uppercase">
            <a href="#collections" className="hover:text-secondary transition-colors">Collections</a>
            <a href="#about" className="hover:text-secondary transition-colors">About</a>
            <a href="#contact" className="hover:text-secondary transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-2">
          <a 
            href="https://www.instagram.com/pheranbypehran/" 
            target="_blank" 
            rel="noreferrer"
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a 
            href="#" 
            target="_blank" 
            rel="noreferrer"
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <TikTokIcon className="w-5 h-5" />
          </a>
          <a 
            href="https://www.facebook.com/Pheranbypehran" 
            target="_blank" 
            rel="noreferrer"
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <Facebook className="w-5 h-5" />
          </a>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Overlay moved to page level, keeping atmospheric effects */}
        <div className="absolute inset-0 z-0">
          {/* Atmospheric Particles */}
          <div className="absolute inset-0 pointer-events-none">
             {[...Array(20)].map((_, i) => (
               <motion.div
                 key={i}
                 className="absolute bg-secondary/30 rounded-full"
                 style={{
                   width: Math.random() * 4 + 1 + "px",
                   height: Math.random() * 4 + 1 + "px",
                   left: Math.random() * 100 + "%",
                   top: Math.random() * 100 + "%",
                 }}
                 animate={{
                   y: [0, -100],
                   opacity: [0, 1, 0],
                 }}
                 transition={{
                   duration: Math.random() * 10 + 10,
                   repeat: Infinity,
                   ease: "linear",
                   delay: Math.random() * 10,
                 }}
               />
             ))}
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <motion.div 
              className="relative flex flex-col items-center"
              initial={{ scale: 0.9, opacity: 1 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-serif font-bold uppercase text-[#f3d9b0] mt-8 tracking-[0.02em] sm:tracking-[0.05em] md:tracking-[0.15em]" 
                initial={{ opacity: 1 }}
                animate={{ 
                  textShadow: [
                    "0 0 15px rgba(255,184,0,0.3)", 
                    "0 0 30px rgba(255,184,0,0.6)", 
                    "0 0 15px rgba(255,184,0,0.3)"
                  ] 
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                PEHRAN
              </motion.h1>
              <p className="text-[50px] sm:text-[55px] md:text-[70px] text-secondary/90 text-center mt-[20px] md:mt-[50px] mb-[30px]" style={{ fontFamily: "'Reem Kufi', sans-serif", fontWeight: 500 }} dir="rtl">
                میڈ اِن کشمیر
              </p>
            </motion.div>

            {/* Removed duplicate sr-only h1 */}

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="max-w-xl mx-auto md:text-xl mb-10 text-[18px] font-semibold text-[#f3d9b0]"
            >Handcrafted with love, inspired by the mountains of Kashmir and the stories they hold. Every Pehran we create carries the scent of Kashmiri winters and the warmth of its people.</motion.p>
            <motion.a
              href="#collections"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,184,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-secondary text-black px-8 py-4 text-sm font-bold uppercase tracking-wider rounded-sm hover:bg-white transition-all duration-300 cursor-pointer"
            >
              Explore Our Collections <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </section>
      {/* Collections Section */}
      <section id="collections" className="py-24 px-6 relative z-10">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">The Collection</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6" />
            <p className="text-[#f3d9b0]/70 max-w-2xl mx-auto text-[15px]">Each piece is a masterpiece, featuring intricate embroidery passed down through generations.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {collections.map((collection, index) => (
              <Link key={collection.id} href={`/collection/${collection.id}`}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                >
                  <motion.div 
                    className="relative aspect-[3/4] mb-6 overflow-hidden rounded-sm bg-black/20"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img 
                      src={collection.image} 
                      alt={collection.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                      <span className="text-white border border-white px-8 py-3 uppercase tracking-widest text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 text-center">
                        Explore {collection.brand}
                      </span>
                    </div>
                  </motion.div>
                  <div className="space-y-2 text-center bg-[#F5F5DC]/5 p-6 rounded-sm backdrop-blur-sm border border-white/5">
                    <h3 className="text-2xl font-serif font-medium text-[#f3d9b0]">{collection.title}</h3>
                    <p className="text-secondary text-sm uppercase tracking-widest font-bold">{collection.brand}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Pashmina Section */}
      <section id="pashmina" className="py-24 px-6 relative z-10">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Pashmina</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6" />
            <p className="text-[#f3d9b0]/70 max-w-2xl mx-auto text-[15px]">The finest Kashmiri Pashmina, renowned worldwide for its warmth and elegance.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {pashminaCategories.map((category, index) => (
              <Link key={category.id} href={`/collection/${category.id}`}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                >
                  <motion.div 
                    className="relative aspect-[3/4] mb-6 overflow-hidden rounded-sm bg-black/20"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                      <span className="text-white border border-white px-8 py-3 uppercase tracking-widest text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 text-center">
                        Explore {category.title}
                      </span>
                    </div>
                  </motion.div>
                  <div className="space-y-2 text-center bg-[#F5F5DC]/5 p-6 rounded-sm backdrop-blur-sm border border-white/5">
                    <h3 className="text-2xl font-serif font-medium text-[#f3d9b0]">{category.title}</h3>
                    <p className="text-secondary text-sm uppercase tracking-widest font-bold">{category.brand}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary via-background to-background pointer-events-none" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center border border-white/10 p-8 md:p-12 bg-white/5 backdrop-blur-sm">
            {/* Text Content */}
            <div className="text-center md:text-left">
              <Star className="w-8 h-8 text-secondary mx-auto md:mx-0 mb-8 fill-secondary/20" />
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">The Art of Pheran</h2>
              <p className="text-lg md:text-xl leading-relaxed text-[#f3d9b0]/80 font-light mb-8">
                "The Pheran is not just a garment; it is a warm embrace of Kashmiri culture."
              </p>
              <p className="text-[#f3d9b0]/60 leading-relaxed mb-10">
                At PEHRAN, every stitch tells a story. Our artisans pour weeks of love into the delicate ‘Tilla’ and ‘Aari’ embroidery, using the finest wools and fabrics. When you wear a Pheran, you’re not just wearing a dress—you’re carrying centuries of Kashmiri heritage and craftsmanship close to your heart.
              </p>
              <div className="inline-flex flex-col sm:flex-row justify-center md:justify-start gap-6 text-sm font-medium uppercase tracking-widest text-secondary">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  100% Handcrafted
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  Authentic Materials
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  Global Shipping
                </span>
              </div>
            </div>

            {/* Brand Aesthetic Slideshow */}
            <div className="relative aspect-square md:aspect-[4/5] w-full overflow-hidden rounded-sm shadow-2xl border border-white/10 bg-black">
               <AnimatePresence>
                <motion.img
                  key={currentSlide}
                  src={brandImages[currentSlide]}
                  alt="PEHRAN Aesthetic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              
              {/* Decorative Overlay Frame */}
              <div className="absolute inset-4 border border-white/20 pointer-events-none z-10" />
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer id="contact" className="bg-black py-12 px-6 border-t border-white/10">
        <div className="container mx-auto flex flex-col items-center justify-center gap-6">
          <div className="flex items-center gap-3 opacity-100">
             <img src={logo} alt="PEHRAN Logo" className="h-10 w-auto object-contain rounded-full" />
             <span className="font-serif text-xl font-bold text-[#f3d9b0]">PEHRAN</span>
          </div>
          <div className="flex gap-6">
            <a href="https://www.instagram.com/pheranbypehran/" target="_blank" rel="noreferrer" className="text-[#f3d9b0] hover:text-secondary transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="text-[#f3d9b0] hover:text-secondary transition-colors">
              <TikTokIcon className="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com/Pheranbypehran" target="_blank" rel="noreferrer" className="text-[#f3d9b0] hover:text-secondary transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-[#f3d9b0] hover:text-secondary transition-colors">
              <MessageCircle className="w-6 h-6" />
            </a>
          </div>
          <p className="text-[#f3d9b0] text-sm font-light">
            © {new Date().getFullYear()} PEHRAN. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
