"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroProps {
  title: React.ReactNode;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  imageSrc: string;
}

export default function Hero({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  imageSrc
}: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 px-4 sm:px-8 overflow-hidden">
      {/* Background overlay/gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background/80 z-10"></div>
      
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt="Hero background"
          fill
          className="object-cover opacity-20 dark:opacity-10"
          priority
        />
      </div>
      
      <div className="max-w-7xl mx-auto w-full z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {title}
            </motion.h1>
            
            <motion.p 
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {subtitle}
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button asChild size="lg">
                <Link href={ctaLink}>{ctaText}</Link>
              </Button>
              
              {secondaryCtaText && secondaryCtaLink && (
                <Button asChild variant="outline" size="lg">
                  <Link href={secondaryCtaLink}>{secondaryCtaText}</Link>
                </Button>
              )}
            </motion.div>
          </motion.div>

          {/* Floating graphics/illustrations - could be added here for visual appeal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative w-full aspect-square max-w-lg">
              {/* Animated elements could be added here */}
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full filter blur-xl animate-pulse"></div>
              <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-blue-500/20 rounded-full filter blur-xl animate-pulse" style={{ animationDelay: "1s" }}></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}