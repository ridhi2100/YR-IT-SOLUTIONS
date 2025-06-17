// src/helper/emailMeeting.js
import emailjs from '@emailjs/browser';

// EmailJS configuration for meeting requests
const EMAILJS_SERVICE_ID = 'service_uo4i8rf';
const EMAILJS_TEMPLATE_ID = 'template_6lfvhx9'; 
const EMAILJS_PUBLIC_KEY = 'EouVdx4XMhlZcbMyl';

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

/**
 * Send meeting request email
 * @param {Object} meetingData - The meeting data to send
 * @param {string} meetingData.firstName - Client first name
 * @param {string} meetingData.lastName - Client last name
 * @param {string} meetingData.email - Client email
 * @param {string} meetingData.phone - Client phone
 * @param {string} meetingData.company - Client company
 * @param {string} meetingData.timing - Selected meeting time
 * @param {string} meetingData.date - Selected meeting date
 * @param {string} meetingData.duration - Meeting duration
 * @returns {Promise} EmailJS promise
 */
export const sendMeetingRequest = async (meetingData) => {
  try {
    // Prepare the email template parameters
    const templateParams = {
      client_first_name: meetingData.firstName || 'Not provided',
      client_last_name: meetingData.lastName || 'Not provided',
      client_full_name: `${meetingData.firstName} ${meetingData.lastName}`,
      client_email: meetingData.email || 'Not provided',
      client_phone: meetingData.phone || 'Not provided',
      client_company: meetingData.company || 'Not provided',
      meeting_time: meetingData.timing || 'Not specified',
      meeting_date: meetingData.date || 'Not specified',
      meeting_duration: meetingData.duration || 'Not specified',
      submission_date: new Date().toLocaleString('en-IN', { 
        timeZone: 'Asia/Kolkata',
        dateStyle: 'full',
        timeStyle: 'medium'
      }),
      to_email: 'yrut@gmail.com', // Your email
      to_name: 'YR IT Solutions Team'
    };

    console.log('Sending meeting request email with params:', templateParams);

    // Send email via EmailJS
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('Meeting request email sent successfully:', response);
    return { success: true, message: 'Meeting request sent successfully!' };
  } catch (error) {
    console.error('Failed to send meeting request email:', error);
    return { 
      success: false, 
      message: 'Failed to send meeting request. Please try again or contact us directly.' 
    };
  }
};