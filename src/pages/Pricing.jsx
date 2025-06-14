import React from 'react';

const Pricing = () => {
  const plans = [
    {
      title: "Web Development",
      features: [
        "Front-end Development (HTML, CSS, JavaScript, frameworks like React, Angular, Vue)",
        "Back-end Development (Node.js, Python, Ruby on Rails, PHP, Java)",
        "Full-Stack Development"
      ]
    },
    {
      title: "Mobile App Development",
      features: [
        "Progressive Web Apps (PWAs)",
        "Native App Development (iOS, Android)",
        "Cross-Platform App Development"
      ]
    },
    {
      title: "Web Design",
      features: [
        "UI/UX Design",
        "Responsive Design",
        "Branding and Visual Design"
      ]
    },
    {
      title: "Digital Marketing",
      features: [
        "Social Media Marketing",
        "Email Marketing",
        "Pay-Per-Click (PPC) Advertising"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Transparent Pricing for You
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Start saving time today and choose your best plan
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 flex flex-col h-full"
            >

              {/* Card Content */}
              <div className="p-8 flex flex-col flex-grow">
                {/* Title */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                    {plan.title}
                  </h3>
                </div>

                {/* Features */}
                <div className="flex-grow">
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                          <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button - Always at bottom */}
                <div className="mt-8 pt-6">
                  <button 
                    className="w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg bg-[#030538] text-white hover:bg-[#020426]"
                    onClick={() => {
                      // Handle navigation here
                      console.log(`Selected plan: ${plan.title}`);
                    }}
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            Need a custom solution? We're here to help.
          </p>
          <button className="text-blue-600 hover:text-blue-700 font-semibold underline decoration-2 underline-offset-4 hover:decoration-blue-700 transition-colors duration-200">
            Contact us for enterprise pricing
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;