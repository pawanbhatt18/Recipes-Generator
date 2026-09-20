
import React from 'react';
import { NavLink } from 'react-router-dom';
import Chatbot from './Chatbot';
const Home = () => {
  return (
    <div
      className="relative mt-16 h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
      }}
    >
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20"></div>

  
     
      <div className="relative z-10 text-center text-white max-w-2xl p-6 bg-gray-900 bg-opacity-50 rounded-2xl shadow-lg">
        <h1 className="text-5xl text-amber-400 font-extrabold mb-6 animate-pulse ">
          "Unleash Your Inner Chef!"
        </h1>
        <p className="text-lg mb-6">
          Culinary Crafter is your go-to platform for delicious recipes and creative cooking ideas.
        </p>
        <NavLink to="/recipes">
          <button className="px-8 py-3 bg-yellow-400 text-white font-semibold rounded-xl hover:bg-yellow-500 transition-all duration-300 shadow-md transform hover:scale-105 hover:text-black">
            Explore Recipes
          </button>
        </NavLink>
      </div>
      <Chatbot/>
    </div>
  );
};

export default Home;

