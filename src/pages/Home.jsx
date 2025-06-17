import React from 'react'
import Navbar from './Navbar'
import '../styles/home.css'
import IMGC from "../assets/web-development-services.gif"
import WhyChooseUs from './WhyChooseUs';
import Delivers from './Delivers';
import ClientReview from './ClientReview';
import Pricing from './Pricing';
import ContactUs from './ContactUs';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="w-full min-h-screen">
        {/* Search Bar - Hidden by default */}
        <div className="hidden w-full text-center justify-center mx-auto flex mt-2">
          <div className="flex justify-center items-center h-19 w-full max-w-2xl mx-4 px-6 bg-white home-search-main radius smtext sm:h-12">
            <input
              className="flex-1 outline-none border-none"
              placeholder="Enter Your Message"
            />
            <div className="btn ml-4 px-6 h-12 flex items-center justify-center textsize smtext whitespace-nowrap sm:h-10 sm:px-4">
              Search
            </div>
          </div>
        </div>

        {/* Main Hero Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 min-h-[500px] lg:min-h-[420px]">
            
            {/* Text Content */}
            <div className="flex-1 max-w-2xl order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold home-sub-head text-center lg:text-left leading-tight mb-6 lg:mb-8">
                Custom Product & Software Development Focused On Your Success
              </h1>
              
              <div className="flex justify-center lg:justify-start">
                <Link 
                  to="/contactus"
                  className="btn text-lg sm:text-xl px-6 sm:px-8 h-12 sm:h-14 flex items-center justify-center button-home rounded-lg transition-all duration-300 hover:transform hover:scale-105"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Image Content */}
            <div className="flex-1 max-w-lg order-1 lg:order-2 w-full">
              <div className="relative w-full">
                <img 
                  src={IMGC} 
                  alt="Web Development Services" 
                  className="w-full h-auto max-h-96 lg:max-h-[420px] object-contain rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sections with proper spacing */}
      <div className="w-full">
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <WhyChooseUs />
        </div>
        
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <ClientReview />
        </div>
        
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <Pricing />
        </div>
        
        <div>
          <ContactUs />
        </div>
      </div>

      {/* Commented out section */}
      {/*
        <Delivers />
      */}
    </>
  )
}

export default Home