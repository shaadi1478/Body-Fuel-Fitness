import React from 'react';
import BlogPost from './BlogPost';

const blogPostsData = [
    {
        title: '5 Tips for a Successful Workout Routine',
        image: 'https://cdn-magazine.nutrabay.com/wp-content/uploads/2023/02/strong-bodybuilder-doing-heavy-weight-exercise-back-machine-1-1067x800.jpg', // Replace with actual images
        excerpt: 'Learn how to get the most out of your workouts with these essential tips...'
    },
    {
        title: 'The Importance of Nutrition in Fitness',
        image: 'https://images.ctfassets.net/473zoc40547p/6KbJW2kKRzlkleiZAs9C7e/632ad45cb792cdbad73fc68c009487a8/man-gym-desktop.jpg', // Replace with actual images
        excerpt: 'Nutrition plays a vital role in your fitness journey. Discover how to fuel your body...'
    },
    {
        title: 'Best Cardio Exercises for Beginners',
        image: 'https://images.fresha.com/lead-images/placeholders/gym-and-fitness-1.jpg?class=width-small', // Replace with actual images
        excerpt: 'Start your cardio journey with these beginner-friendly exercises that boost endurance...'
    },
    {
        title: 'Strength Training for Weight Loss',
        image: 'https://focusfitnessgym.co.nz/wp-content/uploads/2023/01/anastase-maragos-7kEpUPB8vNk-unsplash.jpg', // Replace with actual images
        excerpt: 'Explore how strength training can be an effective part of your weight loss journey...'
    },
    {
        title: 'Yoga for Flexibility and Relaxation',
        image: 'https://serengeti-estates.co.za/wp-content/uploads/2023/12/1.jpg', // Replace with actual images
        excerpt: 'Discover the benefits of yoga for improving flexibility and reducing stress...'
    },
    {
        title: 'How to Stay Motivated for Long-Term Fitness Goals',
        image: 'https://www.primalstrength.com/cdn/shop/files/gymdesign_render_Two_collumn_grid_cb1b5850-fa8e-4a7b-a2b3-190c2e45facd.jpg?v=1680719688&width=1500', // Replace with actual images
        excerpt: 'Learn tips and tricks to keep yourself motivated and committed to your fitness goals...'
    },
];

const BlogSection = () => (
    <div className="container mx-auto px-6 lg:px-16 py-10 md:py-20 mt-11">
        <h1 className="text-3xl font-bold text-center mb-10">Our Latest Blogs</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPostsData.map((post, index) => (
                <BlogPost 
                    key={index} 
                    title={post.title} 
                    image={post.image} 
                    excerpt={post.excerpt} 
                />
            ))}
        </div>
    </div>
);

export default BlogSection;
