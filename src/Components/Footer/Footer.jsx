import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin, FaDumbbell } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo and Description */}
                <div>
                    <div className="flex items-center space-x-2">
                        <FaDumbbell className="text-orange-500 text-2xl" />
                        <h2 className="font-bold text-lg">
                            BODY FUEL <span className="text-orange-500">FITNESS</span>
                        </h2>
                    </div>
                    <p className="mt-4 text-gray-400">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab placeat quaerat
                        doloribus odit perferendis autem blanditiis, nihil pariatur iusto accusamus.
                    </p>
                    <div className="flex space-x-4 mt-4">
                        <FaInstagram className="text-2xl hover:text-orange-500 cursor-pointer" />
                        <FaFacebook className="text-2xl hover:text-orange-500 cursor-pointer" />
                        <FaLinkedin className="text-2xl hover:text-orange-500 cursor-pointer" />
                    </div>
                </div>

                {/* Important Links */}
                <div>
                    <h3 className="font-semibold text-lg mb-4">Important Links</h3>
                    <ul className="text-gray-400 space-y-2">
                    <Link to='/'><li className="cursor-pointer hover:text-orange-500">Home</li></Link>
                    <Link to=''><li className="cursor-pointer hover:text-orange-500">About</li></Link>
                        <Link to='/blogs'><li className="cursor-pointer hover:text-orange-500">Blogs</li></Link>
                        <li className="cursor-pointer hover:text-orange-500">Login</li>
                    </ul>
                </div>

                {/* Company Links */}
                <div className='hidden md:block'>
                    <h3 className="font-semibold text-lg mb-4">Company Links</h3>
                    <ul className="text-gray-400 space-y-2">
                        <li className="cursor-pointer hover:text-orange-500">Our Services</li>
                        <li className="cursor-pointer hover:text-orange-500">Contact</li>
                        <li className="cursor-pointer hover:text-orange-500">Privacy Policy</li>
                    </ul>
                </div>

                {/* Resources */}
                <div className='hidden md:block'>
                    <h3 className="font-semibold text-lg mb-4">Resources</h3>
                    <ul className="text-gray-400 space-y-2">
                        <Link to='/'><li className="cursor-pointer hover:text-orange-500">Home</li></Link>
                        <li className="cursor-pointer hover:text-orange-500">About</li>
                        <li className="cursor-pointer hover:text-orange-500">Services</li>
                        <li className="cursor-pointer hover:text-orange-500">Login</li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500">
                &copy; 2024 Body Fuel Fitness
            </div>
        </footer>
    );
};

export default Footer;
