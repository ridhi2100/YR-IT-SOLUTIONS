import React from 'react'
import Logo from '../assets/Logo.png'
import "../styles/Navbar.css"
import X from "../assets/Xlogo.png"
import { Link } from 'react-router-dom'
const Navbar = ({ state, setState,setshow, show }) => {
    // (window.location.pathname);console.log
    const [loc, changeloc] = React.useState("/")
    React.useEffect(() => {
        changeloc(window.location.pathname); if (loc === "/") setState(0);
        if (loc === "/aboutus") setState(1);
        if (loc === "/ourservices") setState(2);
        if (loc === "/pricing") setState(3);
        if (loc === "/contactus") setState(4);
    }, [loc])
    return (
        <>
            <div className={`${show ? "" : "hidden"} z-[99999999] absolute h-full w-[100vw] navbar-back`} onClick={()=>{setshow(false)}}>

            </div>
            <div className='z-[999999999] w-full h-[74px] flex justify-evenly max-[640px]:relative items-center '>
                <div className='flex gap-[160px] max-[640px]:gap-0 max-[640px]:ml-2'>
                    <img src={Logo} className='h-[34px] cursor-pointer' />
                </div>
                <div className='w-[69%] ml-[9%]  min-[640px]:hidden cursor-pointer relative'>
                    <div className='float-right' onClick={
                        () => {
                            setshow(!show);
                        }
                    }>
                        <svg width="39px" height="39px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="#5543e5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </div>
                    <div className={`absolute h-[100vh] ${show ? "nav-side-main-sub1" : "nav-side-main-sub2"} w-[300px] bg-white border-[var(--theme)] border-[2px] mt-[-1.1rem] float-right right-0`}>
                        {/* Side Nav Bar */}
                        <div className='max-[640px]'>
                        <div className='mt-2'>
                        <div className='px-[12px] max-[415px]:px-6px nav-side-contact py-[9px]  min-w-[fit-content] mt-2 cursor cursor-pointer' onClick={() => {
                                        // add calling function
                                        window.location.href = 'tel:+917404890806';

                                    }}><span className='max-[515px]:hidden'>Tel No. : </span>+917404890806</div>
                        </div>
                            <div className='flex flex-col gap-[10px] mt-[3rem] pll-4'>
                                <div className={`float-right ${show ? "" : "hidden"} absolute right-2  top-2`} onClick={
                                    () => {
                                        setshow(!show);
                                    }
                                }>
                                    <svg width="39px" height="39px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="#5543e5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                </div>
                                <div className='flex-col flex gap-0 text-[2rem]'>
                                    <div className={`hover:text-[var(--theme)] ${state === 0 ? "active-color nav-boxes text-[22px]" : "text-[16px] nav-boxes-inactive"} cursor-pointer`} onClick={() => {setState(0);setshow(false)}}><Link to="/">
                                        Home
                                    </Link></div>
                                    <div className={`cursor-pointer hover:text-[var(--theme)] ${state === 1 ? "active-color nav-boxes text-[22px]" : "text-[16px] nav-boxes-inactive"}`} onClick={() => {setState(1);setshow(false)}}><Link to="/aboutus">
                                        About Us

                                    </Link></div>
                                    <div className={`cursor-pointer hover:text-[var(--theme)] ${state === 2 ? "active-color nav-boxes text-[22px]" : "text-[16px] nav-boxes-inactive"}`} onClick={() => {setState(2);setshow(false)}}><Link to="/ourservices">
                                        Services
                                    </Link></div>
                                    <div className={`cursor-pointer hover:text-[var(--theme)] ${state === 3 ? "active-color nav-boxes text-[22px]" : "text-[16px] nav-boxes-inactive"}`} onClick={() => {setState(3);setshow(false)}}><Link to="/pricing">
                                        Pricing
                                    </Link></div>
                                    <div className={`cursor-pointer hover:text-[var(--theme)] ${state === 4 ? "active-color nav-boxes text-[22px]" : "text-[16px] nav-boxes-inactive"}`} onClick={() => {setState(4);setshow(false)}}><Link to="/contactus">
                                        Contact
                                    </Link></div>
                                </div>
                                {/* <div className='mt-4 flex gap-4 flex-col justify-center items-center'>
                                    <div className='px-[12px] nav-side-contact py-[9px] gap-[10px] cursor cursor-pointer' onClick={() => {
                                        // add calling function
                                        window.location.href = 'tel:+919876543210';

                                    }}>Tel No. : +91 9876543210</div>
                                    <div className='radius nav-meeting-btn text-[white] bg-black px-[19px] py-[9px]' onClick={() => {
                                        window.location.href = 'meetingform'
                                    }}>Schedule Meeting</div>
                                </div>
                                
                                <div className='nav-bottom-box-side justify-center items-center'>
                                    <div className='flex justify-center'>
                                        <img src={Logo} alt='Logo' className='h-[34px]' />
                                    </div>
                                    <div className='footer-content mt-[2rem] max-[500px]:mt-4'>
                                        We built an elegant solution. Our team believe that the success of our company is a result of our clients growth.
                                    </div>
                                    <div className='flex w-full justify-evenly'>
                                    <div className='flex gap-4 mt-4 w-full justify-evenly'>
                                        <div className='  rounded-sm -full pt-[0px] px-[3px]'>
                                            <svg fill="#0055ff" width="30px" height="30px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke="#0055ff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Linkedln"> <path d="M26.49,30H5.5A3.35,3.35,0,0,1,3,29a3.35,3.35,0,0,1-1-2.48V5.5A3.35,3.35,0,0,1,3,3,3.35,3.35,0,0,1,5.5,2h21A3.35,3.35,0,0,1,29,3,3.35,3.35,0,0,1,30,5.5v21A3.52,3.52,0,0,1,26.49,30ZM9.11,11.39a2.22,2.22,0,0,0,1.6-.58,1.83,1.83,0,0,0,.6-1.38A2.09,2.09,0,0,0,10.68,8a2.14,2.14,0,0,0-1.51-.55A2.3,2.3,0,0,0,7.57,8,1.87,1.87,0,0,0,7,9.43a1.88,1.88,0,0,0,.57,1.38A2.1,2.1,0,0,0,9.11,11.39ZM11,13H7.19V24.54H11Zm13.85,4.94a5.49,5.49,0,0,0-1.24-4,4.22,4.22,0,0,0-3.15-1.27,3.44,3.44,0,0,0-2.34.66A6,6,0,0,0,17,14.64V13H13.19V24.54H17V17.59a.83.83,0,0,1,.1-.43,2.73,2.73,0,0,1,.7-1,1.81,1.81,0,0,1,1.28-.44,1.59,1.59,0,0,1,1.49.75,3.68,3.68,0,0,1,.44,1.9v6.15h3.85ZM17,14.7a.05.05,0,0,1,.06-.06v.06Z"></path> </g> </g></svg>
                                        </div>
                                        <div className=' rounded-full p-[3px]'>
                                            <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#0F0F0F"></path> <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#0F0F0F"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#0F0F0F"></path> </g></svg>
                                        </div>
                                        <div className='rounded-full p-[3px]'>
                                            <svg width="24px" height="24px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Facebook-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Color-" transform="translate(-200.000000, -160.000000)" fill="#4460A0"> <path d="M225.638355,208 L202.649232,208 C201.185673,208 200,206.813592 200,205.350603 L200,162.649211 C200,161.18585 201.185859,160 202.649232,160 L245.350955,160 C246.813955,160 248,161.18585 248,162.649211 L248,205.350603 C248,206.813778 246.813769,208 245.350955,208 L233.119305,208 L233.119305,189.411755 L239.358521,189.411755 L240.292755,182.167586 L233.119305,182.167586 L233.119305,177.542641 C233.119305,175.445287 233.701712,174.01601 236.70929,174.01601 L240.545311,174.014333 L240.545311,167.535091 C239.881886,167.446808 237.604784,167.24957 234.955552,167.24957 C229.424834,167.24957 225.638355,170.625526 225.638355,176.825209 L225.638355,182.167586 L219.383122,182.167586 L219.383122,189.411755 L225.638355,189.411755 L225.638355,208 L225.638355,208 Z" id="Facebook"> </path> </g> </g> </g></svg>
                                        </div>
                                        <div className='rounded-full p-[3px]'>
                                            <img src={X} alt='X' className='h-[24px]' />
                                        </div>
                                    </div>
                                </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex w-[50%] justify-evenly h-[26px] text-[16px] font-[500] max-[640px]:hidden'>
                    <div className={`${state === 0 ? "active-color" : ""} cursor-pointer`} onClick={() => setState(0)}><Link to="/">
                        Home
                    </Link></div>
                    <div className={`text-[16px] cursor-pointer ${state === 1 ? "active-color" : ""}`} onClick={() => setState(1)}><Link to="/aboutus">
                        About

                    </Link></div>
                    <div className={`text-[16px] cursor-pointer ${state === 2 ? "active-color" : ""}`} onClick={() => setState(2)}><Link to="/ourservices">
                        Services
                    </Link></div>
                    <div className={`text-[16px] cursor-pointer ${state === 3 ? "active-color" : ""}`} onClick={() => setState(3)}><Link to="/pricing">
                        Pricing
                    </Link></div>
                    <div className={`text-[16px] cursor-pointer ${state === 4 ? "active-color" : ""}`} onClick={() => setState(4)}><Link to="/contactus">
                        Contact
                    </Link></div>
                </div>
                <div className='flex gap-[23px]'>
                    <div className='btn px-[12px] py-[9px] gap-[10px] cursor cursor-pointer max-[640px]:hidden   ' onClick={() => {
                        // add calling function
                        window.location.href = 'tel:+917404890806';

                    }}>+91 7404890806 </div>
                    <div className='radius text-[white] bg-black px-[19px] py-[9px] max-[940px]:hidden' onClick={() => {
                        window.location.href = 'meetingform'
                    }}>Schedule Meeting</div>
                </div>
            </div>
        </>
    )
}

export default Navbar