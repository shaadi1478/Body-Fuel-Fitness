import React, { useState } from 'react';
import { motion } from 'framer-motion';
import img1 from '../../assets/img/1.png';
import img2 from '../../assets/img/2.png';
import img3 from '../../assets/img/3.png';
import img4 from '../../assets/img/4.png';

const items = [
    { id: 1, category: 'Yoga', title: 'Yoga', image: img1 },
    { id: 2, category: 'Fitness', title: 'Dumbbells', image: img2 },
    { id: 3, category: 'Yoga', title: 'Yoga Mat', image: img3 },
    { id: 4, category: 'Muscles', title: 'Weights', image: img4 },
    { id: 1, category: 'Yoga', title: 'Yoga', image: img1 },
    { id: 2, category: 'Fitness', title: 'Dumbbells', image: img2 },


];

const categories = ['All', 'Yoga', 'Fitness', 'Muscles'];

const FilterableCardSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter items based on the selected category
  const filteredItems =
    selectedCategory === 'All'
      ? items
      : items.filter(item => item.category === selectedCategory);

  return (
    <div className="container mx-auto px-8 py-16">
      {/* Category Filters */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full font-semibold ${
              selectedCategory === category ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-800'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Cards Section */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {filteredItems.map((item) => (
          <motion.div
            key={item.id}
            className="border rounded-lg overflow-hidden shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200, damping: 10 }}
          >
            {/* Card Image */}
            <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />

            {/* Card Content */}
            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-500">{item.category}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FilterableCardSection;
