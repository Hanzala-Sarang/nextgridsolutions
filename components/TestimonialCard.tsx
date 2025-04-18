"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  name: string;
  company: string;
  content: string;
  image: string;
}

export default function TestimonialCard({ name, company, content, image }: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="h-full flex flex-col overflow-hidden">
        <CardContent className="pt-6 flex-grow">
          <div className="mb-4">
            <svg
              className="h-6 w-6 text-primary"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <p className="text-foreground/80 mb-4">{content}</p>
        </CardContent>
        <CardFooter className="border-t pt-4">
          <div className="flex items-center">
            <div className="relative h-10 w-10 overflow-hidden rounded-full mr-3">
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-medium">{name}</p>
              <p className="text-sm text-muted-foreground">{company}</p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}