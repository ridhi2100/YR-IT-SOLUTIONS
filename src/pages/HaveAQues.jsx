import React from 'react'
import PI from "../assets/PI12.png"
import { Link } from 'react-router-dom'

const HaveAQues = () => {
    return (
        <>
            <div className=' max-[1236px]:ml-10 max-[800px]:ml-0 flex justify-center items-center mb-[10rem] max-[500px]:mb-[17rem] max-[780px]:mb-[22rem]'>
                <div className='h-[405px] flex  max-[780px]:flex-col max-[780px]:items-center '>
                    <div className='h-[405px] w-[608px] max-md:justify-center max-md:items-center max-md:flex max-[600px]:w-[98%]  max-[1085px]:w-[100%] max-[600px]:h-[auto]'>
                        <img src={PI} alt="" className='h-[405px] w-[608px] max-[600px]:w-[98%] max-[600px]:h-[auto] max-[1085px]:w-[100%]' />
                    </div>
                    <div className='px-10 max-[1240px]:px-0 max-[600px]:px-10 py-6 max-[600px]:py-1'>
                        <div className='pricingM-right-box2 p-4'>
                            <div className='text-[var(--theme)] text-[25px] mt-2 max-[630px]:text-[23px]'>
                                Have a question?
                            </div>
                            <div className='mt-4 max-[600px]:mt-1 haveaques-head' style={{

                            }}>
                                Contact Us
                            </div>
                            <div className='haveaques-head-sub' style={{
                                fontSize: "20px",
                                fontWeight: "400",
                                lineHeight: "32px",
                                textAlign: "justified",
                                color: "#6A6A6A",

                            }}>
                                We just do more than just connect with the clients, we relate to their business and try to provide them with the best possible and also cost-effective solution.
                            </div>
                            <div className='btn px-16 h-[57px] rounded-[8px] txet-[20px] w-[fit-content] mt-7'>
                                <Link to="/meetingform">
                                    Schedule a Meeting
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HaveAQues