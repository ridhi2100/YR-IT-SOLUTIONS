import React from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';
import { collection, addDoc, getFirestore } from "firebase/firestore";
import "../styles/MeetingCalender.css"
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { messages } from '../helper/Messages';
const MeetingCalender = () => {

    const dates = ["9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 AM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM"]
    const [date, setDate] = useState(new Date());
    const [selected, setSelected] = useState(-1);
    const [duration, setDuration] = useState("302 minutes");
    const form = React.useRef();
    const notify = (i) => toast(messages[i]);
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        company: ""
    })
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

    const handleSubmit = async () => {
        if (state.firstName === "" || state.lastName == "" || state.phone === "" || state.email == "" || state.company === "") {
            notify(2);
            return;
        }
        try {
            const db = getFirestore();
            const docRef = await addDoc(collection(db, "Scheduled Meetings"), {
                info: state,
                timing: dates[selected],
                date: date.toDateString(),
                duration: duration
            });
            sendMessage();
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
            <div className=''>
                <div className=''>

                </div>
            </div>
            <div className='w-full flex justify-center items-center mt-[2rem] mb-[3rem]'>

                <div className='flex justify-evenly cal-par-box max-[560px]:w-full max-[560px]:overflow-x-hidden'>
                    <div className='bg-[#494E7F] pb-[3rem] px-4 max-[560px]:pl-[6%] flex justify-center flex-col items-center'>
                        <div className='text-[35px] max-[560px]:text-[27px] max-[560px]:mt-2 text-white justify-center align-middle pb-8  text-center font-semibold'>
                            <div className=''>
                                YR IT SOLUTIONS
                            </div>
                            Request a Meeting with YR IT SOLUTIONS
                        </div>
                        <div className='calendar-container'>
                            <Calendar onChange={setDate} value={date} />
                        </div>
                    </div>
                    <div className=' max-[1000px]:hidden h-full font-semibold px-[3rem] text-center'>
                        <div className='text-[2rem]'>
                            Meeting Timings
                        </div>
                        <div className='btn mt-4 py-2 cursor-pointer ' onClick={
                            () => {
                                if (selected === -1) {
                                    alert("Please select a time slot && duration")
                                    return
                                }
                                // scroll down
                                document.querySelector('.form-schedule-main-box').scrollIntoView({ behavior: 'smooth' });
                            }
                        }>
                            Continue -&gt;
                        </div>
                        <div className=' mt-2 flex w-full justify-evenly items-center '>
                            <div className={`border-xl border-black border rounded-md py-1 ${duration === "30 minutes" ? "btn" : ""} px-2 w-[100px] cursor-pointer`} onClick={() => {
                                setDuration("30 minutes")
                            }}>
                                30 min
                            </div>
                            <div className={`border-xl border-black border rounded-md py-1 w-[100px] ${duration === "1 hour" ? "btn" : ""} cursor-pointer`} onClick={() => {
                                setDuration("1 hour")
                            }}>
                                1 hr
                            </div>
                        </div>
                        <div className=' font-semibold mt-3 text-left'>
                            What time works best
                        </div>
                        <div className='text-left'>
                            Selected time: <span className='text-[var(--theme)] '>
                                {date.toDateString()}
                            </span>
                        </div>
                        <div className='text-[var(--theme)] mb-6 text-left'>
                            UTC +5:30 India Standard Time
                        </div>
                        <div className='flex flex-col gap-3 max-h-[30rem] overflow-scroll '>
                            {dates.map((item, index) => {
                                return (
                                    <div className={` cursor-pointer px-[6rem] py-[0.2rem] text-center text-[20px] border-[var(--theme)] border-[1px] ${selected === index ? 'bg-[var(--theme)] text-white' : ""}`} onClick={
                                        () => {
                                            setSelected(index)
                                        }
                                    }>
                                        {item}
                                    </div>
                                )
                            }
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className='min-[1000px]:hidden w-[fit-content] text-[2rem] max-[1000px]:text-[1.5rem] max-[790px]:text-[1.3rem] font-semibold ml-[2%] mb-[10px]'>
                Select Meeting Timimgs:
            </div>
            <div className=' min-[1000px]:hidden overflow-y-hidden max-[500px] mx-6 flex relative flex-row gap-3 max-h-[10rem] overflow-x-scroll items-center '>
                {dates.map((item, index) => {
                    return (
                        <div className={`h-[3rem] max-[500px]:text-[15px] max-[500px]:h-[2rem] max-[500px]:pt-1 min-w-[20%] pt-2 cursor-pointer px-[0rem] py-[0.0rem] text-center text-[20px] border-[var(--theme)] border-[1px] ${selected === index ? 'bg-[var(--theme)] text-white' : ""}`} onClick={
                            () => {
                                setSelected(index)
                            }
                        }>
                            {item}
                        </div>
                    )
                }
                )}
            </div>
            <div className=' min-[1000px]:hidden ml-[2%] flex items-baseline gap-4 justify-start '>
                <div className='min-w-[10rem] w-[fit-content] text-[2rem] max-[1000px]:text-[1.5rem] max-[790px]:text-[1.3rem]'>
                    Meeting Duration:
                </div>
                <div className=' mt-2 gap-2 flex w-[fit-content] justify-evenly items-center '>
                    <div className={` mt-4 py-2 max-[500px]:h-[fit-content] max-[500px]:text-[17px] max-[500px]:py-1 cursor-pointer h-[3rem] min-w-[20%] pt-2 px-[0rem] text-center text-[20px] ${duration === "30 minutes" ? "btn" : "border border-black rounded-md border-sm"} px-2 w-[100px] cursor-pointer`} onClick={() => {
                        setDuration("30 minutes")
                    }}>
                        30 min
                    </div>
                    <div className={` mt-4 py-2 max-[500px]:h-[fit-content] max-[500px]:text-[17px] max-[500px]:py-1  cursor-pointer h-[3rem] min-w-[20%] pt-2 px-[0rem] text-center text-[20px]border-xl border-black border rounded-md py-1 w-[100px] ${duration === "1 hour" ? "btn" : ""} cursor-pointer`} onClick={() => {
                        setDuration("1 hour")
                    }}>
                        1 hr
                    </div>
                </div>
            </div>
            <div className=' min-[1000px]:hidden text-center mt-[1rem]'>

                <div className='text-center'>
                    Selected time: <span className='text-[var(--theme)] '>
                        {date.toDateString()}
                    </span>
                </div>
                <div className='text-[var(--theme)] mb-6 text-center'>
                    UTC +5:30 India Standard Time
                </div>
                <div className='flex w-full justify-center items-center mb-[4rem]'>

                    <div className='btn mt-4 py-2 cursor-pointer ' onClick={
                        () => {
                            if (selected === -1) {
                                alert("Please select a time slot && duration")
                                return
                            }
                            // scroll down
                            document.querySelector('.form-schedule-main-box').scrollIntoView({ behavior: 'smooth' });
                        }
                    }>
                        Continue -&gt;
                    </div>
                </div>
            </div>
            {duration != "302 minutes" && selected != -1 && <div className={``}>
                <div className="flex items-center justify-center min-h-screen mt-4 form-schedule-main-box">
                    <div className="bg- p-10 rounded-lg shadow-md w-full max-w-4xl border border-blue-900">
                        <h1 className="text-2xl font-bold mb-4 text-left">Your Information</h1>
                        <form ref={form} className="space-y-6 pb-[3rem] ">
                            <div className='mb-[1rem]'>
                                {/* date */}
                                <div className="flex">
                                    <div className='text-lg font-semibold text-[tvar(--theme)]'>{dates[selected]}&nbsp;</div> &nbsp;
                                    <div className="text-lg font-semibold text-[vtar(--theme)]">{date.toDateString("DD-MM-YYYY")} &nbsp;</div>
                                </div>
                                <div className=' font-semibold'>
                                    Meeting Duration: {duration}
                                </div>
                            </div>
                            <input type="hidden" name="timing" value={dates[selected]} />
                            <input type="hidden" name="date" value={date.toDateString()} />
                            <input type="hidden" name="duration" value={duration} />
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 text-left">First Name</label>
                                    <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Enter First Name"
                                        onClick={(e) => {
                                            setState({ ...state, firstName: e.target.value })
                                        }}
                                        name="firstName"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 text-left">Last Name</label>
                                    <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Enter Last Name" onClick={(e) => {
                                        setState({ ...state, lastName: e.target.value })
                                    }}
                                        name="lastName"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 text-left">Phone No.</label>
                                <input type="number" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Enter Phone No." onClick={(e) => {
                                    setState({ ...state, phone: e.target.value })
                                }}
                                    name='phone'
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 text-left">E-Mail</label>
                                <input type="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Enter E-mail ID" onClick={(e) => {
                                    setState({ ...state, email: e.target.value })
                                }}
                                    name="email"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 text-left">Company Name</label>
                                <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Enter Company Name" onClick={(e) => {
                                    setState({ ...state, company: e.target.value })
                                }}
                                    name="company"
                                />
                            </div>
                            <div className="flex justify-between">
                                <button type="button" className="px-10 py-2 bg-white text-gray-700 rounded-md border border-blue-600" onClick={() => {
                                    document.querySelector('.cal-par-box').scrollIntoView({ behavior: 'smooth' });
                                }}>Back</button>
                                <div type="submit" className="cursor-pointer px-10 py-2 bg-[var(--theme)] text-white rounded-md" onClick={() => { handleSubmit() }}>Request</div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>}
        </>
    );
}

export default MeetingCalender