import React from "react";
import { Link } from "react-router-dom";
import trainer1 from "../assets/trainer1.jpg";
import trainer2 from "../assets/trainer2.jpg";
import trainer3 from "../assets/trainer3.jpg";
import cybersecurity from "../assets/cybersecurity.jpg";
import blog from "../assets/blog.jpg";
import webdev from "../assets/webdev.jpg";
import cyber from "../assets/cyber.jpg";
import uiux from "../assets/uiux.jpg";
import ai from "../assets/ai.jpg";
import cloud from "../assets/cloud.jpg";
import datascience from "../assets/data-science.jpg";

const BlogPage = () => {
  return (
    <div className="bg-white text-gray-800 font-sans px-4 py-10 md:px-20">
      {/* Section: Our Journey */}
      <section className="mb-20">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 text-black">
              OUR JOURNEY
            </h2>
            <p className="text-base sm:text-lg mb-4">
              At{" "}
              <span className="font-semibold text-blue-800">
                YR IT SOLUTIONS
              </span>
              , our journey began with a simple yet powerful idea — to transform
              tech education into something truly practical, relevant, and
              career-focused. What started as a modest initiative has now
              evolved into a trusted online learning platform, empowering
              thousands of learners across the country to gain the skills they
              need to succeed in today’s fast-paced digital world.
            </p>
            <p className="text-base sm:text-lg mb-4">
              We’ve grown from a small initiative to a trusted online platform,
              helping thousands gain real-world skills in{" "}
              <span className="text-blue-800 font-medium">Web Development</span>
              , <span className="text-blue-800 font-medium">UI/UX Design</span>,{" "}
              <span className="text-blue-800 font-medium">Data Science</span>,
              and{" "}
              <span className="text-blue-800 font-medium">Cybersecurity</span>.
            </p>
            <p className="text-base sm:text-lg">
              More than just training — we help learners become confident,
              job-ready professionals.
            </p>
          </div>

          {/* Image */}
          <div className="md:w-1/2">
            <img
              src={blog}
              alt="Our Journey Illustration"
              className="w-full max-w-sm sm:max-w-md mx-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Section: Tech Blogs */}
<section className="mb-20 px-4 max-w-7xl mx-auto">
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold text-gray-800">Tech Blogs</h2>
    <p className="text-gray-500 mt-2">Explore articles on Web Dev, Cybersecurity, UI/UX & more</p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
    {[
      {
        title: "Getting Started with Web Development",
        image: webdev,
        desc: "Understand the basics of HTML, CSS, JavaScript and how the web works.",
        link: "/blogs/web-development",
      },
      {
        title: "Cybersecurity Basics for Beginners",
        image: cyber,
        desc: "Learn about threats, protection methods, and why cybersecurity is important.",
        link: "/blogs/cybersecurity",
      },
      {
        title: "UI/UX Principles Every Developer Should Know",
        image: uiux,
        desc: "Explore the fundamentals of user interface and experience design.",
        link: "/blogs/uiux-design",
      },
      {
        title: "Introduction to Artificial Intelligence",
        image: ai,
        desc: "Dive into the world of AI – from machine learning to neural networks and its real-world applications.",
        link: "/blogs/artificial-intelligence",
      },
      {
        title: "Cloud Computing Simplified",
        image: cloud,
        desc: "Understand how cloud platforms like AWS, Azure, and GCP power today’s digital world.",
        link: "/blogs/cloud-computing",
      },
      {
        title: "Getting Started with Data Science",
        image: datascience,
        desc: "Explore how data science transforms raw data into insights using statistics, Python, and machine learning.",
        link: "/blogs/data-science",
      },
    ].map((blog, i) => (
      <article
        key={i}
        className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transform hover:scale-[1.02] transition duration-300"
      >
        <img
          src={blog.image}
          alt={`Cover image for ${blog.title}`}
          loading="lazy"
          className="w-full h-52 object-cover hover:opacity-90 transition duration-200"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3 hover:text-blue-600 transition">
            {blog.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4">{blog.desc}</p>
          <Link
  to={blog.link}
  className="inline-block text-blue-600 hover:text-blue-800 font-medium transition"
>
  Read More →
</Link>

        </div>
      </article>
    ))}
  </div>
</section>


      {/* Section: Meet Our Trainers */}
      <section className="mb-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 text-blue-800">
          Meet Our Expert Trainers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              src: trainer1,
              name: "Vinay Sheoran",
              role: "Senior Data Science Trainer",
              desc: "Ex-Data Scientist at Flipkart & Publicis Re:Sources, with 8+ years of expertise in Machine Learning, Artificial Intelligence, and Big Data Analytics.",
            },
            {
              src: trainer3,
              name: "Sumit Kumar",
              role: "Web Development Instructor",
              desc: "Former Full Stack Developer at DRDO & PwC. Expert in React.js, Node.js, database design, and scalable web architecture.",
            },
            {
              src: trainer2,
              name: "Isha",
              role: "UI/UX Design Specialist",
              desc: "Professional Designer at MAAC with 6+ years of experience in creating user-centric interfaces, visual design systems, and responsive mobile/web UI.",
            },
          ].map((trainer, index) => (
            <div
              key={index}
              className="bg-blue-50 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 p-6 text-center"
            >
              <div className="w-full h-72 sm:h-80 bg-gray-300 rounded-lg mb-4 overflow-hidden relative">
                <img
                  src={trainer.src}
                  alt={`${trainer.name} - ${trainer.role}`}
                  className="object-cover w-full h-full hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold hover:text-blue-700 transition-colors duration-200">
                {trainer.name}
              </h3>
              <p className="text-sm text-blue-600">{trainer.role}</p>
              <p className="mt-2 text-sm">{trainer.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Cyber Security Coming Soon */}
      <section className="bg-gray-100 py-16 px-4 sm:px-6 rounded-xl text-center shadow-inner">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 mb-4">
          🚨 Cybersecurity Course Launching Soon!
        </h2>
        <p className="text-base sm:text-lg max-w-3xl mx-auto mb-4">
          As the digital world rapidly evolves, the need for strong
          cybersecurity has never been greater. Our upcoming{" "}
          <strong>Cybersecurity Training Program</strong> is designed to equip
          you with the skills to defend networks, secure data, and perform
          ethical hacking with confidence.
        </p>
        <p className="text-base sm:text-lg max-w-3xl mx-auto mb-6">
          Learn from certified security analysts and gain exposure to real-world
          threats, penetration testing, and defense strategies. Stay tuned and
          secure your future in the booming cybersecurity industry.
        </p>
        <div className="h-56 sm:h-72 bg-gray-300 rounded-lg mb-4 mx-auto w-full max-w-3xl overflow-hidden hover:scale-105 transition-transform duration-300">
          <img
            src={cybersecurity}
            alt="Cybersecurity Course"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* CTA Section */}
      <div className="text-center mt-12">
        <Link
          to="/contactus"
          className="bg-blue-700 hover:bg-blue-900 text-white py-3 px-6 rounded-full text-base sm:text-lg shadow-lg transition-all duration-300"
        >
          Join Our Training Programs Today
        </Link>
      </div>
    </div>
  );
};

export default BlogPage;
