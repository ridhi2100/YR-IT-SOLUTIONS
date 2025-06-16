import React, { useState, useEffect } from 'react';
import Image1 from '../assets/Image1.png';
import Image2 from '../assets/Image2.png';
import IMG1 from '../assets/e12.png';
import IMG2 from '../assets/e13.png';
import IMG3 from '../assets/e14.png';
import IMG4 from '../assets/e15.png';

const ClientReview = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      image: Image1,
      name: 'AR Teeksha Gupta',
      role: 'Customer',
      text: 'We are associated with YR IT Solutions for over 1 years now and it has been a pleasant experience. The team is quite efficient and comes up with innovative idea development and strategies for growth.'
    },
    {
      image: Image2,
      name: 'Kiran Sharma',
      role: 'Portfolio Website',
      text: 'YR IT Solutions has been an excellent partner working with us across multiple projects. Being an agency we are now able to expand our working scope across various disciples, with the help of a true partnership.'
    },
    {
      image: IMG1,
      name: 'Anshul',
      role: 'Architect and Design',
      text: 'Outstanding web development services! The team delivered exactly what we needed and more. Their attention to detail and professional approach made the entire process smooth and enjoyable.'
    },
    {
      image: IMG2,
      name: 'Yatish Kumar Goel',
      role: 'Advocate',
      text: 'YR IT Solutions transformed our app idea into reality. Their expertise in mobile development and user experience design helped us create an app that our users absolutely love. Highly recommended!'
    },
    {
      image: IMG3,
      name: 'Raj Singh',
      role: 'PNB BANNK',
      text: 'The digital marketing strategies implemented by SoftHub have significantly boosted our online presence. We saw a 300% increase in leads within just 3 months of working with them.'
    },
    {
      image: IMG4,
      name: 'Dr Harza',
      role: 'Doctor',
      text: 'From concept to launch, YR IT Solutions handled our e-commerce pharmacy platform development flawlessly. The website is fast, secure, and user-friendly. Sales have increased by 250% since the launch.'
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 2));
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const StarRating = () => (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
        </svg>
      ))}
    </div>
  );

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(testimonials.length / 2)) % Math.ceil(testimonials.length / 2));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients who have experienced success with our services
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto"></div>
        </div>

        {/* Desktop Version - 2 cards per slide */}
        <div className="hidden md:block relative">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 gap-8 lg:gap-12 px-4">
                    {testimonials.slice(slideIndex * 2, slideIndex * 2 + 2).map((testimonial, index) => (
                      <div key={index} className="group">
                        <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                          {/* Quote Icon */}
                          <div className="absolute top-6 right-6 text-blue-600 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                            </svg>
                          </div>

                          {/* Content */}
                          <div className="space-y-6">
                            <p className="text-gray-700 text-lg leading-relaxed italic">
                              "{testimonial.text}"
                            </p>

                            <StarRating />

                            {/* Author */}
                            <div className="flex items-center space-x-4 pt-4">
                              <div className="relative">
                                <img 
                                  src={testimonial.image} 
                                  alt={testimonial.name}
                                  className="w-16 h-16 rounded-full border-4 border-white shadow-lg object-cover"
                                />
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                              </div>
                              <div>
                                <h4 className="text-xl font-bold text-gray-900">{testimonial.name}</h4>
                                <p className="text-gray-500 font-medium">{testimonial.role}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-blue-50 text-blue-600 rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-blue-50 text-blue-600 rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Mobile Version - 1 card per slide */}
        <div className="md:hidden relative">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="group">
                    <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                      {/* Quote Icon */}
                      <div className="absolute top-6 right-6 text-blue-600 opacity-20">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                        </svg>
                      </div>

                      {/* Content */}
                      <div className="space-y-6">
                        <p className="text-gray-700 text-base leading-relaxed italic">
                          "{testimonial.text}"
                        </p>

                        <StarRating />

                        {/* Author */}
                        <div className="flex items-center space-x-4 pt-4">
                          <div className="relative">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name}
                              className="w-12 h-12 rounded-full border-4 border-white shadow-lg object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                            <p className="text-gray-500 font-medium text-sm">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center space-x-3 mt-12">
          {Array.from({ length: window.innerWidth >= 768 ? Math.ceil(testimonials.length / 2) : testimonials.length }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-blue-600 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Auto-slide progress bar */}
        <div className="mt-8 max-w-md mx-auto">
          <div className="bg-gray-200 rounded-full h-1 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-blue-600 to-purple-600 h-full transition-all duration-100 ease-linear"
              style={{
                width: '100%',
                animation: 'progress 4s linear infinite'
              }}
            />
          </div>
        </div>

        <style jsx>{`
          @keyframes progress {
            0% { width: 0% }
            100% { width: 100% }
          }
        `}</style>
      </div>
    </section>
  );
};

export default ClientReview;