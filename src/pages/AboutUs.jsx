import React from 'react'
import IMG1 from '../assets/Image3.png'
import IMG2 from '../assets/Image4.png'
import IMG3 from '../assets/circle-check.png'
import IMG4 from '../assets/flag.png'
import IMG5 from '../assets/bulb_fill.png'
import IMG6 from '../assets/people-multiple.png'
import G1 from "../assets/Group01.png"
import G2 from "../assets/IconBox.png"
import G3 from "../assets/IconBox2.png"
import G4 from "../assets/IconBox3.png"
import G5 from "../assets/IconBox4.png"
import "../styles/AboutUs.css"
import AnimatedNumbers from "react-animated-numbers";
import ContactUs from './ContactUs'
import HaveAQues from './HaveAQues'
import { Link } from 'react-router-dom'

const AboutUs = () => {
    const data = [
        {
            title: "Commitment",
            description: "We go the extra mile to exceed expectations through timely delivery, consistent quality, and impactful results.",
            img: IMG3
        },
        {
            title: "Ownership",
            description: "We take responsibility, align with your goals, and deliver with precision and accountability.",
            img: IMG4
        },
        {
            title: "Innovation",
            description: "We embrace new technologies and bold thinking to create forward-looking, standout solutions.",
            img: IMG5
        },
        {
            title: "Transparency",
            description: "We value honest communication, clear processes, and keep clients informed at every step.",
            img: IMG6
        }
    ]

    return (
        <>
            <div className='max-sm:w-full max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center'>
                <div className='max-[779px]:hidden max-[780px]:items-center h-[524px] max-[780px]:h-[100vh] max-[520px]:h-[70vh] pt-[5rem] max-[981px]:pt-1 max-[1100px]:w-[90%] max-[860px]:w-[97%]'>
                    <div className='h-[431px] flex justify-around items-center max-[780px]:flex-col max-[780px]:items-center'>
                        <div className='h-[431px] w-[674px] max-[600px]:w-[98%] max-[600px]:h-[auto] min-[780px]:hidden'>
                            <img src={IMG1} alt="" className='w-[400px] h-auto max-[600px]:w-[90%]' />
                        </div>
                        <div className='h-[431px] w-[468px] max-sm:w-[100%] max-[1100px]:ml-8 max-[780px]:ml-0'>
                            <div className='About-sub-h max-[630px]:text-[25px] max-sm:text-center w-full'>
                                The Story of YR IT SOLUTIONS
                            </div>
                            <div className="min-[630px]:About-sub1 mt-[1.4rem] pricingM-subpart3 text-base max-[500px]:text-sm max-[400px]:text-xs">
                                YR IT SOLUTIONS is a results-driven tech company that empowers businesses through custom web and mobile apps, digital marketing, and AI-powered tools.
                                We don’t rely on tradition — we solve real problems with smart, scalable, and user-focused tech that delivers clear results.
                            </div>
                            <div className='flex gap-10 mt-[3rem]'>
                                <div className='btn radius px-[16px] rounded-[8px] h-[43px] w-[fit-content] flex'>
                                    <Link to="/ourservices">
                                        Explore our Services
                                    </Link>
                                </div>
                                <div className='text-[var(--theme)] border-[var(--theme)] border-[1px] radius px-[16px] rounded-[8px] h-[43px] w-[fit-content] flex justify-center items-center'>
                                    <Link to="/contactus">
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='h-[431px] w-[674x] max-[600px]:w-[98%] max-[600px]:h-[auto] max-[780px]:hidden'>
                            <img src={IMG1} alt="" className='w-[600px] h-auto max-[600px]:w-[90%]' />
                        </div>
                    </div>
                </div>

                {/* Mobile View Section */}
                <div className='px-2 min-[780px]:hidden flex flex-col items-center text-center'>
                    <div className='max-[600px]:w-[98%] max-[600px]:h-[auto] min-[780px]:hidden flex justify-center'>
                        <img src={IMG1} alt="" className='w-[400px] h-auto max-[600px]:w-[90%]' />
                    </div>
                    <div>
                        <div className='w-full flex justify-center'>
                        <div className='<div className=About-sub-h max-[780px]:text-center max-[780px]:mx-auto max-[630px]:text-[25px] mt-[1rem]'>
                         The Story of YR IT SOLUTIONS
                             </div>
                        </div>
                        <div className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed text-center max-w-[90%] mx-auto">
                            YR IT SOLUTIONS is a results-driven tech company that empowers businesses
                            through custom web and mobile apps, digital marketing, and AI-powered tools.
                            We don’t rely on tradition — we solve real problems with smart, scalable,
                            and user-focused tech that delivers clear results.
                        </div>
                        <div className='flex justify-center gap-4 mt-[3rem]'>
                            <div className='btn radius px-[16px] z-[9999] rounded-[8px] h-[43px] w-[fit-content] flex'>
                                <Link to="/ourservices">
                                    Explore our Services
                                </Link>
                            </div>
                            <div className='z-[9999] text-[var(--theme)] border-[var(--theme)] border-[1px] radius px-[16px] rounded-[8px] h-[43px] w-[fit-content] flex justify-center items-center'>
                                <Link to="/contactus">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='max-[780px]:mt-[0rem] max-[630px]:mt-[0rem] max-[513px]:mt-[-4rem]'>
                    <div className='heading text-center mt-[6rem] min-[521px]:mt-0 min-[640px]:mt-[1rem] min-[780px]:mt-[1rem] min-[976px]:mt-[6rem] min-[630px]:mt-[6rem] max-[630px]:text-[25px]'>
                        Some Facts About Us
                    </div>
                    <div className='About-sub4 text-[10px]'>
                        Here are some quick facts about how we consistently deliver exceptional, creative solutions for our clients.
                    </div>
                    <div className='flex justify-center items-center gap-32 mt-10 animatedstats-main'>
                        <div className='About-box-54 flex flex-col justify-center items-center'>
                            <div className='About-sub55 flex'>
                                <AnimatedNumbers
                                    includeComma
                                    transitions={(index) => ({
                                        type: "spring",
                                        duration: index + 5.3,
                                    })}
                                    animateToNumber={1}
                                    fontStyle={{
                                        fontSize: 50,
                                        color: "rgb(0, 0, 0)",
                                        fontWeight: 500,
                                        textAlign: "center",
                                    }}
                                />
                                <span className='text-[var(--theme)]'>&nbsp; year</span>
                            </div>
                            <div className='About-sub-56'>
                                Founded since 2024
                            </div>
                        </div>

                        <div className='About-box-54 flex flex-col justify-center items-center'>
                            <div className='About-sub55 flex'>
                                <AnimatedNumbers
                                    includeComma
                                    transitions={(index) => ({
                                        type: "spring",
                                        duration: index + 5.3,
                                    })}
                                    animateToNumber={50}
                                    fontStyle={{
                                        fontSize: 50,
                                        color: "rgb(0, 0, 0)",
                                        fontWeight: 500,
                                        textAlign: "center",
                                    }}
                                />
                                <span className='text-[var(--theme)]'>+</span>
                            </div>
                            <div className='About-sub-56'>
                                Clients
                            </div>
                        </div>

                        <div className='About-box-54 flex flex-col justify-center items-center'>
                            <div className='About-sub55 flex'>
                                <AnimatedNumbers
                                    includeComma
                                    transitions={(index) => ({
                                        type: "spring",
                                        duration: index + 5.3,
                                    })}
                                    animateToNumber={300}
                                    fontStyle={{
                                        fontSize: 50,
                                        color: "rgb(0, 0, 0)",
                                        fontWeight: 500,
                                        textAlign: "center",
                                    }}
                                />
                                <span className='text-[var(--theme)]'>+</span>
                            </div>
                            <div className='About-sub-56'>
                                Projects Delivered
                            </div>
                        </div>
                    </div>
                </div>

                        <div className='pt-[1rem] mt-[6rem] max-md:mt-[8rem]'>
                        <div className='flex items-center justify-between max-w-[1200px] mx-auto px-4 gap-[2rem] max-[780px]:flex-col max-[780px]:items-center'>

                        <div className='w-[50%] max-[780px]:w-[90%] flex justify-center'>
                         <img src={IMG2} alt="" className='w-full max-w-[600px] h-auto' />
                         </div>
                       <div className='w-[50%] max-[780px]:w-[90%] max-[780px]:mt-6'>
                    <div className='About-sub-h max-[630px]:text-[25px] text-left max-[780px]:text-center'>
                          How Company Started
                         </div>
                     <div className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed text-left max-[780px]:text-center">
                       YR IT SOLUTIONS began with a mission to break away from traditional service models and deliver real results.
                       As a full-scale tech and marketing agency, we provide smart, tailored solutions that fuel growth and solve real challenges.
                       We focus on impact-driven strategies for fast, lasting success.
                    Let’s create something great — get in touch today.
                      </div>
                        </div> 
                        </div>
                       </div>


                <div className="mt-10">
                    <div className='heading max-[630px]:text-[25px]'>
                        OUR VALUES
                    </div>
                    <div className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed text-center max-w-4xl mx-auto px-4">
                        At YR IT SOLUTIONS, our values drive every decision and action — from internal collaboration to client partnerships. We are committed to ethics, integrity, and excellence, ensuring every solution we deliver is built with purpose and professionalism.
                    </div>
                    <div className='flex justify-center items-center gap-[1.5rem] max-[1236px]:gap-[0.4rem] max-[900px]:gap-[1.5rem] mt-10 animatedstats-main '>
                        {data.map((value, index) => (
                            <div key={index} className='w-[291px] max-[1236px]:w-[291px] h-[448px] max-[600px]:h-[100%] max-[600px]:w-[260px] max-[600px]:py-4 About-box-border flex flex-col justify-center items-center'>
                                <div className='flex justify-start items-start w-[80%] mb-3'>
                                    <div className='h-[50px] w-[50px] max-[600px]:h-[40px] max-[600px]:w-[40px] text-left float-left'>
                                        <img src={value.img} alt="" className='w-[30px] h-[30px] float-left text-left max-[600px]:w-[24px] max-[600px]:h-[24px]' />
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center items-center mb-3'>
                                    <div className='w-[229px] text-[36px] card-heading-aboutus max-[1236px]:text-[33px]' style={{
                                        fontWeight: "700",
                                        lineHeight: "56px",
                                        textAlign: "left",
                                    }}>
                                        {value.title}
                                    </div>
                                    <div className='About-sub43 card-heading-aboutus2 font-[400] w-[219px] text-[20px] text-justify max-[1236px]:text-[19px]'>
                                        {value.description}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='mt-[6rem] max-[640px]:mt-[3rem]'>
                    <div className='heading'>
                        The Founding Member YR IT SOLUTIONS
                    </div>
                    <div className='flex justify-center mt-10'>
                        <div className='w-[310px] h-[447px] bg-white border-[2px] border-[#DCDCDC] flex flex-col justify-center items-center'>
                            <div className='w-[249px] h-[280px]'>
                                <img src={G1} alt="" className='rounded-lg w-[249px] h-[260px]' />
                            </div>
                            <div className='px-7 flex flex-col justify-center items-center mt-0'>
                                <div className='' style={{
                                    fontSize: "22px",
                                    fontWeight: "600",
                                    lineHeight: "30px",
                                    textAlign: "center",
                                }}>
                                    Yashika
                                </div>
                                <div className='mt-2' style={{
                                    fontSize: "18px",
                                    fontWeight: "500",
                                    lineHeight: "22px",
                                    textAlign: "center",
                                }}>
                                    CEO, Founder
                                </div>
                                <div className='flex gap-5 justify-center mt-5 items-center cursor-pointer'>
                                    <img src={G4} alt="" onClick={() => { window.location.href = "mailto:yashikasharma1775@gmail.com" }} />
                                    <img src={G5} alt="" onClick={() => { window.location.href = "https://www.linkedin.com/in/yashika-sharma-aa7b26206/" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-[6rem]'>
                    <HaveAQues />
                </div>
            </div>
        </>
    )
}

export default AboutUs
