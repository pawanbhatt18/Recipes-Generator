import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaTelegram, FaEnvelope } from 'react-icons/fa'; 
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-gradient-to-br from-green-600 to-green-700 py-16 mt-16">
      <div className="max-w-5xl mx-auto px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-extrabold text-white mb-6 tracking-wide drop-shadow-lg">About Culinary Crafter</h1>
          <p className="text-lg text-white font-medium leading-relaxed max-w-3xl mx-auto">
            Culinary Crafter is a next-gen recipe platform that revolutionizes the way you cook. Discover unique recipes, 
            plan meals effortlessly, and track your nutrition—all in one place. Whether you're a home chef or a nutrition 
            enthusiast, Culinary Crafter is designed to make cooking smarter and more enjoyable!
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[{
            title: "Recipe Generator",
            text: "Enter your ingredients and let our AI-powered system generate delicious meal ideas tailored just for you!",
          }, {
            title: "Dietary Plans",
            text: "Craft customized meal plans, track calories, and maintain a balanced lifestyle effortlessly.",
          }].map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="text-center bg-gray-900 text-white p-8 rounded-xl shadow-xl hover:shadow-2xl"
            >
              <h2 className="text-3xl font-semibold mb-4 text-green-300">{item.title}</h2>
              <p className="text-lg">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <h2 className="text-4xl font-semibold text-white mb-6">Contact Us</h2>
          <div className="flex justify-center space-x-8">
            {[{
              icon: <FaEnvelope />, link: "mailto:your-email@example.com", color: "text-yellow-400",
            }, {
              icon: <FaWhatsapp />, link: "https://wa.me/yourwhatsappnumber", color: "text-green-400",
            }, {
              icon: <FaTelegram />, link: "https://t.me/yourtelegram", color: "text-blue-400",
            }, {
              icon: <FaFacebook />, link: "https://www.facebook.com/yourprofile", color: "text-blue-700",
            }, {
              icon: <FaTwitter />, link: "https://twitter.com/yourprofile", color: "text-blue-500",
            }, {
              icon: <FaInstagram />, link: "https://www.instagram.com/yourprofile", color: "text-pink-500",
            }].map((social, index) => (
              <motion.a 
                key={index} 
                href={social.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`text-4xl transition-all duration-300 hover:scale-125 ${social.color}`}
                whileHover={{ rotate: 10 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

