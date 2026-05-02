import React from "react";
import { Link } from "react-router";

const HowItWorks = () => {
  const steps = [
    {
      title: "Booking Pick & Drop",
      desc: "From personal packages to business shipments — we deliver on time, every time.",
      icon: "📦",
      number: "01",
    },
    {
      title: "Cash On Delivery",
      desc: "From personal packages to business shipments — we deliver on time, every time.",
      icon: "💵",
      number: "02",
    },
    {
      title: "Delivery Hub",
      desc: "From personal packages to business shipments — we deliver on time, every time.",
      icon: "🏬",
      number: "03",
    },
    {
      title: "Booking SME & Corporate",
      desc: "From personal packages to business shipments — we deliver on time, every time.",
      icon: "🏢",
      number: "04",
    },
  ];

  return (
    <div className="w-full py-16 px-6 flex justify-center">
      <div className="max-w-6xl w-full">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">How It Works</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:translate-y-[-8px] transition-all duration-300 relative group"
            >
              {/* Number Badge */}
              <div className="absolute top-0 right-0 w-14 h-14 bg-lime-400 text-gray-900 rounded-bl-2xl flex items-center justify-center font-bold text-xl group-hover:bg-lime-500 transition-colors duration-300">
                {step.number}
              </div>

              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.desc}
              </p>

              {/* Divider Line (hidden on last item) */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 w-6 h-0.5 bg-gradient-to-r from-lime-400 to-transparent"></div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Ready to experience seamless delivery?
          </p>
          <Link to="/send-parcel" className="inline-block px-8 py-3 bg-lime-400 hover:bg-lime-500 text-gray-900 font-bold rounded-full transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]">
            Get Started Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
