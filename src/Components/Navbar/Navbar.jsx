import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { FaCartArrowDown, FaDumbbell, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isSignupOpen, setIsSignupOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleLogin = () => {
        if (isLoginOpen) {
            setIsLoginOpen(false);
        } else {
            setIsLoginOpen(true);
            setIsSignupOpen(false); // Close signup if open
        }
    };

    const toggleSignup = () => {
        if (isSignupOpen) {
            setIsSignupOpen(false);
        } else {
            setIsSignupOpen(true);
            setIsLoginOpen(false); // Close login if open
        }
    };

    return (
        <div className="fixed top-0 left-0 right-0 bg-white shadow-md py-4 px-8 z-50">
            <nav className="flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center space-x-2">
                    <FaDumbbell className="text-orange-600 text-2xl" />
                    <h1 className="font-bold text-2xl">Body Fuel <span className='text-orange-600'>Fitness</span></h1>
                </div>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex space-x-6">
                    <Link to="/" className="text-gray-700 hover:text-orange-500">Home</Link>
                    <Link to="/trainer" className="text-gray-700 hover:text-orange-500">Trainer</Link>
                    <Link to="/program" className="text-gray-700 hover:text-orange-500">Program</Link>
                    <Link to="/blogs" className="text-gray-700 hover:text-orange-500">Blogs</Link>
                    <Link to="/pricing" className="text-gray-700 hover:text-orange-500">Pricing</Link>
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMobileMenu} className="text-gray-600 text-2xl">
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* Icons and Login/Signup Buttons */}
                <div className="hidden md:flex items-center space-x-4">
                    <div className="p-2 rounded-full hover:bg-orange-500 cursor-pointer">
                        <CiSearch className="text-gray-600 hover:text-white text-xl" />
                    </div>
                    <div className="p-2 rounded-full hover:bg-orange-500 cursor-pointer">
                        <FaCartArrowDown className="text-gray-600 hover:text-white text-xl" />
                    </div>
                    <button onClick={toggleLogin} className="text-orange-600 border border-orange-600 hover:bg-orange-600 hover:text-white py-2 px-4 rounded-lg">
                        Login
                    </button>
                    <button onClick={toggleSignup} className="text-orange-600 border border-orange-600 hover:bg-orange-600 hover:text-white py-2 px-4 rounded-lg">
                        Sign Up
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden mt-4">
                    <div className="flex flex-col space-y-4">
                        <Link to="/" className="text-gray-700 hover:text-orange-500" onClick={toggleMobileMenu}>Home</Link>
                        <Link to="/trainer" className="text-gray-700 hover:text-orange-500" onClick={toggleMobileMenu}>Trainer</Link>
                        <Link to="/program" className="text-gray-700 hover:text-orange-500" onClick={toggleMobileMenu}>Program</Link>
                        <Link to="/blogs" className="text-gray-700 hover:text-orange-500" onClick={toggleMobileMenu}>Blogs</Link>
                        <Link to="/pricing" className="text-gray-700 hover:text-orange-500" onClick={toggleMobileMenu}>Pricing</Link>
                        <div className="flex items-center space-x-4">
                            <button onClick={toggleLogin} className="text-orange-600 border border-orange-600 hover:bg-orange-600 hover:text-white py-2 px-4 rounded-lg">
                                Login
                            </button>
                            <button onClick={toggleSignup} className="text-orange-600 border border-orange-600 hover:bg-orange-600 hover:text-white py-2 px-4 rounded-lg">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Login Form */}
            {isLoginOpen && (
                <motion.div 
                    className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50"
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }}
                >
                    <div className="bg-white p-6 rounded shadow-md w-450">
                        <h2 className="text-xl font-bold mb-4">Login</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block mb-1">Email</label>
                                <input type="email" className="border p-2 w-64 md:w-96" placeholder="Enter your email" required />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1">Password</label>
                                <input type="password" className="border p-2 w-64 md:w-96" placeholder="Enter your password" required />
                            </div>
                            <button type="submit" className="bg-orange-500 text-white py-2 px-4 rounded w-full">Login</button>
                            <button type="button" onClick={toggleLogin} className="mt-4 text-red-500">Close</button>
                        </form>
                    </div>
                </motion.div>
            )}

            {/* Sign-Up Form */}
            {isSignupOpen && (
                <motion.div 
                    className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50"
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }}
                >
                    <div className="bg-white p-6 rounded shadow-md w-450">
                        <h2 className="text-xl font-bold mb-4">Sign Up</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block mb-1">Email</label>
                                <input type="email" className="border p-2 w-64 md:w-96" placeholder="Enter your email" required />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1">Password</label>
                                <input type="password" className="border p-2 w-64 md:w-96" placeholder="Enter your password" required />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1">Confirm Password</label>
                                <input type="password" className="border p-2 w-64 md:w-96" placeholder="Confirm your password" required />
                            </div>
                            <button type="submit" className="bg-orange-500 text-white py-2 px-4 rounded w-full">Sign Up</button>
                            <button type="button" onClick={toggleSignup} className="mt-4 text-red-500">Close</button>
                        </form>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default Navbar;
