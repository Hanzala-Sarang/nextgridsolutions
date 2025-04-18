"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default function ConnectPage() {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Our Office",
      details: "123 Innovation Street, Tech City, CA 94103, USA"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      details: "info@nextgridsolutions.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      details: "+1 (234) 567-890"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: "Monday-Friday: 9AM-6PM EST"
    }
  ];

  const serviceOptions = [
    { value: "website-development", label: "Website Development" },
    { value: "app-development", label: "App Development" },
    { value: "seo-marketing", label: "SEO & Digital Marketing" },
    { value: "data-analytics", label: "Data Analytics" },
    { value: "logo-design", label: "Logo Design" },
    { value: "web-design", label: "Web Design" }
  ];

  return (
    <main className="flex min-h-screen flex-col pt-24">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-8 bg-gradient-to-r from-primary/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Ready to transform your digital presence? We're here to help bring your vision to life. Reach out to us to discuss your project.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Information Cards */}
      <section className="py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-6 rounded-lg border text-center"
              >
                <div className="flex justify-center items-center h-12 w-12 rounded-full bg-primary/10 text-primary mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Form and Map Section */}
      <section className="py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-card p-8 rounded-lg border"
            >
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              <ContactForm serviceOptions={serviceOptions} />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-lg overflow-hidden h-[400px] lg:h-auto"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.50764017401!3d37.75781499657866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1651234567890!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="NextGrid Solutions Office Location"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about working with us.
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "What information should I provide for a project quote?",
                answer: "To provide an accurate quote, we recommend sharing your project goals, timeline, budget range, and any specific features or requirements. The more details you can provide, the more precise our estimate will be."
              },
              {
                question: "How involved will I be in the development process?",
                answer: "We believe in collaborative development. You'll be involved throughout the project with regular updates and feedback sessions. Our process is transparent, allowing you to track progress and provide input at key milestones."
              },
              {
                question: "Do you offer ongoing maintenance and support?",
                answer: "Yes, we offer various maintenance packages to keep your digital products running smoothly. These can include regular updates, security monitoring, performance optimization, and technical support."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background p-6 rounded-lg"
              >
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-8 bg-primary text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Ready to Start Your Project?</h2>
              <p className="opacity-90">Schedule a free consultation with our experts today.</p>
            </div>
            <motion.a 
              href="mailto:info@nextgridsolutions.com"
              whileHover={{ scale: 1.05 }}
              className="bg-white text-primary px-6 py-3 rounded-lg font-medium flex items-center"
            >
              Schedule a Call <ArrowRight className="ml-2 h-4 w-4" />
            </motion.a>
          </div>
        </div>
      </section>
    </main>
  );
}