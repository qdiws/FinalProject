import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-100 to-gray-300 p-6 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-gray-800 mb-6"
      >
        Call of Duty Matchmaking Assistant
      </motion.h1>

      <p className="text-lg text-gray-700 max-w-xl mb-8">
        Find the perfect teammates for ranked matches based on your rank, playstyle, and communication preferences.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link to="/profile">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Set Up Profile
          </button>
        </Link>
        <Link to="/matchmaking">
          <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
            Find Teammates
          </button>
        </Link>
        <Link to="/about">
          <button className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition">
            Learn About Us
          </button>
        </Link>
      </div>
    </div>
  );
};


export default Home;
