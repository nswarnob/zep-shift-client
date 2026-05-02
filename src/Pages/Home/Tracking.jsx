import React from "react";

const TrackingSupport = () => {
  const items = [
    {
      title: "Live Parcel Tracking",
      desc: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey with our advanced system designed for complete peace of mind.",
      img: "https://cdn-icons-png.flaticon.com/512/4208/4208394.png",
      icon: "📍",
    },
    {
      title: "100% Safe Delivery",
      desc: "We ensure your products are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe transit without damage from delivery errors.",
      img: "https://cdn-icons-png.flaticon.com/512/2920/2920235.png",
      icon: "🛡️",
    },
    {
      title: "24/7 Call Center Support",
      desc: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns — anytime you need us.",
      img: "https://cdn-icons-png.flaticon.com/512/1077/1077976.png",
      icon: "☎️",
    },
  ];

  return (
    <div className="w-full py-16 px-6 flex justify-center">
      <div className="max-w-6xl w-full">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Why Choose Us
        </h2>
        <div className="space-y-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col sm:flex-row items-start sm:items-center gap-8 border border-gray-100 hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 group"
            >
              {/* Icon Container */}
              <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-lime-100 to-lime-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-5xl">{item.icon}</span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>

              {/* Accent */}
              <div className="hidden lg:flex flex-shrink-0 w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center text-gray-900 font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                →
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrackingSupport;
