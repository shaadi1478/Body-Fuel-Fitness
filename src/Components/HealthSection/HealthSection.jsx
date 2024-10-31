import React from 'react';
import { motion } from 'framer-motion';
import healthimg from '../../assets/2 (2).png'

const HealthSection = () => {
  return (
    <div className="bg-[#F9F9F9] flex flex-col md:flex-row items-center gap-8 px-8 py-16 container mx-auto">
      {/* Left Image Section */}
      <motion.div
        className="relative flex-1"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Main Image */}
        <motion.img
          src={healthimg} // Replace with your image path
          alt="Health Illustration"
          className="w-full rounded-lg"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </motion.div>

      {/* Right Text Section */}
      <motion.div
        className="flex-1 text-center md:text-left"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-5xl font-bold mb-4">The Importance of Taking Care of Yourself</h2>
        <p className="text-gray-600 mb-6">
          The Importance To Take Care Of Yourself. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id nam obcaecati 
          sequi odio dolore officia magni reiciendis, architecto, eos, aut asperiores reprehenderit quas rerum omnis facilis 
          quam eius doloribus maxime!
        </p>
        <motion.button
          className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore More
        </motion.button>
      </motion.div>
    </div>
  );
};

export default HealthSection;
