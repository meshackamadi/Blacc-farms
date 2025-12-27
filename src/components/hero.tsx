import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaTractor, FaLeaf, FaAppleAlt, FaSeedling } from "react-icons/fa";
import { GiCow, GiWheat, GiTomato } from "react-icons/gi";

const Hero: React.FC = () => {
    const heroStats = [
        { icon: <FaLeaf />, value: "100%", label: "Organic Certified", sublabel: "Since 1985" },
        { icon: <GiCow />, value: "500+", label: "Happy Animals", sublabel: "Free Range" },
        { icon: <FaSeedling />, value: "50+", label: "Crop Varieties", sublabel: "Seasonal Rotation" },
        { icon: <GiTomato />, value: "Family", label: "Owned & Operated", sublabel: "4 Generations" },
    ];

    const featuredProducts = [
        { name: "Organic Tomatoes", icon: <GiTomato className="text-clay" />, season: "In Season Now" },
        { name: "Fresh Eggs", icon: <GiCow className="text-sun" />, season: "Daily Collection" },
        { name: "Artisanal Honey", icon: <FaAppleAlt className="text-earth" />, season: "Limited Batch" },
    ];

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0 z-0">
                <motion.div
                    className="absolute top-20 left-10 w-40 h-40 bg-sage/10 rounded-full blur-3xl"
                    animate={{ y: [0, 30, 0] }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-60 h-60 bg-sun/10 rounded-full blur-3xl"
                    animate={{ y: [0, -30, 0] }}
                    transition={{ duration: 10, repeat: Infinity }}
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-left"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 bg-sage/10 text-sage px-4 py-2 rounded-full mb-6"
                        >
                            <FaLeaf className="text-green text-sm" />
                            <span className="text-sm font-medium">Certified Organic Since 1985</span>
                        </motion.div>

                        {/* Main Headline */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                            <span className="text-earth">From Our Fields</span>
                            <br />
                            <span className="text-blacc">To Your Table</span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-xl text-earth/80 mb-8 max-w-xl">
                            Experience the taste of truly sustainable farming.
                            Fresh, organic produce and humanely raised livestock
                            delivered straight from our family farm to your home.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 mb-10">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-green text-cream px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3"
                            >
                                Shop Fresh Produce
                                <FaArrowRight className="text-sm" />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="border-2 border-sage text-sage px-8 py-4 rounded-full font-semibold text-lg hover:bg-sage/10 transition-all duration-300 flex items-center gap-3"
                            >
                                <FaTractor className="text-lg" />
                                Schedule a Tour
                            </motion.button>
                        </div>

                        {/* Featured Products */}
                        <div className="mb-12">
                            <h3 className="text-lg font-semibold text-blacc mb-4">This Week's Fresh Picks:</h3>
                            <div className="flex flex-wrap gap-3">
                                {featuredProducts.map((product, index) => (
                                    <motion.div
                                        key={product.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                                        className="flex items-center gap-2 bg-cream border border-wheat rounded-full px-4 py-2 shadow-sm"
                                    >
                                        {product.icon}
                                        <span className="font-medium text-blacc">{product.name}</span>
                                        <span className="text-xs text-earth bg-wheat/30 px-2 py-1 rounded-full">
                                            {product.season}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Trust Signals */}
                        <div className="flex items-center gap-6">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-10 h-10 bg-earth rounded-full border-2 border-cream"></div>
                                ))}
                            </div>
                            <div>
                                <p className="text-blacc font-medium">Trusted by 500+ Local Families</p>
                                <p className="text-sm text-earth/70">⭐ 4.9/5 from 200+ reviews</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Content - Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative"
                    >
                        {/* Main Image Container */}
                        <div className="relative">
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="relative z-10"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                    alt="Fresh organic vegetables from Blacc Farms"
                                    className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
                                />
                            </motion.div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4 mt-10">
                            {heroStats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-cream/80 backdrop-blur-sm border border-wheat/30 p-4 rounded-2xl text-center"
                                >
                                    <div className="text-sage text-2xl mb-2">{stat.icon}</div>
                                    <div className="text-2xl font-bold text-blacc">{stat.value}</div>
                                    <div className="font-medium text-blacc">{stat.label}</div>
                                    <div className="text-xs text-earth/70 mt-1">{stat.sublabel}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
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
            </div>

            {/* Bottom Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-cream to-transparent"></div>
        </section>
    );
};

export default Hero;