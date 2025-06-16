import React from 'react'
import "../styles/ContactUs.css"
import "../backend/FirebaseMain"
import { collection, addDoc, getFirestore } from "firebase/firestore";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { messages } from "../helper/Messages"
const ContactUs = () => {

    const notify = (i) => toast(messages[i]);
    const [state, setState] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        cname: "",
        clocation: "",
        services: ""
    })
    const form = React.useRef();
    const sendMessage = async () => {
        emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAIL_PUBLIC_KEY)
            .then((result) => {
                notify(0);
                window.location.href = "/"
            }, (error) => {
                emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE_ID2, process.env.REACT_APP_EMAIL_TEMPLATE_ID2, form.current, process.env.REACT_APP_EMAIL_PUBLIC_KEY2).then((result) => {
                    notify(0);
                    window.location.href = "/"
                }, (error) => {
                    notify(1);
                });
            });
    }

    const handlesubmit = async () => {
        try {
            // console.log(messages)
            if (state.firstName === "" || state.lastName === "" || state.email === "" || state.phoneNumber === "" || state.subject === "" || state.cname === "", state.clocation === "" || state.services === "") {
                notify(2);
                return;
            }
            const db = getFirestore();
            const docRef = await addDoc(collection(db, "ContactUsMessages"), {
                todo: state,
            });
            sendMessage();
            alert("Message Sent Successfully")
            window.location.reload();
        } catch (error) {
            notify(1);
        }
    }

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
            <div className='w-full flex justify-center items-center gap-10 mt-8'>
                <div className='relative'>
                    <div className=' '>
                        <div className='heading'>
                            Contact Us
                        </div>
                        <div className='text-[#6A6A6A]' style={{
                            fontSize: "16px",
                            fontWeight: "400",
                            lineHeight: "27.52px",
                            textAlign: "center",
                        }}>
                            We believe that the success of our company is a result of our clients growth.
                        </div>
                    </div>
                    <div className='h-full mt-[5rem] max-[850px]:mt-[1rem] flex gap-10 max-[1100px]:gap-5 max-[1100px]:px-[1%] bg-white max-[950px]:flex-col max-[950px]:w-[100%]'>
                        <div className='bg-[#4F45EB] text-[var(--bgc)] h-[647px]  w-[491px] radius contact-us-sub-left max-[1100px]:w[40%] max-[1000px]:w[50%] max-[950px]:w[95%] max-[950px]:h-[fit-content]  max-[950px]:ml-[1px] w-full '>
                            <div className='pt-10'>
                                <div className='ml-10' style={{
                                    fontSize: "28px",
                                    fontWeight: "600",
                                    lineHeight: '42px',
                                    textAlign: "left",
                                }}>
                                    Contact Information
                                </div>
                                <div className='text-[#C9C9C9] text-[18px] ml-10 smtext ' style={{
                                    fontWeight: "400",
                                    lineHeight: "27px",
                                    textAlign: "left",

                                }}>
                                    Say something to start a live chat!
                                </div>
                                <div className='mt-[7.5rem] pl-[2rem] max-[950px]:mt-4 flex w-[40%] gap-3 max-[420px]:w-full  textsm '>
                                    <div className='max-[420px]:hidden'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M20 10.999H22C22 5.869 18.127 2 12.99 2V4C17.052 4 20 6.943 20 10.999Z" fill="#F7F6FF" />
                                            <path d="M13 8.00024C15.103 8.00024 16 8.89724 16 11.0002H18C18 7.77524 16.225 6.00024 13 6.00024V8.00024ZM16.422 13.4432C16.2299 13.2686 15.9774 13.1754 15.7178 13.1835C15.4583 13.1915 15.212 13.3001 15.031 13.4862L12.638 15.9472C12.062 15.8372 10.904 15.4762 9.71204 14.2872C8.52004 13.0942 8.15904 11.9332 8.05204 11.3612L10.511 8.96724C10.6975 8.78637 10.8062 8.54006 10.8142 8.28045C10.8222 8.02083 10.7289 7.76828 10.554 7.57624L6.85904 3.51324C6.68408 3.3206 6.44092 3.20374 6.18119 3.1875C5.92146 3.17125 5.66564 3.2569 5.46804 3.42624L3.29804 5.28724C3.12515 5.46075 3.02196 5.69169 3.00804 5.93624C2.99304 6.18624 2.70704 12.1082 7.29904 16.7022C11.305 20.7072 16.323 21.0002 17.705 21.0002C17.907 21.0002 18.031 20.9942 18.064 20.9922C18.3086 20.9786 18.5394 20.8749 18.712 20.7012L20.572 18.5302C20.7415 18.3328 20.8273 18.077 20.8113 17.8173C20.7952 17.5576 20.6785 17.3143 20.486 17.1392L16.422 13.4432Z" fill="#F7F6FF" />
                                        </svg>
                                    </div>

                                    <div className='min-[420px]:hidden'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <path d="M20 10.999H22C22 5.869 18.127 2 12.99 2V4C17.052 4 20 6.943 20 10.999Z" fill="#F7F6FF" />
                                            <path d="M13 8.00024C15.103 8.00024 16 8.89724 16 11.0002H18C18 7.77524 16.225 6.00024 13 6.00024V8.00024ZM16.422 13.4432C16.2299 13.2686 15.9774 13.1754 15.7178 13.1835C15.4583 13.1915 15.212 13.3001 15.031 13.4862L12.638 15.9472C12.062 15.8372 10.904 15.4762 9.71204 14.2872C8.52004 13.0942 8.15904 11.9332 8.05204 11.3612L10.511 8.96724C10.6975 8.78637 10.8062 8.54006 10.8142 8.28045C10.8222 8.02083 10.7289 7.76828 10.554 7.57624L6.85904 3.51324C6.68408 3.3206 6.44092 3.20374 6.18119 3.1875C5.92146 3.17125 5.66564 3.2569 5.46804 3.42624L3.29804 5.28724C3.12515 5.46075 3.02196 5.69169 3.00804 5.93624C2.99304 6.18624 2.70704 12.1082 7.29904 16.7022C11.305 20.7072 16.323 21.0002 17.705 21.0002C17.907 21.0002 18.031 20.9942 18.064 20.9922C18.3086 20.9786 18.5394 20.8749 18.712 20.7012L20.572 18.5302C20.7415 18.3328 20.8273 18.077 20.8113 17.8173C20.7952 17.5576 20.6785 17.3143 20.486 17.1392L16.422 13.4432Z" fill="#F7F6FF" />
                                        </svg>
                                    </div>
                                    <div className='smtext'>
                                        <a href="tel: +917404890806">
                                            +91 7404890806 
                                        </a>
                                    </div>
                                </div>
                                <div className='pl-[2rem] pt-[2.5rem] max-[950px]:pt-2 flex gap-3'>
                                    <div className='max-[420px]:hidden'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M20 10.999H22C22 5.869 18.127 2 12.99 2V4C17.052 4 20 6.943 20 10.999Z" fill="#F7F6FF" />
                                            <path d="M13 8.00024C15.103 8.00024 16 8.89724 16 11.0002H18C18 7.77524 16.225 6.00024 13 6.00024V8.00024ZM16.422 13.4432C16.2299 13.2686 15.9774 13.1754 15.7178 13.1835C15.4583 13.1915 15.212 13.3001 15.031 13.4862L12.638 15.9472C12.062 15.8372 10.904 15.4762 9.71204 14.2872C8.52004 13.0942 8.15904 11.9332 8.05204 11.3612L10.511 8.96724C10.6975 8.78637 10.8062 8.54006 10.8142 8.28045C10.8222 8.02083 10.7289 7.76828 10.554 7.57624L6.85904 3.51324C6.68408 3.3206 6.44092 3.20374 6.18119 3.1875C5.92146 3.17125 5.66564 3.2569 5.46804 3.42624L3.29804 5.28724C3.12515 5.46075 3.02196 5.69169 3.00804 5.93624C2.99304 6.18624 2.70704 12.1082 7.29904 16.7022C11.305 20.7072 16.323 21.0002 17.705 21.0002C17.907 21.0002 18.031 20.9942 18.064 20.9922C18.3086 20.9786 18.5394 20.8749 18.712 20.7012L20.572 18.5302C20.7415 18.3328 20.8273 18.077 20.8113 17.8173C20.7952 17.5576 20.6785 17.3143 20.486 17.1392L16.422 13.4432Z" fill="#F7F6FF" />
                                        </svg>
                                    </div>
                                    <div className='min-[420px]:hidden'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <path d="M20 10.999H22C22 5.869 18.127 2 12.99 2V4C17.052 4 20 6.943 20 10.999Z" fill="#F7F6FF" />
                                            <path d="M13 8.00024C15.103 8.00024 16 8.89724 16 11.0002H18C18 7.77524 16.225 6.00024 13 6.00024V8.00024ZM16.422 13.4432C16.2299 13.2686 15.9774 13.1754 15.7178 13.1835C15.4583 13.1915 15.212 13.3001 15.031 13.4862L12.638 15.9472C12.062 15.8372 10.904 15.4762 9.71204 14.2872C8.52004 13.0942 8.15904 11.9332 8.05204 11.3612L10.511 8.96724C10.6975 8.78637 10.8062 8.54006 10.8142 8.28045C10.8222 8.02083 10.7289 7.76828 10.554 7.57624L6.85904 3.51324C6.68408 3.3206 6.44092 3.20374 6.18119 3.1875C5.92146 3.17125 5.66564 3.2569 5.46804 3.42624L3.29804 5.28724C3.12515 5.46075 3.02196 5.69169 3.00804 5.93624C2.99304 6.18624 2.70704 12.1082 7.29904 16.7022C11.305 20.7072 16.323 21.0002 17.705 21.0002C17.907 21.0002 18.031 20.9942 18.064 20.9922C18.3086 20.9786 18.5394 20.8749 18.712 20.7012L20.572 18.5302C20.7415 18.3328 20.8273 18.077 20.8113 17.8173C20.7952 17.5576 20.6785 17.3143 20.486 17.1392L16.422 13.4432Z" fill="#F7F6FF" />
                                        </svg>
                                    </div>
                                    <div className='smtext' onClick={()=>{window.location.href="mailto:yr.itsolutions.pvtltd@gmail.com"}}>
                                    yr.itsolutions.pvtltd@gmail.com
                                    </div>
                                </div>
                                <div className='pl-[2rem] pt-[2.5rem] max-[950px]:pt-2 flex gap-3'>
                                <div className='max-[420px]:hidden'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M20 10.999H22C22 5.869 18.127 2 12.99 2V4C17.052 4 20 6.943 20 10.999Z" fill="#F7F6FF" />
                                            <path d="M13 8.00024C15.103 8.00024 16 8.89724 16 11.0002H18C18 7.77524 16.225 6.00024 13 6.00024V8.00024ZM16.422 13.4432C16.2299 13.2686 15.9774 13.1754 15.7178 13.1835C15.4583 13.1915 15.212 13.3001 15.031 13.4862L12.638 15.9472C12.062 15.8372 10.904 15.4762 9.71204 14.2872C8.52004 13.0942 8.15904 11.9332 8.05204 11.3612L10.511 8.96724C10.6975 8.78637 10.8062 8.54006 10.8142 8.28045C10.8222 8.02083 10.7289 7.76828 10.554 7.57624L6.85904 3.51324C6.68408 3.3206 6.44092 3.20374 6.18119 3.1875C5.92146 3.17125 5.66564 3.2569 5.46804 3.42624L3.29804 5.28724C3.12515 5.46075 3.02196 5.69169 3.00804 5.93624C2.99304 6.18624 2.70704 12.1082 7.29904 16.7022C11.305 20.7072 16.323 21.0002 17.705 21.0002C17.907 21.0002 18.031 20.9942 18.064 20.9922C18.3086 20.9786 18.5394 20.8749 18.712 20.7012L20.572 18.5302C20.7415 18.3328 20.8273 18.077 20.8113 17.8173C20.7952 17.5576 20.6785 17.3143 20.486 17.1392L16.422 13.4432Z" fill="#F7F6FF" />
                                        </svg>
                                    </div>

                                    <div className='min-[420px]:hidden'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <path d="M20 10.999H22C22 5.869 18.127 2 12.99 2V4C17.052 4 20 6.943 20 10.999Z" fill="#F7F6FF" />
                                            <path d="M13 8.00024C15.103 8.00024 16 8.89724 16 11.0002H18C18 7.77524 16.225 6.00024 13 6.00024V8.00024ZM16.422 13.4432C16.2299 13.2686 15.9774 13.1754 15.7178 13.1835C15.4583 13.1915 15.212 13.3001 15.031 13.4862L12.638 15.9472C12.062 15.8372 10.904 15.4762 9.71204 14.2872C8.52004 13.0942 8.15904 11.9332 8.05204 11.3612L10.511 8.96724C10.6975 8.78637 10.8062 8.54006 10.8142 8.28045C10.8222 8.02083 10.7289 7.76828 10.554 7.57624L6.85904 3.51324C6.68408 3.3206 6.44092 3.20374 6.18119 3.1875C5.92146 3.17125 5.66564 3.2569 5.46804 3.42624L3.29804 5.28724C3.12515 5.46075 3.02196 5.69169 3.00804 5.93624C2.99304 6.18624 2.70704 12.1082 7.29904 16.7022C11.305 20.7072 16.323 21.0002 17.705 21.0002C17.907 21.0002 18.031 20.9942 18.064 20.9922C18.3086 20.9786 18.5394 20.8749 18.712 20.7012L20.572 18.5302C20.7415 18.3328 20.8273 18.077 20.8113 17.8173C20.7952 17.5576 20.6785 17.3143 20.486 17.1392L16.422 13.4432Z" fill="#F7F6FF" />
                                        </svg>
                                    </div>
                                    <div className='pr-[40%] smtext'>
                                        Gurugram, Haryana
                                    </div>
                                </div>
                                <div className='max-[950px]:mt-[7rem] '>
                                    <div className='flex absolute max-[950px]:relative  bottom-16 max-[950px]:justify-start  gap-2 left-5 justify-center items-center max-[920px]:w-[90%]'>
                                        <div className=' p-1 rounded-full cursor-pointer hover:text-black' onClick={()=>{window.location.href="https://www.linkedin.com/in/yr-it-solutions-08892036b/"}}>
                                            <svg fill="white" width="30px" height="30px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke="#0055ff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Linkedln"> <path d="M26.49,30H5.5A3.35,3.35,0,0,1,3,29a3.35,3.35,0,0,1-1-2.48V5.5A3.35,3.35,0,0,1,3,3,3.35,3.35,0,0,1,5.5,2h21A3.35,3.35,0,0,1,29,3,3.35,3.35,0,0,1,30,5.5v21A3.52,3.52,0,0,1,26.49,30ZM9.11,11.39a2.22,2.22,0,0,0,1.6-.58,1.83,1.83,0,0,0,.6-1.38A2.09,2.09,0,0,0,10.68,8a2.14,2.14,0,0,0-1.51-.55A2.3,2.3,0,0,0,7.57,8,1.87,1.87,0,0,0,7,9.43a1.88,1.88,0,0,0,.57,1.38A2.1,2.1,0,0,0,9.11,11.39ZM11,13H7.19V24.54H11Zm13.85,4.94a5.49,5.49,0,0,0-1.24-4,4.22,4.22,0,0,0-3.15-1.27,3.44,3.44,0,0,0-2.34.66A6,6,0,0,0,17,14.64V13H13.19V24.54H17V17.59a.83.83,0,0,1,.1-.43,2.73,2.73,0,0,1,.7-1,1.81,1.81,0,0,1,1.28-.44,1.59,1.59,0,0,1,1.49.75,3.68,3.68,0,0,1,.44,1.9v6.15h3.85ZM17,14.7a.05.05,0,0,1,.06-.06v.06Z"></path> </g> </g></svg>
                                        </div>
                                        <div className=' p-1 rounded-full  cursor-pointer  hover:text-black'>
                                            <svg width="28px" height="28px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint0_radial_87_7153)"></rect> <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint1_radial_87_7153)"></rect> <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint2_radial_87_7153)"></rect> <path d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z" fill="white"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z" fill="white"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z" fill="white"></path> <defs> <radialGradient id="paint0_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)"> <stop stop-color="#B13589"></stop> <stop offset="0.79309" stop-color="#C62F94"></stop> <stop offset="1" stop-color="#8A3AC8"></stop> </radialGradient> <radialGradient id="paint1_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)"> <stop stop-color="#E0E8B7"></stop> <stop offset="0.444662" stop-color="#FB8A2E"></stop> <stop offset="0.71474" stop-color="#E2425C"></stop> <stop offset="1" stop-color="#E2425C" stop-opacity="0"></stop> </radialGradient> <radialGradient id="paint2_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)"> <stop offset="0.156701" stop-color="#406ADC"></stop> <stop offset="0.467799" stop-color="#6A45BE"></stop> <stop offset="1" stop-color="#6A45BE" stop-opacity="0"></stop> </radialGradient> </defs> </g></svg>
                                        </div>
                                        <div className=' p-1 rounded-full cursor-pointer  hover:text-black'>
                                            <svg width="24px" height="24px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="white"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Facebook-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Color-" transform="translate(-200.000000, -160.000000)" fill="white"> <path d="M225.638355,208 L202.649232,208 C201.185673,208 200,206.813592 200,205.350603 L200,162.649211 C200,161.18585 201.185859,160 202.649232,160 L245.350955,160 C246.813955,160 248,161.18585 248,162.649211 L248,205.350603 C248,206.813778 246.813769,208 245.350955,208 L233.119305,208 L233.119305,189.411755 L239.358521,189.411755 L240.292755,182.167586 L233.119305,182.167586 L233.119305,177.542641 C233.119305,175.445287 233.701712,174.01601 236.70929,174.01601 L240.545311,174.014333 L240.545311,167.535091 C239.881886,167.446808 237.604784,167.24957 234.955552,167.24957 C229.424834,167.24957 225.638355,170.625526 225.638355,176.825209 L225.638355,182.167586 L219.383122,182.167586 L219.383122,189.411755 L225.638355,189.411755 L225.638355,208 L225.638355,208 Z" id="Facebook"> </path> </g> </g> </g></svg>
                                        </div>
                                        <div className='p-1 rounded-full cursor-pointer  hover:text-black'>
                                            <svg width="24px" height="24px" viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="white" />
                                            </svg>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <form ref={form} className='max-[950px]:mt-[1rem]'>
                            <div className='w-[611px] max-[1100px]:w-[60%] max-[1100px]:w-[50%] flex flex-col gap-10 h-[647px] max-[1000px]:h-full mt-10 max-[950px]:mt-0 relative max-[950px]:justify-center bg-refd-500 items-center max-[420px]:items-start max-[950px]:w-full max-[950px]:p-10 max-[1100px]:ml-[20%] max-[950px]:ml-0'>
                                <div className='flex gap-[2rem] contact-part1 max-[950px]:flex-col  '>
                                    <div className='flex flex-col w-[278px]'>
                                        <label>
                                            First Name
                                        </label>
                                        <input name="firstName" className='' placeholder='John' value={
                                            state.firstName
                                        } onChange={
                                            (e) => {
                                                setState((prev) => ({
                                                    ...prev,
                                                    firstName: e.target.value
                                                }))
                                            }
                                        } />
                                    </div>
                                    <div className='flex flex-col w-[278px]'>
                                        <label>
                                            Last Name
                                        </label>
                                        <input className='' placeholder='Doe' value={
                                            state.lastName
                                        } onChange={
                                            (e) => {
                                                setState((prev) => ({
                                                    ...prev,
                                                    lastName: e.target.value
                                                }))
                                            }
                                        }
                                            name="lastName"
                                        />
                                    </div>
                                </div>
                                <div className='flex gap-[2rem] contact-part1 max-[950px]:flex-col'>
                                    <div className='flex flex-col w-[278px]'>
                                        <label>
                                            Company Name
                                        </label>
                                        <input className='' placeholder='Business Name'
                                            value={
                                                state.cname
                                            } onChange={
                                                (e) => {
                                                    setState((prev) => ({
                                                        ...prev,
                                                        cname: e.target.value
                                                    }))
                                                }
                                            }
                                            name="cname"
                                        />
                                    </div>
                                    <div className='flex flex-col w-[278px] max-[950px]:flex-col'>
                                        <label>
                                            Company Location/URL
                                        </label>
                                        <input className='' type="text" placeholder='https://example.xxx'
                                            value={
                                                state.clocation
                                            } onChange={
                                                (e) => {
                                                    setState((prev) => ({
                                                        ...prev,
                                                        clocation: e.target.value
                                                    }))
                                                }
                                            }
                                            name="clocation"
                                        />
                                    </div>
                                </div>

                                <div className='flex gap-[2rem] contact-part1 max-[950px]:flex-col'>
                                    <div className='flex flex-col w-[278px]'>
                                        <label>
                                            Company Email
                                        </label>
                                        <input className='' placeholder='example@email.com'
                                            value={
                                                state.email
                                            } onChange={
                                                (e) => {
                                                    setState((prev) => ({
                                                        ...prev,
                                                        email: e.target.value
                                                    }))

                                                }
                                            }
                                            name="email"
                                        />
                                    </div>
                                    <div className='flex flex-col w-[278px]'>
                                        <label>
                                            Phone Number
                                        </label>
                                        <input className='' type="number" placeholder='+1 0123456789'
                                            value={
                                                state.phoneNumber
                                            } onChange={
                                                (e) => {
                                                    setState((prev) => ({
                                                        ...prev,
                                                        phoneNumber: e.target.value
                                                    }))
                                                }
                                            }
                                            name="phoneNumber"
                                        />
                                    </div>
                                </div>
                                <div className='text-[var(--theme)] max-[420px]:w-full'>
                                    Services:
                                    <div className='contact-part1 flex justify-left justify-start gap-6 max-[420px]:gap-2 max-[420px]:w-full max-[420px]:items-start items-center mt-5 max-[950px]:flex-col'>
                                        <div className='flex justify-center gap-2 items-center  '>
                                            <input type="radio" name="radioform" value="Web Development" className='mt-[-10px]' onClick={
                                                (e) => {
                                                    setState((prev) => ({
                                                        ...prev,
                                                        services: e.target.value
                                                    }))
                                                }
                                            }
                                            />
                                            <label>Web Development</label>
                                        </div>
                                        <div className='flex justify-center gap-2 items-center'>
                                            <input type="radio" name="radioform" value="App Development" className='mt-[-10px]'
                                                onClick={
                                                    (e) => {
                                                        setState((prev) => ({
                                                            ...prev,
                                                            services: e.target.value
                                                        }))
                                                    }}
                                            />
                                            <label>App Development</label>
                                        </div>
                                        <div className='flex justify-center gap-2 items-center'>
                                            <input type="radio" name="radioform" value="Digital Marketing" className='mt-[-10px]'
                                                onClick={
                                                    (e) => {
                                                        setState((prev) => ({
                                                            ...prev,
                                                            services: e.target.value
                                                        }))
                                                    }}
                                            />
                                            <label>Digital Marketing</label>
                                        </div>
                                        <div className='flex justify-center gap-2 items-center'>
                                            <input type="radio" name="radioform" value="UI/UX Development" className='mt-[-10px]'
                                                onClick={
                                                    (e) => {
                                                        setState((prev) => ({
                                                            ...prev,
                                                            services: e.target.value
                                                        }))
                                                    }}
                                            />
                                            <label>UI/UX Development</label>
                                        </div>
                                    </div>
                                </div>
                                <div className=' flex justify-end items-end max-[900px]:items-start max-[900px]:justify-senter w-[95%] max-[1100px]:justify-center'>
                                    <div className='btn h-[54px] w-[214px] max-[1000px]:h-[33px] cursor-pointer'
                                        onClick={
                                            () => {
                                                handlesubmit();
                                            }
                                        }
                                    >
                                        Send Message
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs