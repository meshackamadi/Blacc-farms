import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTractor, FaLeaf, FaAppleAlt, FaSeedling } from "react-icons/fa";

interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: FeatureItem[] = [
  {
    title: "Organic Farming",
    description: "100% organic practices without harmful pesticides",
    icon: <FaLeaf className="text-green text-xl" />,
  },
  {
    title: "Sustainable Methods",
    description: "Eco-friendly techniques that protect our environment",
    icon: <FaSeedling className="text-green text-xl" />,
  },
  {
    title: "Fresh Produce",
    description: "Farm-fresh vegetables delivered to your doorstep",
    icon: <FaAppleAlt className="text-green text-xl" />,
  },
  {
    title: "Expert Farmers",
    description: "Decades of experience in sustainable agriculture",
    icon: <FaTractor className="text-green text-xl" />,
  },
];

const Feature: React.FC = () => {
  return(
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-6 lg:px-15">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Why Choose <span className="text-green"> Blacc Farms </span> 
            </h2>
            <p className="text-lg text-earth/80 max-w-2xl mx-auto">
              Discover what makes our sustainable farming practices and fresh produce
              the preferred choice for health-conscious families.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: -50 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/farmlady.jpg"
                alt="Blacc farming"
                className="w-full h-[500px] 0bject-cover"
              />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-wheat max-w-xs"
            >
              <div className="flex items-center gap-3">
                <div className="bg-sage/10 p-3 rounded-full">
                 <FaLeaf className="text-green text-xl" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-blacc">25+ Years</div>
                  <div className="text-sm text-earth/70">Of Farming Excellence</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/50 transition-all duration-300 group">
                <div className="bg-green/10 p-3 rounded-full group-hover:bg-green/20 transition-colors duration-300">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-earth/70">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}


          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
        <div className="flex flex-col items-center gap-2">
            <span className="text-earth/60 text-sm">Explore More</span>
            <div className="w-6 h-10 border-2 border-earth/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-sage rounded-full mt-2"></div>
            </div>
        </div>
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-cream to-transparent">
      </div>
    </section>
  );
};

export default Feature;