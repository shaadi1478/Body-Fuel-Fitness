import React from 'react';

const Trainer = ({ name, image, specialty, bio }) => (
    <div className="border rounded-lg shadow-md  transition-transform transform hover:scale-105">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <div className='p-3'>
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <h4 className="text-gray-600 mb-2">{specialty}</h4>
        <p className="text-gray-500">{bio}</p>
        </div>
    </div>
);

export default Trainer;
