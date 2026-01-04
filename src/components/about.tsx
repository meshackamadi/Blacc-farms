import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  const teamMembers = [
    {
      image: "/chicken.jpg",
      name: "James Blacc",
      role: "Founder & Head Farmer",
      description: "4th generation farmer with 25+ years experience"
    },
    {
      image: "/goats.jpg",
      name: "Sarah Blacc",
      role: "Sustainability Director",
      description: "Specialist in organic farming practices"
    },
    {
      image: "/products.jpg",
      name: "Michael Chen",
      role: "Farm Operations",
      description: "Expert in livestock and crop management"
    }
  ];

  const farmImages = [
    {
      image: "/chicken.jpg",
      title: "Sustainable Farming",
      caption: "Our eco-friendly methods preserve the land for future generations"
    },
    {
      image: "/goats.jpg",
      title: "Organic Produce",
      caption: "Chemical-free fruits and vegetables grown with care"
    },
    {
      image: "/products.jpg",
      title: "Community Focus",
      caption: "Supporting local families with fresh, healthy food"
    }
  ];
  
  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-6 lg:px-15">
        {/* Bold Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-blacc mb-6">
            Our <span className="text-green">Story</span>
          </h1>
          <p className="text-xl text-earth/80 max-w-3xl mx-auto">
            For over four generations, the Blacc family has been dedicated to sustainable agriculture, 
            bringing fresh, organic produce to our community while nurturing the land we call home.
          </p>
        </motion.div>

        {/* Three Pictures Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-black mb-4">
              Our <span className="text-green">Farm</span> in Action
            </h2>
            <p className="text-lg text-earth/70 max-w-2xl mx-auto">
              See how we cultivate excellence from soil to harvest
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {farmImages.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-xl mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-2xl font-bold text-blacc mb-2">
                  {item.title}
                </h3>
                <p className="text-earth/70">
                  {item.caption}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Section (Optional) */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-blacc mb-4">
              Meet Our <span className="text-green">Team</span>
            </h2>
            <p className="text-lg text-earth/70 max-w-2xl mx-auto">
              The passionate individuals behind Blacc Farms
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-blacc mb-2">
                  {member.name}
                </h3>
                <p className="text-green font-semibold mb-2">
                  {member.role}
                </p>
                <p className="text-earth/70">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;