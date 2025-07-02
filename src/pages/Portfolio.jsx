import React from 'react';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/law.png';
import project4 from '../assets/project4.png';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: "Anshul Architect – Architecture Portfolio",
    description:
      "A modern, responsive architecture portfolio website designed for Anshul Architect. Built with performance and aesthetics in mind, this website showcases architectural projects with high-resolution visuals, intuitive navigation, and a clean layout. It emphasizes user experience and SEO-friendly practices such as fast load time, mobile optimization, and semantic HTML. Ideal for showcasing commercial and residential architecture services online.",
    link: "https://anshularchitect.netlify.app/",
    image: project1,
  },
  {
    title: "Interior Design Studio – Creative Showcase",
    description:
      "A visually captivating website tailored for an interior design studio. This fully responsive platform highlights elegant layouts, premium design aesthetics, and smooth scrolling animations. It effectively presents services, past work, and client testimonials—making it an ideal tool for lead generation in the home decor and interior styling industry.",
    link: "https://interior-design-green.vercel.app/",
    image: project2,
  },
  {
    title: "Law Firm – Legal Services Website",
    description:
      "A professional website designed for a legal consultancy. It features a formal color palette, structured layout, and clearly defined service sections. Includes appointment booking, service highlights, and client testimonials. Developed with accessibility and SEO optimization for ranking in legal service queries.",
    link: "https://aggrawal-legal-firm-latest.vercel.app/",
    image: project3,
  },
  {
    title: "Law Firm – Legal Services Website",
    description:
      "Modern legal services website offering expert legal advice, case support, and consultation. Designed for law firms and attorneys to showcase services with a clean, professional look. Mobile-friendly & fast-loading.",
    link: "https://law-v2.vercel.app/",
    image: project4,
  }
];

const Portfolio = () => {
  return (
    <div className="min-h-screen px-6 py-12 bg-white text-gray-800">
    <h2 className="text-5xl font-bold text-center mb-6">Projects We Successfully Developed</h2><br></br>
    <h3 className="text-2xl text-center mb-6">One look is worth a thousand words</h3>
      <div className="flex justify-center mb-12">
        <Link to="/contactUs">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300 shadow-md">
            Let's Work Together
          </button>
        </Link>
      </div>
     
      <div className="space-y-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-center border border-gray-300 rounded-xl shadow-md hover:shadow-lg transition p-6 sm:mx-2 md:mx-4 lg:mx-12"
          >
            <div className="w-full lg:w-1/2 lg:pr-6">
              <h2 className="text-2xl font-semibold mb-6">{project.title}</h2>
              <p className="text-lg mb-2">{project.description}</p>
            </div>

            <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
            <a
             href={project.link}
             target="_blank"
             rel="noopener noreferrer"
               >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg w-full object-cover shadow transform transition-transform duration-300 hover:scale-105"
              />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
