import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: "Anshul Architect – Architecture Portfolio",
    description:
      "A modern, responsive architecture portfolio website designed for Anshul Architect. Built with performance and aesthetics in mind, this website showcases architectural projects with high-resolution visuals, intuitive navigation, and a clean layout. It emphasizes user experience and SEO-friendly practices such as fast load time, mobile optimization, and semantic HTML. Ideal for showcasing commercial and residential architecture services online.",
    link: "https://anshularchitect.netlify.app/",
  },
  {
    title: "Interior Design Studio – Creative Showcase",
    description:
      "A visually captivating website tailored for an interior design studio. This fully responsive platform highlights elegant layouts, premium design aesthetics, and smooth scrolling animations. It effectively presents services, past work, and client testimonials—making it an ideal tool for lead generation in the home decor and interior styling industry. Optimized for both desktop and mobile devices with clean code and SEO best practices.",
    link: "https://interior-design-green.vercel.app/",
  },
  {
    title: "Law Firm – Legal Services Website",
    description:
      "A professional website designed for a law firm or legal consultancy. It features a formal color palette, structured layout, and clearly defined service sections. Includes features such as appointment booking, service highlights, and client testimonials. Developed with accessibility, fast loading, and SEO optimization for ranking in legal service queries. Perfect for attorneys, legal advisors, and firms aiming to build online credibility.",
    link: "https://lawfirm-fawn.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen px-6 py-12 bg-white text-gray-800">
      <h1 className="text-5xl font-bold text-center mb-6">Portfolio</h1>

      <div className="flex justify-center mb-12">
        <Link to="/contactUs">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300 shadow-md">
            Let's Work Together
          </button>
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-xl p-6 shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-sm mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
