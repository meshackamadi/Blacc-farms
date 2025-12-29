import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaTractor, FaLeaf, FaAppleAlt, FaSeedling } from "react-icons/fa";
import { GiCow, GiWheat, GiTomato } from "react-icons/gi";

const Feature: React.FC = () => {
  return(
    <section className="py-20">
      <div className="container mx-auto px-6 lg:px-15">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Why Choose Blacc Farms?
          </h2>
          <p className="text-lg text-earth/80 max-w-2xl mx-auto">
            Discover what makes our sustainable farming practices and fresh produce
            the preferred choice for health-conscious families.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature cards will go here */}
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