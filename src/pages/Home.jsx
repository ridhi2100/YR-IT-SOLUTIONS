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
      <div className=''>
        <div className='h-[620px]'>
          <div className='hidden w-full text-center justify-center m-auto flex mt-[8px]'>
            <div className='flex justify-center items-center h-[76px] w-[637px] max-[640px]:w-[95%] max-[640px]-flex max-[640px]:justify-center max-[640px]:items-center px-[24px] bg-white home-search-main radius smtext max-[640px]:h-[3rem]'>
              <input
                className='w-[80%]'
                placeholder='Enter Your Message'
              />
              <div className=' btn float-right w-[140px] h-[46px] flex items-center text-center justify-center textsize smtext max-[640px]:h-[2.5rem] max-[490px]:w-[fit-content] max-[490px]:px-[1rem] '>
                Search
              </div>
            </div>
          </div>
          <div className='h-[420px] ml-[4.5rem] max-[640px]:ml-0 m-[8px] flex gap-[5rem] pt-[3rem] sm:pl-[1rem] pl-[5rem] max-[640px]:pl-[0.5rem] max-[640px]:flex-col'>
            <div className='w-[550px] max-[640px]:w-[95%] max-[640px]:h-[auto] sm:hidden'>
              <img src={IMGC} alt='image' className='w-[550px] h-[420px] max-[640px]:w-[95%] max-[640px]:h-[auto] mr-0 pr-0 float-right' />
            </div>
            <div className='w-[734px] max-[640px]:w-[100%]'>
              <div className='text-[64px] font-bold home-sub-head max-[640px]:text-center'>
                Custom Product & Software Development Focused On Your Success
              </div>
              <div className='max-[640px]:flex max-[640px]:justify-center max-[640px]:items-center'>
                <div className='btn text-[20px] px-[16px] w-[186px] h-[56px] mt-[3rem] button-home max-[640px]:h-[3rem] max-[640px]:mt-[1rem] '>
                  <Link to="/contactus">

                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
            <div className='w-[550px] max-[640px]:hidden'>
              <img src={IMGC} alt='image' className='w-[550px] h-[420px] mr-0 pr-0 float-right' />
            </div>
          </div>
        </div>
      </div>
      <WhyChooseUs />
      <ClientReview />
      <Pricing />
      <ContactUs /> 
      {/* 
      <Delivers />
      */}
    </>
  )
}

export default Home