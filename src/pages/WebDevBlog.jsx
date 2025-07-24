// src/pages/WebDevBlog.jsx
import React from "react";
import howWebWorksImg from "../assets/howWebWorks.png";
import csslayout from "../assets/cssLayout.png";
import trainer3 from "../assets/trainer3.jpg";


export default function WebDevBlog() {
  return (
    <div className="flex max-w-7xl mx-auto px-4 py-10 text-gray-800 gap-10">
      {/* Main Blog Content */}
      <div className="w-full lg:w-2/3">
        <h1 className="text-4xl font-bold mb-4 text-blue-700">
          Getting Started with Web Development
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          A beginner’s guide to understanding HTML, CSS, JavaScript, and how the web works.
        </p>

        <div className="text-sm text-gray-500 mb-10">
          <p>
            <span className="font-semibold">Written by:</span> Tech Instructor Team
          </p>
          <p>Published on: July 23, 2025</p>
        </div>

        {/* Blog Sections */}
        <section className="space-y-10 leading-relaxed text-base">
          <div id="how-web-works">
            <h2 className="text-2xl font-semibold mb-2">1. How the Web Works</h2>
            <p>
              Every time you visit a website, your browser sends a request to a web server.
              The server processes this request and responds with HTML, CSS, and JavaScript. Your
              browser interprets this data and renders the web page.
            </p>
            <a href={howWebWorksImg} target="_blank" rel="noopener noreferrer">
              <img
                src={howWebWorksImg}
                alt="How the web works diagram"
                className="rounded-lg mt-4 shadow-md w-full md:w-3/4 hover:scale-105 transition-transform duration-300"
              />
            </a>
          </div>

          <div id="html">
            <h2 className="text-2xl font-semibold mb-2">2. HTML (Structure)</h2>
            <p>
              HTML stands for HyperText Markup Language. It provides the structure of a webpage
              — defining elements like headings, paragraphs, images, and links.
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm mt-4 overflow-x-auto">
{`<html>
  <head><title>My Website</title></head>
  <body>
    <h1>Welcome!</h1>
    <p>This is a basic webpage.</p>
  </body>
</html>`}
            </pre>
          </div>

          <div id="css">
            <h2 className="text-2xl font-semibold mb-2">3. CSS (Styling)</h2>
            <p>
              CSS (Cascading Style Sheets) controls how HTML elements look — including colors, spacing,
              and layout. Tailwind CSS is a utility-first CSS framework that makes styling faster and easier.
            </p>
            <a href={csslayout} target="_blank" rel="noopener noreferrer">
              <img
                src={csslayout}
                alt="CSS layout example"
                className="rounded-lg mt-4 shadow-md w-full md:w-3/4 hover:scale-105 transition-transform duration-300"
              />
            </a>
          </div>

          <div id="javascript">
            <h2 className="text-2xl font-semibold mb-2">4. JavaScript (Interactivity)</h2>
            <p>
              JavaScript makes your website interactive. It allows things like clicking buttons, submitting forms,
              animations, and more. React is a JavaScript library that helps build user interfaces easily.
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm mt-4 overflow-x-auto">
{`document.querySelector("button").addEventListener("click", () => {
  alert("You clicked the button!");
});`}
            </pre>
          </div>

          <div id="react-tailwind">
            <h2 className="text-2xl font-semibold mb-2">5. Building with React and Tailwind CSS</h2>
            <p>
              React lets you build reusable UI components, and Tailwind CSS allows you to style them without writing custom CSS.
              Together, they offer a powerful stack for modern web development.
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm mt-4 overflow-x-auto">
{`function Button() {
  return (
    <button className="bg-blue-500 text-white px-4 py-2 rounded">
      Click Me
    </button>
  );
}`}
            </pre>
          </div>

          <div id="conclusion">
            <h2 className="text-2xl font-semibold mb-2">6. Conclusion</h2>
            <p>
              Web development is a mix of structure (HTML), design (CSS), and logic (JavaScript).
              Start small, build projects, and you'll get better over time. Explore tools like React and Tailwind CSS to improve your workflow.
            </p>
          </div>
        </section>

        <div className="border-t mt-10 pt-6 text-sm text-gray-500">
          <p>
            This blog was written to help beginners take their first steps in web development.
            If you have any questions or feedback, feel free to reach out!
          </p>
        </div>
      </div>

      {/* Sticky Sidebar Table of Contents */}
      <aside className="hidden lg:block w-1/3 sticky top-24 h-max self-start bg-gray-50 rounded-xl p-6 shadow-md">
        <h3 className="text-lg font-semibold mb-4 text-blue-700">Table of Contents</h3>
        <ul className="space-y-3 text-sm text-gray-700">
          <li><a href="#how-web-works" className="hover:text-blue-600">1. How the Web Works</a></li>
          <li><a href="#html" className="hover:text-blue-600">2. HTML (Structure)</a></li>
          <li><a href="#css" className="hover:text-blue-600">3. CSS (Styling)</a></li>
          <li><a href="#javascript" className="hover:text-blue-600">4. JavaScript</a></li>
          <li><a href="#react-tailwind" className="hover:text-blue-600">5. React + Tailwind CSS</a></li>
          <li><a href="#conclusion" className="hover:text-blue-600">6. Conclusion</a></li>
        </ul>

        
      </aside>
    </div>
  );
}
