"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, Users, Trophy, Zap, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function AboutPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const stats = [
    { 
      icon: <Clock className="h-6 w-6 text-primary" />,
      value: "10+",
      label: "Years of Experience" 
    },
    { 
      icon: <Users className="h-6 w-6 text-primary" />,
      value: "200+",
      label: "Clients Served" 
    },
    { 
      icon: <Trophy className="h-6 w-6 text-primary" />,
      value: "50+",
      label: "Industry Awards" 
    },
    { 
      icon: <Zap className="h-6 w-6 text-primary" />,
      value: "500+",
      label: "Projects Completed" 
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We continuously explore new technologies and methodologies to bring cutting-edge solutions to our clients."
    },
    {
      title: "Excellence",
      description: "We are committed to delivering the highest quality work that exceeds client expectations and industry standards."
    },
    {
      title: "Integrity",
      description: "We operate with transparency, honesty, and ethical practices in all our client interactions and business operations."
    },
    {
      title: "Collaboration",
      description: "We work closely with our clients as partners, ensuring their vision and goals remain at the center of every project."
    }
  ];

  const team = [
    {
      name: "Alex Johnson",
      position: "CEO & Founder",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "With over 15 years of experience in the tech industry, Alex leads our company with vision and expertise in digital transformation."
    },
    {
      name: "Sarah Williams",
      position: "Chief Technology Officer",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "Sarah brings 12+ years of experience in software development and oversees all technical aspects of our client projects."
    },
    {
      name: "Michael Chen",
      position: "Design Director",
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "Michael leads our creative team with his exceptional eye for design and 10+ years of experience in UX/UI design."
    },
    {
      name: "Rebecca Torres",
      position: "Marketing Strategist",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "Rebecca specializes in digital marketing strategies that help our clients achieve maximum visibility and engagement."
    }
  ];

  return (
    <main className="flex min-h-screen flex-col pt-24">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent z-0"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Who We Are
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                At NextGrid Solutions, we're passionate about leveraging technology to solve complex business challenges and drive digital transformation.
              </p>
              <p className="mb-6">
                our team of dedicated professionals combines technical expertise with creative vision to deliver exceptional digital experiences and IT solutions for businesses of all sizes.
              </p>
              <p>
                Our mission is to empower organizations through innovative technology solutions that enhance efficiency, drive growth, and create meaningful connections with their audiences.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative h-96 md:h-[500px] rounded-lg overflow-hidden"
            >
              <Image
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="NextGrid Solutions Team"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Stats Section
      <section className="py-16 px-4 sm:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-background rounded-lg shadow-sm"
              >
                <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
      
      {/* Our Story Section */}
      <section className="py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              From our humble beginnings to becoming a leading IT services provider, our journey has been defined by innovation and excellence.
            </p>
          </motion.div>
          
          <div className="space-y-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-semibold mb-4">The Beginning</h3>
                <p className="mb-4">
                  NextGrid Solutions was founded by a team of tech enthusiasts with a shared vision of helping businesses harness the power of digital technology. What started as a small web development agency quickly expanded as we gained recognition for our innovative approaches and commitment to client success.
                </p>
                <p>
                  Our founders recognized a gap in the market for tech solutions that were both cutting-edge and accessible to businesses of all sizes. This insight became the foundation of our company's mission and values.
                </p>
              </div>
              <div className="order-1 lg:order-2 relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/3182765/pexels-photo-3182765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="NextGrid Solutions founding"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="NextGrid Solutions growth"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Growth & Expansion</h3>
                <p className="mb-4">
                  We had expanded our services beyond web development to include app development, digital marketing, and data analytics. This growth allowed us to serve clients across various industries, from startups to enterprise-level organizations.
                </p>
                <p>
                  Our each bringing unique expertise and perspective to our projects. We opened offices in multiple cities and established partnerships with leading technology providers to enhance our service offerings.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-semibold mb-4">Today & Tomorrow</h3>
                <p className="mb-4">
                  Today, NextGrid Solutions stands as a trusted partner for businesses seeking comprehensive IT solutions. We've worked with over clients across diverse sectors, helping them navigate the complexities of digital transformation.
                </p>
                <p>
                  Looking to the future, we remain committed to innovation and excellence. We're investing in emerging technologies like AI, blockchain, and IoT to provide our clients with solutions that not only meet their current needs but also prepare them for future opportunities and challenges.
                </p>
              </div>
              <div className="order-1 lg:order-2 relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="NextGrid Solutions today"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="py-20 px-4 sm:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Our core values guide everything we do, from how we develop solutions to how we interact with clients and each other.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background p-8 rounded-lg shadow-sm"
              >
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Team Section
      <section className="py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Leadership</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Our diverse team of experts brings together years of experience and a passion for innovation.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background rounded-lg overflow-hidden shadow-sm"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary mb-4">{member.position}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work With Us?</h2>
            <p className="max-w-2xl mx-auto mb-8 opacity-90">
              Let's collaborate to bring your digital vision to life with innovative solutions tailored to your needs.
            </p>
            <Button asChild variant="secondary" size="lg">
              <Link href="/connect">Get in Touch</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}