import React from 'react';

// ProgramsSection Component
const ProgramsSection = () => {
    // Inline Program Data
    const programData = [
        {
            title: 'Weight Training',
            image: 'https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Article+Image+Update/Fitness/Benefits+of+Weight+Training/Carousel.jpg', // Replace with actual image URL
            description: 'Build strength and tone muscles with our weight training program tailored to all levels.',
        },
        {
            title: 'Cardio Blast',
            image: 'https://images.squarespace-cdn.com/content/v1/59de5f7b4c326db05ce09899/1544206902814-UZTKKNSEJH3A7PKO8R1X/2011_GB_StudioPhotos_Group-0105.jpg?format=2500w', // Replace with actual image URL
            description: 'Boost endurance and burn calories with high-intensity cardio workouts designed for every fitness level.',
        },
        {
            title: 'Yoga for Flexibility',
            image: 'https://post.healthline.com/wp-content/uploads/2019/10/1296x728-body1-1296x728.jpg', // Replace with actual image URL
            description: 'Enhance your flexibility, strength, and mental well-being with our guided yoga sessions.',
        },
        {
            title: 'HIIT (High Intensity Interval Training)',
            image: 'https://invigor8.com/cdn/shop/articles/Benefits_of_hiit_781x.png?v=1725731647', // Replace with actual image URL
            description: 'Fast-paced, high-energy HIIT workouts to maximize calorie burn and improve fitness quickly.',
        },
        {
            title: 'Core Conditioning',
            image: 'https://cdn.nutritionstudies.org/wp-content/uploads/2021/07/core-conditioning-why-we-need-it-and-what-really-works.jpg', // Replace with actual image URL
            description: 'Strengthen and stabilize your core muscles with targeted exercises for a solid foundation.',
        },
    ];

    // Program Card Component Inline
    const ProgramCard = ({ title, image, description }) => (
        <div className="border rounded-lg  shadow-md hover:shadow-lg transition-transform transform hover:scale-105 ">
            <img src={image} alt={title} className="w-full h-40 object-cover" />
            <div className='px-3 py-11'>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>
                <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">Learn More</button>
            </div>
        </div>
    );

    return (
        <div className="container mx-auto px-6 lg:px-16 py-10 md:py-20 mt-11">
            <h1 className="text-3xl font-bold text-center mb-10">Our Fitness Programs</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {programData.map((program, index) => (
                    <ProgramCard
                        key={index}
                        title={program.title}
                        image={program.image}
                        description={program.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProgramsSection;
