import React from 'react';
import { FaEnvelope, FaWhatsapp, FaTelegram, FaYoutube, FaFacebook, FaInstagram } from 'react-icons/fa'; // Importing React Icons

const Footer = () => {
  return (
    <div className="bg-gray-900 flex items-center justify-center text-white  py-4 h-[62px]">
      <div className="max-w-6xl mx-auto px-6 flex space-x-96  justify-between items-center">
        {/* Left Side - Copyright */}
        <div className="text-sm w-full  flex justify-center items-center h-16">
          <p className='tracking-wider text-[15px]'>&copy; {new Date().getFullYear()} Culinary Crafter. All Rights Reserved.</p>
          
        </div>

        {/* Right Side - Social Links */}
        <div className="flex items-center justify-center  space-x-6 text-2xl">
          <a href="mailto:bhattpawan@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaEnvelope />
          </a>
          <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
            <FaWhatsapp />
          </a>
          <a href="https://t.me/yourtelegram" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaTelegram />
          </a>
          <a href="https://www.youtube.com/yourchannel" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
            <FaYoutube />
          </a>
          <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
