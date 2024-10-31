import React from 'react';
import Trainer from './Trainer';

// Sample trainer data
const trainersData = [
    {
        name: 'John Doe',
        image: 'https://www.bodybuilding.com/images/2019/july/best-beginner-weight-training-guide-with-easy-to-follow-workout-1b-700xh.jpg', // Replace with actual images
        specialty: 'Weight Training',
        bio: 'Certified personal trainer with over 5 years of experience in weight training and nutrition.'
    },
    {
        name: 'Jane Smith',
        image: 'https://content.jdmagicbox.com/comp/ahmedabad/k6/079pxx79.xx79.220313234705.h2k6/catalogue/yoga-barre-pilates-paldi-ahmedabad-fitness-centres-d9xq4o8nrw.jpg', // Replace with actual images
        specialty: 'Yoga & Pilates',
        bio: 'Experienced yoga instructor passionate about helping others achieve balance and flexibility.'
    },
    {
        name: 'Mike Johnson',
        image: 'https://cdn.mos.cms.futurecdn.net/9fqkugNxWwoWgEgvdZtfcK.jpg', // Replace with actual images
        specialty: 'Cardio & Endurance',
        bio: 'Specializes in high-intensity cardio workouts and endurance training for all levels.'
    },
];

const TrainersSection = () => (
    <div className="container mx-auto px-6 lg:px-16 py-10 md:py-20 mt-11">
        <h1 className="text-3xl font-bold text-center mb-10">Meet Our Trainers</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trainersData.map((trainer, index) => (
                <Trainer 
                    key={index} 
                    name={trainer.name} 
                    image={trainer.image} 
                    specialty={trainer.specialty} 
                    bio={trainer.bio} 
                />
            ))}
        </div>
    </div>
);

export default TrainersSection;
