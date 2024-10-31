import React from 'react';
import { IoMdStar } from 'react-icons/io';
import { motion } from 'framer-motion';
import Slider from "react-slick";
import reviewImage from '../../assets/review.jpg';

const ReviewCard = () => {
    // Animation variants for the review cards
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const reviews = [
        {
            name: 'Johan Doe',
            title: 'johan deo',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste in excepturi perferendis, cum, soluta impedit itaque quia dolore rerum quisquam asperiores voluptates placeat maxime nisi nam eius qui recusandae doloremque?',
            rating: 5,
        },
        {
            name: 'Jane Smith',
            title: 'jane smith',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste in excepturi perferendis, cum, soluta impedit itaque quia dolore rerum quisquam asperiores voluptates placeat maxime nisi nam eius qui recusandae doloremque?',
            rating: 4,
        },
        {
            name: 'Alice Johnson',
            title: 'alice johnson',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste in excepturi perferendis, cum, soluta impedit itaque quia dolore rerum quisquam asperiores voluptates placeat maxime nisi nam eius qui recusandae doloremque?',
            rating: 5,
        },
        {
            name: 'Michael Brown',
            title: 'michael brown',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste in excepturi perferendis, cum, soluta impedit itaque quia dolore rerum quisquam asperiores voluptates placeat maxime nisi nam eius qui recusandae doloremque?',
            rating: 4,
        },
        // Add more reviews if needed
    ];

    // Slider settings for showing 3 cards at a time
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,   // Show 3 cards at a time
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className='px-8 py-16 container mx-auto'>
            <div className='text-4xl w-full md:w-[500px] font-bold mb-8'>
                <h1>What Are The Customers Saying About Us</h1>
            </div>
            <Slider {...settings}>
                {reviews.map((review, index) => (
                    <motion.div
                        key={index}
                        className='bg-white p-6 rounded-lg shadow-md'
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <div className='flex items-center mb-4'>
                            <img src={reviewImage} alt={review.name} className='w-12 h-12 rounded-full mr-4' />
                            <div>
                                <h3 className='font-bold'>{review.name}</h3>
                                <p className='text-gray-500'>{review.title}</p>
                            </div>
                        </div>
                        <p className='mb-4'>{review.text}</p>
                        <div className='flex'>
                            {[...Array(review.rating)].map((_, i) => (
                                <IoMdStar key={i} className='text-yellow-500' />
                            ))}
                        </div>
                    </motion.div>
                ))}
            </Slider>
        </div>
    );
};

export default ReviewCard;
