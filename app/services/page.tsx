"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Code, Smartphone, Search, BarChart3, PenTool, Mouse } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    id: "website-development",
    title: "Website Development",
    icon: <Code className="h-6 w-6" />,
    description: "Custom websites built with cutting-edge technologies to establish your online presence.",
    fullDescription: "Our website development services provide end-to-end solutions for businesses of all sizes. We create responsive, high-performance websites that deliver exceptional user experiences and drive business growth.",
    features: [
      "Custom web application development",
      "Responsive design for all devices",
      "E-commerce website development",
      "Content management systems",
      "Website maintenance and support",
      "Performance optimization"
    ],
    technologies: ["React", "Next.js", "Angular", "Vue", "WordPress", "Shopify", "WooCommerce"],
    image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "app-development",
    title: "App Development",
    icon: <Smartphone className="h-6 w-6" />,
    description: "Native and cross-platform mobile applications for iOS and Android.",
    fullDescription: "Our expert app developers create intuitive and engaging mobile applications that solve real-world problems. From concept to launch, we handle every aspect of app development to deliver a seamless user experience.",
    features: [
      "Native iOS and Android apps",
      "Cross-platform development",
      "UI/UX design for mobile",
      "API integration",
      "App testing and quality assurance",
      "App store submission"
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "AWS Amplify"],
    image: "https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "seo-marketing",
    title: "SEO & Digital Marketing",
    icon: <Search className="h-6 w-6" />,
    description: "Boost your online visibility and drive targeted traffic to your business.",
    fullDescription: "Our comprehensive SEO and digital marketing strategies help you rise above the competition and connect with your target audience. We focus on driving measurable results that impact your bottom line.",
    features: [
      "Search engine optimization",
      "Content marketing",
      "Social media management",
      "PPC advertising",
      "Email marketing campaigns",
      "Analytics and reporting"
    ],
    technologies: ["Google Analytics", "SEMrush", "Ahrefs", "Mailchimp", "HubSpot", "Facebook Ads", "Google Ads"],
    image: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    icon: <BarChart3 className="h-6 w-6" />,
    description: "Transform your data into actionable insights and strategic business decisions.",
    fullDescription: "Our data analytics services help you harness the power of your data to make informed business decisions. We build custom dashboards and reports that provide clear insights into your operations and customer behavior.",
    features: [
      "Business intelligence solutions",
      "Data visualization and dashboards",
      "Predictive analytics",
      "Data warehousing",
      "Machine learning integration",
      "Custom reporting systems"
    ],
    technologies: ["Tableau", "Power BI", "Python", "R", "SQL", "TensorFlow", "Big Query"],
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "logo-design",
    title: "Logo Design",
    icon: <PenTool className="h-6 w-6" />,
    description: "Create a memorable brand identity with our professional logo design services.",
    fullDescription: "Our creative team designs distinctive logos that capture your brand's essence and resonate with your audience. We focus on creating timeless designs that work across all mediums and platforms.",
    features: [
      "Logo concept development",
      "Brand identity design",
      "Logo variations",
      "Brand guidelines",
      "Brand collateral design",
      "Logo animation"
    ],
    technologies: ["Adobe Illustrator", "Adobe Photoshop", "Figma", "Sketch", "After Effects"],
    image: "https://images.pexels.com/photos/6956/snow-trees-forest-winter.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "web-design",
    title: "Web Design",
    icon: <Mouse className="h-6 w-6" />,
    description: "User-centric designs that engage visitors and convert them into customers.",
    fullDescription: "Our web design services focus on creating visually stunning and highly functional websites that provide exceptional user experiences. We blend aesthetics with usability to create designs that convert visitors into customers.",
    features: [
      "UI/UX design",
      "Wireframing and prototyping",
      "Responsive design",
      "Interactive elements",
      "Visual identity integration",
      "User testing and optimization"
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "HTML/CSS", "JavaScript"],
    image: "https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

export default function ServicesPage() {
  const searchParams = useSearchParams();
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  
  useEffect(() => {
    const serviceParam = searchParams?.get('service');
    if (serviceParam) {
      setSelectedService(serviceParam);
    }
  }, [searchParams]);
  
  const serviceOptions = services.map(service => ({
    value: service.id,
    label: service.title
  }));
  
  const selectedServiceData = services.find(service => service.id === selectedService);
  
  return (
    <main className="flex min-h-screen flex-col pt-24">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-8 bg-gradient-to-r from-primary/10 to-transparent  bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 text-white">
              We offer comprehensive IT and digital solutions tailored to your business needs. Explore our services and discover how we can help you achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Services Navigation & Tabs */}
      <section className="py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <Tabs 
            defaultValue={selectedService || "website-development"}
            value={selectedService || "website-development"}
            onValueChange={(value) => setSelectedService(value)}
            className="space-y-12"
          >
            <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 h-auto gap-4 bg-transparent">
              {services.map((service) => (
                <TabsTrigger 
                  key={service.id} 
                  value={service.id}
                  className="py-3 px-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <div className="flex flex-col items-center text-center gap-2">
                    <div className="text-primary data-[state=active]:text-primary-foreground">
                      {service.icon}
                    </div>
                    <span className="text-sm line-clamp-1">{service.title}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
            
            {services.map((service) => (
              <TabsContent key={service.id} value={service.id} className="mt-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
                >
                  <div>
                    <h2 className="text-3xl font-bold mb-6">{service.title}</h2>
                    <p className="text-lg mb-8">{service.fullDescription}</p>
                    
                    <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                    <ul className="space-y-2 mb-8">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <div className="mr-3 mt-1 text-primary">
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <h3 className="text-xl font-semibold mb-4">Technologies</h3>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {service.technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="mt-8">
                      <Button 
                        onClick={() => setShowQuoteForm(!showQuoteForm)} 
                        size="lg"
                        className="flex items-center"
                      >
                        Get a Quote <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${showQuoteForm ? 'rotate-180' : ''}`} />
                      </Button>
                    </div>
                  </div>
                  
                  <div>
                    <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden mb-8">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    {showQuoteForm && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3 }}
                        className="bg-card border rounded-lg p-6"
                      >
                        <h3 className="text-xl font-semibold mb-6">Request a Quote</h3>
                        <ContactForm 
                          selectedService={service.id}
                          serviceOptions={serviceOptions}
                        />
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 px-4 sm:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              We follow a structured approach to every project, ensuring quality, efficiency, and client satisfaction at every step.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We begin by understanding your business needs, objectives, and target audience through in-depth consultations."
              },
              {
                step: "02",
                title: "Planning",
                description: "We develop a comprehensive project plan, defining scope, timeline, deliverables, and technical requirements."
              },
              {
                step: "03",
                title: "Development",
                description: "Our team executes the plan using agile methodologies, with regular updates and client feedback sessions."
              },
              {
                step: "04",
                title: "Delivery",
                description: "We launch your solution, provide training, and offer ongoing support to ensure long-term success."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background p-8 rounded-lg shadow-sm relative"
              >
                <div className="text-5xl font-bold text-primary/10 absolute -top-2 right-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3 relative z-10">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQs Section */}
      <section className="py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Get answers to common questions about our services and processes.
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How long does it typically take to complete a project?",
                answer: "Project timelines vary based on complexity and scope. A simple website might take 4-6 weeks, while a comprehensive web application could take 3-6 months. During our initial consultation, we'll provide a detailed timeline specific to your project."
              },
              {
                question: "What is your pricing structure?",
                answer: "We offer flexible pricing models including fixed-price quotes, hourly rates, and retainer options. Our pricing is transparent and based on project requirements, complexity, and timeline. Contact us for a personalized quote."
              },
              {
                question: "Do you provide ongoing support after project completion?",
                answer: "Yes, we offer various support and maintenance packages to ensure your digital products remain secure, updated, and performing optimally. These can be tailored to your specific needs and budget."
              },
              {
                question: "Can you work with our existing systems and technologies?",
                answer: "Absolutely. We have experience integrating with a wide range of existing systems and technologies. Our team will assess your current setup and develop solutions that seamlessly integrate with your infrastructure."
              },
              {
                question: "How do you ensure the security of our data?",
                answer: "Security is paramount in all our development processes. We implement industry best practices for data protection, including encrypted communications, secure authentication systems, regular security audits, and compliance with relevant data protection regulations."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="max-w-2xl mx-auto mb-8 opacity-90">
              Contact us today to discuss your project and discover how our services can help your business grow.
            </p>
            <Button asChild variant="secondary" size="lg">
              <Link href="/connect">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}