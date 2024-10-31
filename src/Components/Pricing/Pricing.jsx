import React from 'react';
import { BsChevronDoubleRight } from 'react-icons/bs';

const Pricing = () => {
    return (
        <div className="container mx-auto px-6 lg:px-16 py-10 md:py-20 mt-11">
            <div className="text-center mb-10">
                <h1 className="text-3xl font-bold mb-4">Choose The Best Plan</h1>
                <p className="text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, et!
                    Repudiandae cum quas voluptas quasi doloribus non veritatis dolore doloremque.
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {/* Basic Plan */}
                <div className="border rounded-lg py-11 px-3 text-start shadow-md transition-transform transform hover:scale-105 hover:shadow-lg w-full md:w-72">
                    <h4 className="text-lg font-semibold mb-2">Basic</h4>
                    <h2 className="text-2xl font-bold mb-4">$99 <span className="text-sm text-gray-500">/Per Month</span></h2>
                    <div className="mb-4 space-y-4">
                        <div className='flex items-center gap-1'>
                            <BsChevronDoubleRight aria-hidden="true" /> <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <BsChevronDoubleRight aria-hidden="true" /> <p>Feature two description.</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <BsChevronDoubleRight aria-hidden="true" /> <p>Feature three description.</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <BsChevronDoubleRight aria-hidden="true" /> <p>Feature four description.</p>
                        </div>
                    </div>
                    <button className="bg-orange-500 w-full text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-200">Choose Plan</button>
                </div>

                {/* Premium Plan */}
                <div className="border bg-orange-400 rounded-lg py-11 px-3 text-start shadow-md transition-transform transform hover:scale-105 hover:shadow-lg w-full md:w-72">
                    <h4 className="text-lg font-semibold mb-2">Premium</h4>
                    <h2 className="text-2xl font-bold mb-4">$299 <span className="text-sm text-gray-500">/Per Month</span></h2>
                    <div className="mb-4 space-y-4">
                        <div className='flex items-center gap-1'>
                            <BsChevronDoubleRight aria-hidden="true" /> <p>Enhanced features for power users.</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <BsChevronDoubleRight aria-hidden="true" /> <p>Priority customer support.</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <BsChevronDoubleRight aria-hidden="true" /> <p>Monthly analytics report.</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <BsChevronDoubleRight aria-hidden="true" /> <p>Access to exclusive content.</p>
                        </div>
                    </div>
                    <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 w-full transition duration-200">Choose Plan</button>
                </div>

                {/* Professional Plan */}
                <div className="border rounded-lg py-11 px-3 text-start shadow-md transition-transform transform hover:scale-105 hover:shadow-lg w-full md:w-72">
                    <h4 className="text-lg font-semibold mb-2">Professional</h4>
                    <h2 className="text-2xl font-bold mb-4">$199 <span className="text-sm text-gray-500">/Per Month</span></h2>
                    <div className="mb-4 space-y-4">
                        <div className='flex items-center gap-1'>
                            <BsChevronDoubleRight aria-hidden="true" /> <p>Feature one description.</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <BsChevronDoubleRight aria-hidden="true" /> <p>Feature two description.</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <BsChevronDoubleRight aria-hidden="true" /> <p>Feature three description.</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <BsChevronDoubleRight aria-hidden="true" /> <p>Feature four description.</p>
                        </div>
                    </div>
                    <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 w-full transition duration-200">Choose Plan</button>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
