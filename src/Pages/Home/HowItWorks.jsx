import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      title: "Booking Pick & Drop",
      desc: "From personal packages to business shipments — we deliver on time, every time.",
      icon: "📦",
    },
    {
      title: "Cash On Delivery",
      desc: "From personal packages to business shipments — we deliver on time, every time.",
      icon: "💵",
    },
    {
      title: "Delivery Hub",
      desc: "From personal packages to business shipments — we deliver on time, every time.",
      icon: "🏬",
    },
    {
      title: "Booking SME & Corporate",
      desc: "From personal packages to business shipments — we deliver on time, every time.",
      icon: "🏢",
    },
  ];

  return (
    <div className="w-full  py-10 px-6 flex justify-center">
      <div className="max-w-6xl w-full">
        <h2 className="text-xl font-semibold text-[#063b3f] mb-6">How it Works</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-all"
            >
              <div className="text-4xl text-[#063b3f] mb-4">{step.icon}</div>
              <h3 className="text-lg font-semibold text-[#063b3f]">{step.title}</h3>
              <p className="text-gray-600 text-sm mt-1 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks