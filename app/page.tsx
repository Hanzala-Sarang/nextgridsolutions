"use client";

import Link from "next/link";
import { ArrowRight, Code, Smartphone, Search, BarChart3, PenTool, Mouse, Zap } from "lucide-react";
import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import GiveawayModal from "@/components/GiveawayModal";
// import TestimonialCard from "@/components/TestimonialCard";

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const services = [
    { 
      title: "Website Development", 
      icon: <Code className="h-6 w-6" />,
      description: "Custom websites built with cutting-edge technologies to establish your online presence.",
      link: "/services?service=website-development"
    },
    { 
      title: "App Development", 
      icon: <Smartphone className="h-6 w-6" />,
      description: "Native and cross-platform mobile applications for iOS and Android.",
      link: "/services?service=app-development"
    },
    { 
      title: "SEO & Digital Marketing", 
      icon: <Search className="h-6 w-6" />,
      description: "Boost your online visibility and drive targeted traffic to your business.",
      link: "/services?service=seo-marketing"
    },
    { 
      title: "Data Analytics", 
      icon: <BarChart3 className="h-6 w-6" />,
      description: "Transform your data into actionable insights and strategic business decisions.",
      link: "/services?service=data-analytics"
    },
    { 
      title: "Logo Design", 
      icon: <PenTool className="h-6 w-6" />,
      description: "Create a memorable brand identity with our professional logo design services.",
      link: "/services?service=logo-design"
    },
    { 
      title: "Web Design", 
      icon: <Mouse className="h-6 w-6" />,
      description: "User-centric designs that engage visitors and convert them into customers.",
      link: "/services?service=web-design"
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      content: "NextGrid Solutions transformed our outdated website into a modern, user-friendly platform that perfectly represents our brand. The team was responsive and delivered beyond our expectations.",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Michael Chen",
      company: "Innovate Labs",
      content: "The mobile app developed by NextGrid Solutions has significantly improved our customer engagement. Their attention to detail and technical expertise is unmatched in the industry.",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Emily Roberts",
      company: "Growth Marketing",
      content: "Their SEO strategies helped us achieve a 200% increase in organic traffic within just three months. NextGrid Solutions genuinely cares about their clients' success.",
      image: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  return (
    <main className="flex min-h-screen flex-col">
      <GiveawayModal />            
      <Hero 
        title={<>Transforming Ideas into <span className="text-primary">Digital Reality</span></>}
        subtitle="We build innovative solutions for businesses looking to thrive in the digital landscape."
        ctaText="Explore Services"
        ctaLink="/services"
        secondaryCtaText="Contact Us"
        secondaryCtaLink="/connect"
        imageSrc="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      
      {/* Services Section */}
      <section className="py-20 px-4 sm:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer comprehensive digital solutions to help your business grow and succeed in the competitive market.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.5, delay: index * 0.1 }
                  }
                }}
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  link={service.link}
                />
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/services" className="flex items-center gap-2">
                View All Services <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose NextGrid Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We combine technical expertise with creative vision to deliver solutions that drive results.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-primary/10 rounded-full p-4 inline-flex mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovative Solutions</h3>
              <p className="text-muted-foreground">
                We stay ahead of industry trends to provide cutting-edge digital solutions.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-primary/10 rounded-full p-4 inline-flex mb-4">
                <PenTool className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Creative Excellence</h3>
              <p className="text-muted-foreground">
                Our team of designers create visually stunning and functional experiences.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-primary/10 rounded-full p-4 inline-flex mb-4">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Results-Driven</h3>
              <p className="text-muted-foreground">
                We focus on delivering measurable outcomes that impact your bottom line.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section
      <section className="py-20 px-4 sm:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TestimonialCard
                  name={testimonial.name}
                  company={testimonial.company}
                  content={testimonial.content}
                  image={testimonial.image}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
      
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-8 bg-primary text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Digital Presence?</h2>
            <p className="max-w-2xl mx-auto mb-8 opacity-90">
              Take the first step towards digital excellence. Contact us today to discuss your project.
            </p>
            <Button asChild variant="secondary" size="lg">
              <Link href="/connect" className="flex items-center gap-2">
                Let's Connect <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}