// BlogPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import trainer1 from '../assets/trainer1.jpg';
import trainer2 from '../assets/trainer2.jpg';
import trainer3 from '../assets/trainer3.jpg';
import cybersecurity from '../assets/cybersecurity.jpg';
const BlogPage = () => {
  return (
    <div className="bg-white text-gray-800 font-sans px-4 py-10 md:px-20">
      {/* Section: Our Journey */}
      <section className="mb-16">
        <h2 className="text-6xl font-bold text-center mb-6 text-black">Our Journey</h2>
        <p className="text-lg text-center max-w-4xl mx-auto">
          YR IT SOLUTIONS started with a mission to deliver cutting-edge IT training programs that empower learners to succeed in the digital era. We recognized the gap between academic knowledge and real-world skills, and set out to bridge it with practical, hands-on learning experiences guided by industry veterans.
        </p>
        <p className="text-lg text-center max-w-4xl mx-auto mt-4">
          From humble beginnings as a local initiative, we have grown into a leading online training provider specializing in domains like Web Development, UI/UX Design, Data Science, and Cybersecurity. With a focus on <strong>career-oriented learning, live project exposure, and personalized mentorship</strong>, we aim to equip every student with job-ready expertise.
        </p>
      </section>

     {/* Section: Meet Our Trainers */}
<section className="mb-20">
  <h2 className="text-4xl font-bold text-center mb-10 text-blue-800">Meet Our Expert Trainers</h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    
    {/* Trainer 1 */}
    <div className="bg-blue-50 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 p-6 text-center">
      <div className="w-full h-80 bg-gray-300 rounded-lg mb-4 overflow-hidden relative">
          <img
         src={trainer1}
         alt="Vinay Sheoran - Data Science Trainer"
        className="object-cover w-full h-full hover:scale-110 transition-transform duration-300"
           />
       </div>

      <h3 className="text-xl font-semibold hover:text-blue-700 transition-colors duration-200">Vinay Sheoran</h3>
      <p className="text-sm text-blue-600">Senior Data Science Trainer</p>
      <p className="mt-2 text-sm">
        Ex-Data Scientist at Flipkart & Publicis Re:Sources, with 8+ years of expertise in Machine Learning, Artificial Intelligence, and Big Data Analytics.
      </p>
    </div>

    {/* Trainer 2 */}
    <div className="bg-blue-50 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 p-6 text-center">
      <div className="w-full h-80 bg-gray-300 rounded-lg mb-4 overflow-hidden relative">
  <img
    src={trainer3}
    alt="Sumit Kumar - Web Development Instructor"
    className="object-cover w-full h-full hover:scale-110 transition-transform duration-300"
  />
</div>

      <h3 className="text-xl font-semibold hover:text-blue-700 transition-colors duration-200">Sumit Kumar</h3>
      <p className="text-sm text-blue-600">Web Development Instructor</p>
      <p className="mt-2 text-sm">
        Former Full Stack Developer at DRDO & PwC. Expert in React.js, Node.js, database design, and scalable web architecture.
      </p>
    </div>

    {/* Trainer 3 */}
    <div className="bg-blue-50 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 p-6 text-center">
      <div className="w-full h-80 bg-gray-300 rounded-lg mb-4 overflow-hidden relative">
  <img
    src={trainer2}
    alt="Isha - UI/UX Design Specialist"
    className="object-cover w-full h-full hover:scale-110 transition-transform duration-300"
  />
</div>

      <h3 className="text-xl font-semibold hover:text-blue-700 transition-colors duration-200">Isha</h3>
      <p className="text-sm text-blue-600">UI/UX Design Specialist</p>
      <p className="mt-2 text-sm">
        Professional Designer at MAAC with 6+ years of experience in creating user-centric interfaces, visual design systems, and responsive mobile/web UI.
      </p>
    </div>
  </div>
</section>


      {/* Section: Cyber Security Coming Soon */}
      <section className="bg-gray-100 py-16 px-6 rounded-xl text-center shadow-inner">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">🚨 Cybersecurity Course Launching Soon!</h2>
        <p className="text-lg max-w-2xl mx-auto mb-4">
          As the digital world rapidly evolves, the need for strong cybersecurity has never been greater. Our upcoming <strong>Cybersecurity Training Program</strong> is designed to equip you with the skills to defend networks, secure data, and perform ethical hacking with confidence.
        </p>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Learn from certified security analysts and gain exposure to real-world threats, penetration testing, and defense strategies. Stay tuned and secure your future in the booming cybersecurity industry.
        </p>
        <div className="h-62 bg-gray-300 rounded-lg mb-4 mx-auto w-full max-w-2xl hover:scale-105 transition-transform duration-300 overflow-hidden">
         <img 
         src={cybersecurity}
         />
        </div>
      </section>

      {/* CTA Section */}
      <div className="text-center mt-12">
        <Link to="/contactus" className="bg-blue-700 hover:bg-blue-900 text-white py-3 px-6 rounded-full text-lg shadow-lg transition-all duration-300">
          Join Our Training Programs Today
        </Link>
      </div>
    </div>
  );
};

export default BlogPage;
