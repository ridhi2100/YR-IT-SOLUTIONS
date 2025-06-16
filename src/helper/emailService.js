// src/helper/emailService.js
import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_yhmrddm';
const EMAILJS_TEMPLATE_ID = 'template_a93tv4p'; // Fixed: Using the correct template ID from your test
const EMAILJS_PUBLIC_KEY = 'Z3UkvHzlu-sxbuKfZ';

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

/**
 * Send form data via email
 * @param {Object} formData - The form data to send
 * @param {string} formData.name - Client name
 * @param {string} formData.email - Client email
 * @param {string} formData.phone - Client phone
 * @param {string} formData.company - Client company
 * @param {string} formData.message - Client message
 * @param {string} formData.service - Selected service
 * @returns {Promise} EmailJS promise
 */
export const sendClientRequest = async (formData) => {
  try {
    // Prepare the email template parameters to match your working test
    const templateParams = {
      name: formData.name || 'Not provided', // Added this field as shown in your test
      client_name: formData.name || 'Not provided',
      client_email: formData.email || 'Not provided',
      client_phone: formData.phone || 'Not provided',
      client_company: formData.company || 'Not provided',
      selected_service: formData.service || 'Not specified',
      client_message: formData.message || 'No message provided',
      submission_date: new Date().toLocaleString(),
    };

    console.log('Sending email with params:', templateParams); // Debug log

    // Send email via EmailJS
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('Email sent successfully:', response);
    return { success: true, message: 'Email sent successfully!' };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, message: 'Failed to send email. Please try again.' };
  }
};