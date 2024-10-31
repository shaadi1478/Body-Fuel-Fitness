import React from 'react';

const BlogPost = ({ title, image, excerpt }) => (
    <div className="border rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
        <img src={image} alt={title} className="w-full h-40 object-cover" />
        <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-500 mb-4">{excerpt}</p>
            <button className="text-orange-500 font-semibold hover:underline">
                Read More
            </button>
        </div>
    </div>
);

export default BlogPost;
