import React from 'react';
import { motion } from 'framer-motion';

const Discount = () => {
    // Animation variants for entrance
    const variants = {
        hidden: { opacity: 0, x: 90 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <motion.div
            className="bg-[#F9F9F9] text-black py-16 px-6 lg:px-16"
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-xl mx-auto text-center">
                <h1 className="text-3xl md:text-3xl font-bold mb-4 uppercase">
                    Get 20% Discount On Your First Order, Are You Ready To Buy
                </h1>
                <p className="text-black mb-6">
                    We will make sure you get the right and the best quality products for your workout.
                </p>
                <div className="flex justify-center gap-4">
                    <motion.button
                        className="bg-orange-500 text-white md:px-6 px-3 py-2 rounded-lg shadow-md transition duration-300"
                        aria-label="Learn more about the discount"
                        whileHover={{ scale: 1.05 }}
                    >
                        Learn More
                    </motion.button>
                    <motion.button
                        className="border border-orange-500 text-orange-500 font-bold md:px-6 px-3 py-2 rounded-lg shadow-md hover:bg-orange-400 hover:text-white transition duration-300"
                        aria-label="Stay in touch with us"
                        whileHover={{ scale: 1.05 }}
                    >
                        Stay In Touch
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
};

export default Discount;
