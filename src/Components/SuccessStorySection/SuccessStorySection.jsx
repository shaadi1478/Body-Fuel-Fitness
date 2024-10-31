import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    id: 1,
    name: 'Johan Doe',
    title: 'Software Engineer',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste in excepturi perferendis, cum, soluta impedit itaque quia dolore rerum quisquam asperiores voluptates placeat maxime nisi nam eius qui recusandae doloremque?',
    rating: 5,
    img: 'https://ibb.co.com/nn5XNbQ',
    company: 'Tech Corp',
  },
  {
    id: 2,
    name: 'Jane Smith',
    title: 'Product Manager',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste in excepturi perferendis, cum, soluta impedit itaque quia dolore rerum quisquam asperiores voluptates placeat maxime nisi nam eius qui recusandae doloremque?',
    rating: 4,
    img: 'https://ibb.co.com/nn5XNbQ',
    company: 'Innovate Ltd.',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    title: 'UX Designer',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste in excepturi perferendis, cum, soluta impedit itaque quia dolore rerum quisquam asperiores voluptates placeat maxime nisi nam eius qui recusandae doloremque?',
    rating: 5,
    img: 'https://ibb.co.com/nn5XNbQ',
    company: 'Design Studio',
  },
  {
    id: 4,
    name: 'Michael Brown',
    title: 'Data Analyst',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste in excepturi perferendis, cum, soluta impedit itaque quia dolore rerum quisquam asperiores voluptates placeat maxime nisi nam eius qui recusandae doloremque?',
    rating: 4,
    img: 'https://ibb.co.com/nn5XNbQ',
    company: 'Data Insights',
  },
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-[#FFF3E5] p-6 rounded-xl text-black shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center">
        <img src={testimonial.img} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <p className="font-bold">{testimonial.name}</p>
        </div>
      </div>
      <div className="mb-6">
        <p className="text-xl text-start font-semibold">“{testimonial.text.substring(0, 100)}...“</p>
      </div>

    </div>
  );
};

const SuccessStorySection = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-start">
        <h2 className="md:text-5xl text-2xl font-bold md:w-[550px] text-gray-800 md:mb-12 mb-7">
        What Are The Costumer Saying About Us        </h2>
        <Slider {...sliderSettings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-4">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default SuccessStorySection;
