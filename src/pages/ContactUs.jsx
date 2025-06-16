import React from 'react';
import { FaYoutube, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from './Form'; // Import the existing Form component

const ContactUs = () => {
    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className='w-full min-h-screen flex flex-col justify-center items-center px-4 py-8 bg-gray-50'>
                <div className='w-full max-w-7xl mx-auto'>
                    {/* Header Section */}
                    <div className='text-center mb-12'>
                        <div className='heading text-4xl md:text-5xl font-bold mb-4 text-gray-800'>
                            Contact Us
                        </div>
                        <div className='text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed'>
                            We believe that the success of our company is a result of our clients growth.
                        </div>
                    </div>

                    {/* Main Content Section */}
                    <div className='flex flex-col lg:flex-row gap-8 lg:gap-12 w-full'>
                        {/* Contact Information Panel */}
                        <div className='bg-[#4F45EB] text-white rounded-2xl p-8 lg:p-12 flex-1 min-h-[600px] lg:min-h-[700px] relative shadow-2xl'>
                            <div className='h-full flex flex-col'>
                                {/* Header */}
                                <div className='mb-8'>
                                    <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight'>
                                        Contact Information
                                    </h2>
                                    <p className='text-gray-200 text-lg md:text-xl leading-relaxed'>
                                        Say something to start a live chat!
                                    </p>
                                </div>
                                
                                {/* Contact Details */}
                                <div className='flex-1 space-y-8 lg:space-y-12'>
                                    {/* Phone */}
                                    <div className='flex items-center gap-4 lg:gap-6'>
                                        <div className='flex-shrink-0'>
                                            <FaPhone size={28} color="#F7F6FF" className='lg:w-8 lg:h-8' />
                                        </div>
                                        <div className='text-lg md:text-xl lg:text-2xl'>
                                            <a href="tel:+917404890806" className='hover:text-gray-200 transition-colors'>
                                                +91 7404890806 
                                            </a>
                                        </div>
                                    </div>
                                    
                                    {/* Email */}
                                    <div className='flex items-center gap-4 lg:gap-6'>
                                        <div className='flex-shrink-0'>
                                            <FaEnvelope size={28} color="#F7F6FF" className='lg:w-8 lg:h-8' />
                                        </div>
                                        <div 
                                            className='text-lg md:text-xl lg:text-2xl cursor-pointer hover:text-gray-200 transition-colors break-all'
                                            onClick={() => {window.location.href="mailto:yr.itsolutions.pvtltd@gmail.com"}}
                                        >
                                            yr.itsolutions.pvtltd@gmail.com
                                        </div>
                                    </div>
                                    
                                    {/* Location */}
                                    <div className='flex items-center gap-4 lg:gap-6'>
                                        <div className='flex-shrink-0'>
                                            <FaMapMarkerAlt size={28} color="#F7F6FF" className='lg:w-8 lg:h-8' />
                                        </div>
                                        <div className='text-lg md:text-xl lg:text-2xl'>
                                            Gurugram, Haryana, India
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Social Media Icons */}
                                <div className='mt-8 lg:mt-12'>
                                    <div className='flex gap-4 lg:gap-6'>
                                        {/* LinkedIn */}
                                        <div 
                                            className='p-3 lg:p-4 rounded-full cursor-pointer hover:bg-white hover:bg-opacity-20 transition-all duration-300 transform hover:scale-110' 
                                            onClick={() => {window.location.href="https://www.linkedin.com/in/yr-it-solutions-08892036b/"}}
                                        >
                                            <FaLinkedin size={32} color="white" className='lg:w-10 lg:h-10' />
                                        </div>
                                        
                                        {/* Instagram */}
                                        <div 
                                            className='p-3 lg:p-4 rounded-full cursor-pointer hover:bg-white hover:bg-opacity-20 transition-all duration-300 transform hover:scale-110' 
                                            onClick={() => {window.location.href="https://www.instagram.com/yritsolutions2025?igsh=YXNyaGlvOHYzY3h1&utm_source=ig_contact_invite"}}
                                        >
                                            <FaInstagram size={32} color="white" className='lg:w-10 lg:h-10' />
                                        </div>
                                        
                                        {/* YouTube */}
                                        <div 
                                            className='p-3 lg:p-4 rounded-full cursor-pointer hover:bg-white hover:bg-opacity-20 transition-all duration-300 transform hover:scale-110' 
                                            onClick={() => {window.location.href="https://youtube.com/@yritsolutions?si=m2Fd0kTWrDgEBSpd"}}
                                        >
                                            <FaYoutube size={32} color="white" className='lg:w-10 lg:h-10' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Contact Form */}
                        <div className='flex-1 flex justify-center items-center'>
                            <div className='w-full max-w-2xl'>
                                <Form />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs;