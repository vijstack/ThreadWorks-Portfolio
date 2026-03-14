"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ZoomIn, X } from "lucide-react";

// The generated images are assumed to be copied to /images/gallery/
const galleryItems = [
  {
    id: 1,
    image: "/images/gallery/club_merch_1773510932918.png",
    category: "Club Merchandise",
    description: "Custom cotton T-shirts printed for university clubs.",
    width: 600,
    height: 800,
  },
  {
    id: 2,
    image: "/images/gallery/company_teams_1773510948534.png",
    category: "Company Teams",
    description: "Branded T-shirts for employees and corporate events.",
    width: 800,
    height: 600,
  },
  {
    id: 3,
    image: "/images/gallery/sports_teams_1773510967442.png",
    category: "Sports Teams",
    description: "Lightweight polyester shirts for team uniforms.",
    width: 600,
    height: 800,
  },
  {
    id: 4,
    image: "/images/gallery/community_events_1773510985105.png",
    category: "Community Events",
    description: "Bulk printed shirts for community meetups and festivals.",
    width: 800,
    height: 600,
  },
  {
    id: 5,
    image: "/images/gallery/startup_branding_1773511001435.png",
    category: "Startup Branding",
    description: "Custom logo T-shirts for startup teams.",
    width: 600,
    height: 600,
  },
  {
    id: 6,
    image: "/images/gallery/event_merch_1773511018959.png",
    category: "Event Merchandise",
    description: "Event merchandise for conferences and hackathons.",
    width: 800,
    height: 800,
  },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  // Split items into 3 columns for desktop, 2 for tablet
  const col1 = [galleryItems[0], galleryItems[3]];
  const col2 = [galleryItems[1], galleryItems[4]];
  const col3 = [galleryItems[2], galleryItems[5]];

  const GalleryCard = ({ item }: { item: typeof galleryItems[0] }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="group relative rounded-2xl overflow-hidden bg-secondary-100 dark:bg-slate-800 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 w-full mb-6 lg:mb-8"
      onClick={() => setSelectedImage(item)}
    >
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: item.width / item.height }}>
        <Image
          src={item.image}
          alt={item.category}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold rounded-full mb-3 shadow-sm">
              {item.category}
            </span>
            <p className="text-white text-sm leading-relaxed mb-4 opacity-90">
              {item.description}
            </p>
            <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
              <ZoomIn className="w-4 h-4" />
              <span>View Larger</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-100/50 dark:bg-secondary-800/30 border border-secondary-200/50 dark:border-secondary-700/50 text-secondary-800 dark:text-secondary-300 font-medium mb-6 tracking-wide uppercase text-xs">
            Gallery
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Custom Apparel Made for Groups
          </h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-400">
            Explore examples of bulk custom T-shirts created for clubs,
            companies, events, and communities.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="flex flex-col md:flex-row gap-6 lg:gap-8">
          {/* Column 1 */}
          <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col">
            {col1.map((item) => (
              <GalleryCard key={item.id} item={item} />
            ))}
          </div>
          
          {/* Column 2 */}
          <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col">
            {col2.map((item) => (
              <GalleryCard key={item.id} item={item} />
            ))}
          </div>
          
          {/* Column 3 (Hidden on Tablet, shown on Desktop) */}
          <div className="w-full lg:w-1/3 hidden lg:flex flex-col">
            {col3.map((item) => (
              <GalleryCard key={item.id} item={item} />
            ))}
          </div>
          
          {/* Tablet mapping for column 3 items to keep all 6 items visible on md */}
          <div className="w-full completely-hidden-hack md:flex lg:hidden flex-col md:w-1/2">
               {col3.map((item) => (
                   <div key={item.id} className="md:hidden">
                       {/* This is a hack, usually a real masonry library is better. We will just append col3 items to col1 and col2 on tablet for a pure CSS approach if needed, or hide if we don't care. Since we want all 6, let's just render them. */}
                   </div>
               ))}
          </div>
        </div>
        
        {/* Mobile/Tablet Fallback for Col 3 items so they aren't lost */}
        <div className="flex md:hidden flex-col mt-[-24px]"> 
             {col3.map((item) => (
              <GalleryCard key={item.id} item={item} />
            ))}
        </div>
        <div className="hidden md:flex lg:hidden gap-6 mt-[-24px]">
             <div className="w-1/2">
                <GalleryCard item={col3[0]} />
             </div>
             <div className="w-1/2">
                 <GalleryCard item={col3[1]} />
             </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/95 backdrop-blur-md"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </motion.button>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl bg-black flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
               <div className="relative w-full" style={{ aspectRatio: selectedImage.width / selectedImage.height, maxHeight: '80vh' }}>
                  <Image
                    src={selectedImage.image}
                    alt={selectedImage.category}
                    fill
                    className="object-contain"
                  />
               </div>
               <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/95 via-black/80 to-transparent p-6 pt-16 text-center pointer-events-none">
                 <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold rounded-full mb-3 shadow-sm">
                    {selectedImage.category}
                  </span>
                  <p className="text-white/90 text-sm lg:text-base max-w-xl mx-auto">
                    {selectedImage.description}
                  </p>
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
