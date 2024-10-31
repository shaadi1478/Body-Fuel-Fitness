import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import heroImg from '../../assets/dumbell.png';
import bgImga from '../../assets/bg.png';

const Hero = () => {
    const [isVisible, setIsVisible] = useState(true);
    const bgStyle = {
        backgroundImage: `url(${bgImga})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
    };

    // Animation variants
    const variants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <div style={bgStyle}>
            <section className="container mx-auto px-6 lg:px-16 py-10 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                    {/* Left Content */}
                    <motion.div
                        className="flex flex-col justify-center py-14 md:py-0"
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                            Gym Gives You the Perfect <span className="text-orange-500">Health</span>
                        </h1>
                        <p className="text-gray-600 mb-6">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </p>
                        <div className="flex space-x-4">
                            <button
                                className="bg-orange-600 text-white md:py-4 py-3 md:px-6 px-2 rounded-lg font-semibold hover:bg-orange-700 transition duration-300"
                                onClick={() => setIsVisible(!isVisible)} // Toggle visibility for demo
                            >
                                Booking Now
                            </button>
                            <button className="flex items-center text-black md:py-4 py-3 md:px-6 px-2 rounded-lg font-semibold transition duration-300">
                                <FaPlay className="mr-2" /> Watch Now
                            </button>
                        </div>
                    </motion.div>
                    {/* Right Content (can be an image or video) */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.img src={heroImg} alt="Hero Section"
                        initial={{opacity:0, scale: 0.5}}
                        whileInView={{opacity:1, scale: 1}}
                        transition={{type: "spring"}}
                        className="w-[350px] md:w-[550px] lg:w-[700px] h-auto rounded-lg" />
                    </motion.div>
                </div>
            </section>
            {/* Example of AnimatePresence */}
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Hero;
