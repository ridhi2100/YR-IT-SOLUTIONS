import React from 'react'
import Pricing from './Pricing'
import "../styles/PricingMain.css"
import OK from "../assets/Vector.png"
import IMG from "../assets/image11.png"
import NOK from "../assets/Vector2.png"
import ClientReview from './ClientReview'
import { Link } from 'react-router-dom'

const PricingMain = () => {
    const datad = [
        {
            heading: "Maximize your potential with our tailored solutions.",
            img: IMG,
            desc: "We at YR IT SOLUTIONS hold pride in our ability to maximize app performance and achieve goals like no other. Completely measurable results for achieving App Installs, User Acquisition & Increased app rating",
            link: "#"
        },
    ]

    const data = [
        { name: "Highly vetted individual or teams", ok: 1 },
        { name: "$$", ok: 1 },
        { name: "Scale up and down at your own pace", ok: 1 },
        { name: "We police process and standards", ok: 1 },
        { name: "Aloa's data backed insights", ok: 1 },
        { name: "Scale up and down at your own pace", ok: 1 },
        { name: "Developer replacement guarantee", ok: 1 },
    ]
    const data2 = [...data]
    const data3 = [
        { name: "Find and qualify your own team", ok: 1 },
        { name: "$$", ok: 1 },
        { name: "Scaling means re-onboarding", ok: 0 },
        { name: "You police their processes", ok: 0 },
        { name: "It's you vs them", ok: 0 },
        { name: "Scaling means re-onboarding", ok: 0 },
        { name: "It's the same as starting over", ok: 0 },
    ]
    const data4 = [
        { name: "Find and qualify your own team", ok: 1 },
        { name: "$$$$", ok: 0 },
        { name: "Scale without vetting again", ok: 0 },
        { name: "You police their processes", ok: 0 },
        { name: "It's you vs them", ok: 0 },
        { name: "Scale without vetting again", ok: 0 },
        { name: "It's the same as starting over", ok: 0 },
    ]

    const allColumns = [data, data2, data3, data4]
    const headings = ["", "YR IT SOLUTIONS", "Marketplace", "Agency"]

    return (
        <>
            <div>
                <Pricing />

                {/* Contact CTA */}
                <div className='radius flex mt-[2rem] items-center justify-center'>
                    <Link to="/contactus" className='w-[865px]'>
                        <div className='rounded-xl h-[84px] max-[500px]:h-[50px] w-full pricingM-sub bg-white max-[1000px]:bg-[var(--theme)] max-[1000px]:text-white max-[1000px]:font-semibold hover:bg-[var(--theme)] hover:text-white hover:cursor-pointer text-[#060336] text-center justify-center items-center flex text-[28px] max-[1000px]:hover:bg-white max-[1000px]:hover:text-[var(--theme)]'>
                            Need a Customized Plan? Please Contact Us
                        </div>
                    </Link>
                </div>

                {/* Subheading */}
                <div className='w-full flex justify-center items-center mt-6'>
                    <div className='w-[718px] flex justify-center items-center'>
                        <div className='pricingM-sub2 text-center'>
                            We took the best parts of an agency and freelance marketplace
                        </div>
                    </div>
                </div>

                {/* Table with Horizontal Scroll for Mobile */}
                <div className='mt-[4rem] overflow-x-auto w-full'>
                    <div className='min-w-[1200px] w-fit mx-auto px-[3rem]'>
                        <div className='flex gap-4'>

                            {allColumns.map((column, colIdx) => (
                                <div
                                    key={colIdx}
                                    className={`w-[325px] pt-10 
                                                ${colIdx !== 0 ? 'bg-white shadow-lg' : ''}`}
                                >
                                    <div className='text-center mb-[2.8rem] text-[20px] font-bold h-[24px]'>
                                        {headings[colIdx]}
                                    </div>

                                    <div className='flex flex-col gap-[2.2rem] w-[322px] mx-auto'>
                                        {column.map((item, rowIdx) => (
                                            <div key={rowIdx} className='flex items-center pl-3 gap-4'>
                                                <div className='w-[28px] h-[28px]'>
                                                    <img src={item.ok ? OK : NOK} alt="" className='w-[28px] h-[28px]' />
                                                </div>
                                                <div className='pricingM-sub-txt'>{item.name}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom CTA Section - Centered in Phone */}
                <div className='mt-[4rem]'>
                    <div className='flex justify-center'>
                        <div className='w-[80%] max-[1100px]:w-[90%] max-[860px]:w-[97%]'>
                            {datad.map((item, index) => (
                                <div
                                    key={index}
                                    className={`flex ${index % 2 === 1 ? 'flex-row-reverse' : ''} gap-12 w-full mb-[10rem] max-[780px]:flex-col max-[780px]:items-center`}
                                >
                                    <div className='h-[408px] w-[490px] max-[600px]:w-[98%] max-[600px]:h-[auto]'>
                                        <img src={item.img} alt="" className='h-[408px] w-[490px] max-[600px]:w-[98%] max-[600px]:h-[auto]' />
                                    </div>
                                    <div className='flex flex-col w-[601px] max-[600px]:w-[98%] max-[600px]:items-center text-center'>
                                        <div className='text-[25px] text-[var(--theme)] max-[630px]:text-[20px]'>
                                            Own an App? Grow like Crazy with us.
                                        </div>
                                        <div className='text-[35px] max-[630px]:text-[25px] font-semibold'>
                                            <p>{item.heading}</p>
                                        </div>
                                        <div className='text-justify pt-3 pricingM-subpart3 max-[600px]:text-center'>
                                            {item.desc}
                                        </div>
                                        <div className='flex gap-6 flex-wrap justify-center'>
                                            <div className='btn mt-10 h-[57px] w-[228px] text-[20px] px-[16px]'>
                                                <a href="https://wa.me/7404890806" target="_blank" rel="noopener noreferrer">Chat With Us</a>
                                            </div>
                                            <div className='radius pricingM-btn2 mt-10 h-[57px] w-[228px] text-[20px] px-[16px]'>
                                                <Link to="/contactus">Send Enquiry</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Review Section */}
                <div className='max-[505px]:mt-[-13rem] max-[705px]:mt-[-8rem]'>
                    <ClientReview />
                </div>
            </div>
        </>
    )
}

export default PricingMain
