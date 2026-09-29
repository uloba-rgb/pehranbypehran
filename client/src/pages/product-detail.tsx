import { useRoute, Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, MessageCircle, Star, Plus, X } from "lucide-react";
import { useProduct, useProductReviews, useCreateReview, productGalleryImages } from "@/lib/api";
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function ProductDetail() {
  const [, params] = useRoute("/product/:id");
  const productId = params?.id || "";
  
  const { data: product, isLoading: productLoading } = useProduct(productId);
  const { data: reviews = [], isLoading: reviewsLoading } = useProductReviews(productId);
  const createReview = useCreateReview();
  
  const [currentReview, setCurrentReview] = useState(0);
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [newReview, setNewReview] = useState({ name: "", text: "", rating: 5 });
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  // Get gallery images for this product
  const galleryImages = productGalleryImages[productId] || (product ? [product.image] : []);

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!product) return;
    
    try {
      // We need the database product ID, not the productId string
      // Fetch it from the backend
      const response = await fetch(`/api/products/${productId}`);
      const dbProduct = await response.json();
      
      await createReview.mutateAsync({
        productId: dbProduct.id,
        name: newReview.name,
        text: newReview.text,
        rating: newReview.rating,
      });
      
      setIsReviewOpen(false);
      setNewReview({ name: "", text: "", rating: 5 });
      setCurrentReview(0);
      toast.success("Review submitted successfully!");
    } catch (error) {
      toast.error("Failed to submit review. Please try again.");
    }
  };

  useEffect(() => {
    if (reviews.length > 0) {
      const timer = setInterval(() => {
        setCurrentReview((prev) => (prev + 1) % reviews.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [reviews.length]);

  const whatsappNumber = "923157390289";

  const handleWhatsAppOrder = () => {
    if (!product) return;
    const message = `Hi, I would like to order the ${product.name}.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params?.id]);

  if (productLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-[#f3d9b0]">
        <div className="text-center">
          <p>Loading product...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-[#f3d9b0]">
        <div className="text-center">
          <h1 className="text-2xl font-serif mb-4">Product Not Found</h1>
          <Link href="/" className="text-secondary hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-secondary selection:text-black pt-24 pb-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <Link href="/" className="inline-flex items-center gap-2 text-[#f3d9b0]/60 hover:text-secondary mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Collection
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4"
          >
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden bg-black/20">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={selectedImageIndex}
                  src={galleryImages[selectedImageIndex] || product.image} 
                  alt={product.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              {product.isSoldOut && (
                <div className="absolute top-4 right-4 bg-[#99170e] text-white px-4 py-2 text-sm font-bold uppercase tracking-widest rounded-sm shadow-lg">
                  Sold Out
                </div>
              )}
            </div>
            {galleryImages.length > 1 && (
              <div className="flex gap-3 justify-center">
                {galleryImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`relative w-16 h-20 rounded-sm overflow-hidden border-2 transition-all ${
                      selectedImageIndex === index 
                        ? 'border-secondary' 
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img 
                      src={img} 
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-secondary text-sm uppercase tracking-[0.3em] mb-4">{product.brand}</h2>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#f3d9b0] mb-6">{product.color}</h1>
            
            <p className="text-2xl text-secondary font-medium mb-4">{product.price}</p>

            {reviews.length > 0 && (
              <div className="h-20 mb-8 relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentReview}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 flex flex-col justify-center"
                  >
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(reviews[currentReview]?.rating || 5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-secondary text-secondary" />
                      ))}
                    </div>
                    <p className="text-[#f3d9b0] text-sm italic mb-1">"{reviews[currentReview]?.text}"</p>
                    <p className="text-[#f3d9b0]/60 text-xs uppercase tracking-wider">- {reviews[currentReview]?.name}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            )}

            <div className="mb-8 flex justify-center md:justify-start">
              <Dialog open={isReviewOpen} onOpenChange={setIsReviewOpen}>
                <DialogTrigger asChild>
                  <button className="text-xs uppercase tracking-widest text-[#f3d9b0]/60 hover:text-[#ffb800] transition-colors border-b border-dashed border-[#f3d9b0]/30 pb-1">
                    Write a Review
                  </button>
                </DialogTrigger>
                <DialogContent className="bg-[#1a0f0a] border-[#f3d9b0]/20 text-[#f3d9b0]">
                  <DialogHeader>
                    <DialogTitle className="font-serif text-2xl text-[#f3d9b0]">Write a Review</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleSubmitReview} className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input 
                        id="name" 
                        required
                        value={newReview.name}
                        onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                        className="bg-black/20 border-[#f3d9b0]/20 text-[#f3d9b0] focus:border-[#ffb800]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Rating</Label>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setNewReview(prev => ({...prev, rating: star}))}
                            className="focus:outline-none"
                          >
                            <Star 
                              className={`w-6 h-6 transition-colors ${
                                star <= (newReview?.rating || 5) ? "fill-[#ffb800] text-[#ffb800]" : "text-[#f3d9b0]/20"
                              }`} 
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="review">Your Review</Label>
                      <Textarea 
                        id="review" 
                        required
                        value={newReview.text}
                        onChange={(e) => setNewReview({...newReview, text: e.target.value})}
                        className="bg-black/20 border-[#f3d9b0]/20 text-[#f3d9b0] focus:border-[#ffb800]"
                        rows={4}
                      />
                    </div>
                    <Button type="submit" className="w-full bg-[#ffb800] text-black hover:bg-[#ffb800]/90 font-bold tracking-widest uppercase">
                      Submit Review
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
            
            <p className="text-[#f3d9b0]/80 text-lg leading-relaxed mb-8 font-light">
              {product.longDescription}
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10 text-sm border-y border-white/10 py-8">
              <div>
                <span className="block text-[#f3d9b0]/40 uppercase tracking-widest mb-2 text-xs">Material</span>
                <span className="text-[#f3d9b0]">{product.details.material}</span>
              </div>
              <div>
                <span className="block text-[#f3d9b0]/40 uppercase tracking-widest mb-2 text-xs">Embroidery</span>
                <span className="text-[#f3d9b0]">{product.details.embroidery}</span>
              </div>
              <div>
                <span className="block text-[#f3d9b0]/40 uppercase tracking-widest mb-2 text-xs">Care</span>
                <span className="text-[#f3d9b0]">{product.details.care}</span>
              </div>
              <div>
                <span className="block text-[#f3d9b0]/40 uppercase tracking-widest mb-2 text-xs">Authenticity</span>
                <span className="text-[#f3d9b0]">100% Handcrafted</span>
              </div>
            </div>

            <motion.button
              onClick={handleWhatsAppOrder}
              whileHover={{ scale: 1.02, backgroundColor: "#ffb800", color: "#000", borderColor: "#ffb800" }}
              whileTap={{ scale: 0.98 }}
              className="w-full md:w-auto flex items-center justify-center gap-3 border border-white/20 py-4 px-8 transition-all duration-300 uppercase text-sm tracking-widest font-bold bg-transparent text-[#f3d9b0] hover:text-black"
            >
              <MessageCircle className="w-5 h-5" /> Order on WhatsApp
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
