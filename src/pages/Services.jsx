import React, { useState } from 'react';
import ClientReview from './ClientReview'; // Import the ClientReview component

// Import assets
import WebImg from '../assets/web_d_gif.gif';
import AppImg from '../assets/android-app-development-in-lucknow.gif';
import UIUXImg from '../assets/web-developmen-design-1.gif';
import DigitalImg from '../assets/Demystifying-The-Role-of-Analytics-1.gif';

const Services = () => {
  const [selectedService, setSelectedService] = useState('web');

  const handleServiceChange = (service) => {
    setSelectedService(service);
  };

  const services = [
    { id: 'web', label: 'Web Development', icon: '🌐' },
    { id: 'app', label: 'App Development', icon: '📱' },
    { id: 'uiux', label: 'UI/UX Development', icon: '🎨' },
    { id: 'digital', label: 'Digital Marketing', icon: '📊' }
  ];

  const renderHomeContent = () => {
    const content = {
      app: {
        title: "Turning Your App Ideas into Reality",
        description: "At YR IT SOLUTIONS, we craft custom mobile apps, games, and utility solutions for Android and iOS using the latest technologies. Our mobile app development services focus on performance, intuitive UX, and high user engagement — delivering scalable, secure, and market-ready digital products that bring your vision to life."

      },
      uiux: {
        title: "Custom UI Development for Exceptional UX",
        description: "At YR IT SOLUTIONS, we design intuitive, modern user interfaces tailored to your business needs. Our UI development services blend cutting-edge technologies with UX best practices to deliver seamless, responsive, and user-centric digital experiences — not just designs, but journeys that engage and convert."

      },
      digital: {
        title: "Designing Innovative, Impactful Digital Experiences",
        description: "At YR IT SOLUTIONS, we create intuitive, user-centric interfaces that go beyond aesthetics. Our UI/UX design services combine innovation, usability, and the latest tech to deliver seamless, memorable digital journeys across web and mobile platforms."

      },
      web: {
       title: "We Build Experiences, Not Just Websites",
        description: "YR IT SOLUTIONS builds secure, high-performance websites, web apps, and portals tailored to your goals. Using modern technologies like React, Node.js, and cloud solutions, we deliver scalable, SEO-friendly, and user-centric digital experiences that drive growth and engagement."
      }
    };

    const current = content[selectedService];
    
    return (
      <div className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            {current.title}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
            {current.description}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4 pt-4">
          <button className="group relative overflow-hidden bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            <span className="relative z-10">Schedule a Meeting</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <button className="bg-white hover:bg-gray-50 text-blue-600 px-8 py-4 border-2 border-blue-600 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Contact Us
          </button>
        </div>
      </div>
    );
  };

  const renderServiceContent = () => {
    const serviceDetails = {
      web: [
        {
          title: "SEO and Performance Optimization",
          description: "Our websites are optimized for search engines and performance, ensuring fast load times and better visibility online."
        },
        {
          title: "Expertise",
          description: "Our team of professionals has extensive experience in various web development technologies and practices, ensuring that your website is built with the highest standards."
        },
        {
          title: "Security",
          description: "We prioritize the security of your website, implementing best practices and robust measures to protect your data and users."
        },
      ],
      app: [
        {
          title: "Expertise",
          description: "Our team of professionals has extensive experience in various mobile app development technologies and practices, ensuring that your app is built with the highest standards."
        },
        {
          title: "Security",
          description: "We prioritize the security of your app, implementing best practices and robust measures to protect your data and users."
        },
        {
          title: "SEO and Performance Optimization",
          description: "Our apps are optimized for search engines and performance, ensuring fast load times and better visibility online."
        }
      ],
      uiux: [
        {
          title: "Expertise",
          description: "Our team of professionals has extensive experience in various UI/UX design principles and practices, ensuring that your interface is intuitive and user-friendly."
        },
        {
          title: "User-Centered Design",
          description: "We focus on creating designs that prioritize the needs and behaviors of your users, enhancing their interaction with your product."
        },
        {
          title: "Customization",
          description: "We tailor each project to meet your unique needs, providing personalized solutions that align with your business goals and brand identity."
        }
      ],
      digital: [
        {
          title: "SEO (Search Engine Optimization)",
          description: "We specialize in SEO strategies that enhance your online visibility and organic search engine rankings, driving targeted traffic to your website or app."
        },
        {
          title: "PPC (Pay-Per-Click) Advertising",
          description: "Our PPC experts create targeted campaigns on platforms like Google Ads and social media channels"
        },
        {
          title: "Social Media Marketing",
          description: "We develop customized social media strategies to build brand awareness, engage your audience"
        }
      ]
    };

    return (
      <div className="space-y-6">
        {serviceDetails[selectedService].map((item, index) => (
          <div key={index} className="group p-6 bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-3 group-hover:scale-150 transition-transform duration-300"></div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderServiceRightContent = () => {
    const rightContent = {
      web: [
        {
          title: "UI Development",
          description: "We offer UI development for websites, apps, and portals, using cutting-edge design and user experience principles.",
          icon: "🎯"
        },
        {
          title: "Responsive Websites",
          description: "We provide responsive web development services using agile and innovative practices to ensure your website adapts seamlessly across all devices.",
          icon: "📱"
        },
        {
          title: "Web Apps",
          description: "From planning to final product, e-commerce websites, collaboration portals, and custom web applications, we can handle them all as per your requirements.",
          icon: "⚡"
        }
      ],
      app: [
        {
          title: "Android Apps",
          description: "We are Android Experts and offer custom android app development services for startups and enterprise customers. Our team is well-versed in delivering customized android apps.",
          icon: "🤖"
        },
        {
          title: "iOS Apps",
          description: "Our team has deep expertise in iPhone application development services for businesses and startups. We have 10 years of experience in iOS app development and lifecycle management.",
          icon: "🍎"
        },
        {
          title: "Cross Platform",
          description: "We got expertise in cross-platform mobile app development. It's indeed a better and cost-effective way to build and maintain apps. Titanium, QT, Corona, Xamarin, we got it all.",
          icon: "🔄"
        }
      ],
      uiux: [
        {
          title: "Unique UI for Every Engagement",
          description: "We believe that every engagement is unique. Hence, our best UI designers provide totally unique and user-centric interface designs. Be it an app, product, web app, or some branding element, offering the best end-user experience is imperative.",
          icon: "✨"
        },
        {
          title: "Design with Focus on Your Users",
          description: "Being of the leading Design and Development Company, IQVIS has set the best SOP for service delivery. We incorporate the practices of user experience designs that include development activities.",
          icon: "👥"
        },
        {
          title: "Maximize Your ROI",
          description: "Our UI design services help our clients offer a robust and scalable user experience, which let them maximize their ROI and achieve core business goals.",
          icon: "📈"
        }
      ],
      digital: [
        {
          title: "Content Marketing",
          description: "Create valuable content tailored to target audiences to drive engagement and app downloads.",
          icon: "📝"
        },
        {
          title: "Email Marketing",
          description: "Execute email campaigns to nurture leads and promote app features, enhancing user acquisition and retention.",
          icon: "📧"
        },
        {
          title: "Analytics and Reporting",
          description: "Provide data-driven insights to optimize marketing efforts, measuring performance across platforms and app types.",
          icon: "📊"
        }
      ]
    };

    return (
      <div className="space-y-4">
        {rightContent[selectedService].map((item, index) => (
          <div key={index} className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 text-2xl group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const getHeroImage = () => {
    const images = {
      app: AppImg,
      uiux: UIUXImg,
      digital: DigitalImg,
      web: WebImg
    };
    return images[selectedService];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              We Strive To Deliver
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Development Services
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We specialize in creating visually appealing, high-quality, and user-friendly applications that drive business growth.
            </p>
          </div>

          {/* Service Navigation */}
          <div className="mb-12">
            {/* Desktop Navigation */}
            <div className="hidden md:flex justify-center">
              <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-200">
                <div className="flex space-x-2">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => handleServiceChange(service.id)}
                      className={`
                        relative px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-3
                        ${selectedService === service.id 
                          ? 'bg-blue-600 text-white shadow-lg transform scale-105' 
                          : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                        }
                      `}
                    >
                      <span className="text-xl">{service.icon}</span>
                      <span>{service.label}</span>
                      {selectedService === service.id && (
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-80 -z-10"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex justify-center">
              <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-200 w-full max-w-sm">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Choose Service:</label>
                <select 
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  onChange={(e) => handleServiceChange(e.target.value)}
                  value={selectedService}
                >
                  {services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-8 order-2 lg:order-1">
              {renderHomeContent()}
            </div>

            {/* Right Image */}
            <div className="order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                  <img 
                    src={getHeroImage()} 
                    alt="Service Illustration" 
                    className="w-full h-96 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-4xl font-bold text-gray-900">
                    We work with you for
                    <span className="block text-blue-600">growth</span>
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                </div>
                {renderServiceContent()}
              </div>

              {/* Right Content */}
              <div className="space-y-12 space-x-4 py-4">
                <h3 className="text-4xl font-bold text-gray-900 mb-8">Our Specializations</h3>
                {renderServiceRightContent()}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use ClientReview Component instead of inline testimonials */}
      <ClientReview />
    </div>
  );
};

export default Services;
