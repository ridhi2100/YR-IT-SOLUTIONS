import React from 'react';
import emailjs from '@emailjs/browser';
// import './EmailForm.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { collection, addDoc, getFirestore } from "firebase/firestore";
import {messages} from "../helper/Messages"


const Form = () => {
  const notify = (i) => toast(messages[i]);
  const form = React.useRef();
  const [state, setState] = React.useState({
    firstName: '',
    lastName: '',
    phone: '',
    reply_to: '',
    company: '',
    website: '',
    subject: '',
    requirement: '',
    budget: '',
    service: '',
  });
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (state.firstName === '' || state.lastName === '' || state.phone === '' || state.reply_to === '' || state.company === '' || state.website === '' || state.subject === '' || state.requirement === '' || state.budget === '' || state.service === '') {
        notify(2);
        return;
      }
      const db = getFirestore();
      const docRef = await addDoc(collection(db, "Purchasing"), {
        purchasing: state,
      });
      sendMessage();
    } catch (error) {
      notify(1);
    }
  }
  return (

    <div className="flex items-center justify-center min-h-screen bg-gray-100 mt-4">
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
      <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-4xl border border-blue-900">
        <h1 className="text-2xl font-bold mb-8 text-left">Form</h1>
        <form ref={form} className="space-y-6 ">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 text-left">First Name</label>
              <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Enter First Name"
                onChange={(e) => {
                  setState({ ...state, firstName: e.target.value })
                }}
                name="firstName"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 text-left">Last Name</label>
              <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Enter Last Name" onChange={(e) => {
                setState({ ...state, lastName: e.target.value })
              }}
                name="lastName"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 text-left">Phone No.</label>
              <input type="number" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Enter Phone No." onChange={(e) => {
                setState({ ...state, phone: e.target.value })
              }}
                name='phone'
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 text-left">E-Mail</label>
              <input type="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Enter E-mail ID" onChange={(e) => {
                setState({ ...state, reply_to: e.target.value })
              }}
                name="email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 text-left">Company Name</label>
              <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Enter Company Name" onChange={(e) => {
                setState({ ...state, company: e.target.value })
              }}
                name="company"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 text-left">Website URL</label>
              <input type="url" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Enter Website URL"
                onChange={(e) => {
                  setState({ ...state, website: e.target.value })
                }}
                name="website"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 text-left">Subject</label>
            <input type="text" className="mt-1 block w-full p-2 border  rounded-md" placeholder="Subject."
              onChange={(e) => {
                setState({ ...state, subject: e.target.value })
              }}
              name="subject"
            />
            {/* <p className="text-red-500 text-xs mt-1">Error message informing me of a problem</p> */}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 text-left">Explain Your Requirement</label>
            <textarea className="mt-1 block w-full p-2 border border-gray-300 rounded-md" rows="4" placeholder="Share Your Requirement"
              onChange={(e) => {
                setState({ ...state, requirement: e.target.value })
              }}
              name="requirement"
            ></textarea>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 text-left">Budget</label>
              <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                onChange={(e) => {
                  setState({ ...state, budget: e.target.value })
                }}
                name="budget"
              >
                <option value="">Budget</option>
                <option value="100-500">100$-500$</option>
                <option value="500-1000">500$-1000$</option>
                <option value="1000-2000">1000$-2000$</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 text-left">Services you need</label>
              <div className="mt-4 space-y-2">
                <div className="flex items-center">
                  <input type="radio" name="service" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    onChange={(e) => {
                      setState({ ...state, service: "Web Development" })
                    }}

                  />
                  <label className="ml-3 block text-sm font-medium text-gray-700">Web Development</label>
                </div>
                <div className="flex items-center">
                  <input type="radio" name="service" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" onChange={(e) => {
                    setState({ ...state, service: "App Development" })
                  }}
                  />
                  <label className="ml-3 block text-sm font-medium text-gray-700">App Development</label>
                </div>
                <div className="flex items-center">
                  <input type="radio" name="service" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" onChange={(e) => {
                    setState({ ...state, service: "UI/UX Development" })
                  }}
                  />
                  <label className="ml-3 block text-sm font-medium text-gray-700">UI/UX Development</label>
                </div>
                <div className="flex items-center">
                  <input type="radio" name="service" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    onChange={(e) => {
                      setState({ ...state, service: "Digital Marketing" })
                    }}

                  />
                  <label className="ml-3 block text-sm font-medium text-gray-700">Digital Marketing</label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end space-x-4">
            <button type="button" className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md" onClick={() => {
              setState({
                firstName: '',
                lastName: '',
                phone: '',
                email: '',
                company: '',
                website: '',
                subject: '',
                requirement: '',
                budget: '',
                service: '',
              })
              // goto home page
              window.location.href = "/"

            }}>Cancel</button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md" onClick={(e) => { handleSubmit(e) }}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
