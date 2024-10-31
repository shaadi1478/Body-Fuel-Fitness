import React from 'react';
import { GrYoga } from 'react-icons/gr';
import { IoIosFitness } from 'react-icons/io';

const Equipments = () => {
    return (
        <div className='py-11 container mx-auto px-6 lg:px-16 md:flex flex-row gap-x-6'>
            <header className=' md:text-start mb-8'>
                <h1 className='text-3xl md:text-4xl font-bold'>What We Offer for You</h1>
                <p className='text-gray-600 text-sm md:text-base'>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
            </header>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <div className='flex items-start gap-2 border p-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-300'>
                    <GrYoga className='text-indigo-600 text-3xl' aria-hidden='true' />
                    <div>
                        <h2 className='text-xl font-semibold'>Yoga Equipments</h2>
                        <p className='text-gray-600'>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                    </div>
                </div>
                <div className='flex items-start gap-2 border p-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-300'>
                    <IoIosFitness className='text-green-600 text-3xl' aria-hidden='true' />
                    <div>
                        <h2 className='text-xl font-semibold'>Muscles Equipments</h2>
                        <p className='text-gray-600'>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                    </div>
                </div>
                <div className='flex items-start gap-2 border p-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-300'>
                    <IoIosFitness className='text-blue-600 text-3xl' aria-hidden='true' />
                    <div>
                        <h2 className='text-xl font-semibold'>Fitness Equipments</h2>
                        <p className='text-gray-600'>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Equipments;
