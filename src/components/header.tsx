import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaShoppingCart, FaPhone, FaUser, FaSearch, FaLeaf, FaBars, FaTimes } from "react-icons/fa";
import { GiFarmTractor, GiFruitBowl, GiChicken } from "react-icons/gi";

const Header: React.FC = () => {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const dropdownContent = {
        About: [
            {
                icon: <GiFarmTractor />,
                label: "Our Story",
                href: "/about#story",
                description: "History & Mission of Blacc Farms"
            },
            {
                icon: <FaLeaf />,
                label: "Sustainability",
                href: "/about#sustainability",
                description: "Eco-friendly practices" 
            },
            {
                icon: <GiChicken />,
                label: "Our Team",
                href: "/about#team",
                description: "Meet the Blacc Farmers"
            },
            {   
                icon: <FaLeaf />,
                label: "Certifications",
                href: "/about#certifications", 
                description: "Organic & quality standards" 
            },    
        ],
        Products: [
            { icon: <GiFruitBowl />, label: "Fresh Produce", href: "/products#produce", description: "Fruits & vegetables" },
            { icon: <GiChicken />, label: "Livestock", href: "/products#livestock", description: "Meat & poultry" },
            { icon: <FaLeaf />, label: "Dairy & Eggs", href: "/products#dairy", description: "Fresh daily" },
            { icon: <FaLeaf />, label: "Seasonal Specials", href: "/products#seasonal", description: "What's in season" },
            { icon: <FaLeaf />, label: "Farm Boxes", href: "/products#boxes", description: "Subscription boxes" },
        ],
        Visit: [
            { icon: <FaLeaf />, label: "Farm Store", href: "/visit#store", description: "Location & hours" },
            { icon: <FaLeaf />, label: "Farm Tours", href: "/visit#tours", description: "Guided experiences" },
            { icon: <FaLeaf />, label: "Events", href: "/visit#events", description: "Workshops & festivals" },
            { icon: <FaLeaf />, label: "U-Pick", href: "/visit#upick", description: "Pick your own" },
        ],
        Learn: [
            { icon: <FaLeaf />, label: "Blog", href: "/learn#blog", description: "Farm updates & tips" },
            { icon: <FaLeaf />, label: "Recipes", href: "/learn#recipes", description: "Seasonal recipes" },
            { icon: <FaLeaf />, label: "Growing Guide", href: "/learn#guide", description: "Gardening tips" },
            { icon: <FaLeaf />, label: "FAQ", href: "/learn#faq", description: "Common questions" },
        ],
    };

    const mainNavItems = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about", hasDropdown: true },
        { label: "Products", href: "/products", hasDropdown: true },
        { label: "Visit", href: "/visit", hasDropdown: true },
        { label: "Learn", href: "/learn", hasDropdown: true },
        { label: "Contact", href: "/contact" },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-wheat shadow-lg">
            <div className="container mx-auto px-6 lg:px-15">
                <div className="flex justify-between items-center py-6">
                    <motion.button
                        className="flex items-center space-x-3 focus:outline-none cursor-pointer"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Home"
                    >
                        <FaLeaf className="h-10 w-10 text-green-700 transition-colors duration-300" />
                        <h1 className="text-2xl font-bold text-black tracking-widest">Blacc Farms</h1>
                    </motion.button>

                    <nav className="hidden lg:flex items-center space-x-8">
                        {mainNavItems.map((item) => (
                            <div key={item.label} className="relative">
                                <motion.button
                                    className="flex items-center space-x-2 text-black hover:text-green-800 transition-colors duration-300 font-medium cursor-pointer"
                                    onMouseEnter={() => setActiveDropdown(item.hasDropdown ? item.label : null)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span>{item.label}</span>
                                    {item.hasDropdown && <FaChevronDown className="text-sm" />}
                                </motion.button>

                                {item.hasDropdown && (
                                    <AnimatePresence>
                                        {activeDropdown === item.label && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-wheat/30 overflow-hidden z-50"
                                                onMouseEnter={() => setActiveDropdown(item.label)}
                                                onMouseLeave={() => setActiveDropdown(null)}
                                            >
                                                <div className="p-6">
                                                    <h3 className="text-lg font-bold text-blacc mb-4">{item.label}</h3>
                                                    <div className="grid gap-3">
                                                        {dropdownContent[item.label as keyof typeof dropdownContent]?.map((dropdownItem, index) => (
                                                            <motion.a
                                                                key={dropdownItem.label}
                                                                href={dropdownItem.href}
                                                                initial={{ opacity: 0, x: -20 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                                                className="flex items-center space-x-3 p-3 rounded-xl hover:bg-sage/10 transition-colors duration-300 group"
                                                            >
                                                                <div className="text-green text-xl group-hover:scale-110 transition-transform duration-300">
                                                                    {dropdownItem.icon}
                                                                </div>
                                                                <div>
                                                                    <div className="font-semibold text-blacc group-hover:text-green transition-colors duration-300">
                                                                        {dropdownItem.label}
                                                                    </div>
                                                                    <div className="text-sm text-earth/70">
                                                                        {dropdownItem.description}
                                                                    </div>
                                                                </div>
                                                            </motion.a>
                                                        ))}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                )}
                            </div>
                        ))}

                        <div className="flex items-center space-x-4 ml-8">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="text-green-800 hover:text-black transition-colors duration-300 cursor-pointer"
                            >
                                <FaSearch className="text-xl" />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="text-green-800 hover:text transition-colors duration-300 cursor-pointer"
                            >
                                <FaShoppingCart className="text-xl " />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-green-800 text-white px-8 py-2 rounded-full font-bold transition-all duration-300 shadow-lg cursor-pointer"
                            >
                                Shop Now
                            </motion.button>
                        </div>
                    </nav>

                    <motion.button
                        className="lg:hidden text-black"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        whileTap={{ scale: 0.95 }}
                    >
                        {isMobileMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
                    </motion.button>
                </div>

                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="lg:hidden bg-white border-t border-wheat/30 overflow-hidden absolute w-full left-0"
                        >
                            <div className="px-6 py-6 space-y-4">
                                {mainNavItems.map((item) => (
                                    <div key={item.label}>
                                        <button
                                            className="flex items-center justify-between w-full text-black font-medium py-2"
                                            onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                                        >
                                            <span>{item.label}</span>
                                            {item.hasDropdown && <FaChevronDown className="text-sm" />}
                                        </button>

                                        {item.hasDropdown && activeDropdown === item.label && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="ml-4 mt-2 space-y-2"
                                            >
                                                {dropdownContent[item.label as keyof typeof dropdownContent]?.map((dropdownItem) => (
                                                    <a
                                                        key={dropdownItem.label}
                                                        href={dropdownItem.href}
                                                        className="flex items-center space-x-3 p-3 rounded-xl hover:bg-sage/10 transition-colors duration-300"
                                                    >
                                                        <div className="text-green">
                                                            {dropdownItem.icon}
                                                        </div>
                                                        <div>
                                                            <div className="font-medium text-blacc">
                                                                {dropdownItem.label}
                                                            </div>
                                                            <div className="text-sm text-earth/70">
                                                                {dropdownItem.description}
                                                            </div>
                                                        </div>
                                                    </a>
                                                ))}
                                            </motion.div>
                                        )}
                                    </div>
                                ))}

                                <div className="pt-4 border-t border-wheat/30">
                                    <button className="w-full bg-sage text-cream px-6 py-3 rounded-full font-semibold hover:bg-earth transition-all duration-300">
                                        Shop Now
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Header;