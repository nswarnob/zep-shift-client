import React from "react";

const TrackingSupport = () => {
  const items = [
    {
      title: "Live Parcel Tracking",
      desc: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey with our advanced system designed for complete peace of mind.",
      img: "https://cdn-icons-png.flaticon.com/512/4208/4208394.png", // placeholder icon
    },
    {
      title: "100% Safe Delivery",
      desc: "We ensure your products are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe transit without damage from delivery errors.",
      img: "https://cdn-icons-png.flaticon.com/512/2920/2920235.png", // placeholder icon
    },
    {
      title: "24/7 Call Center Support",
      desc: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns — anytime you need us.",
      img: "https://cdn-icons-png.flaticon.com/512/1077/1077976.png", // placeholder icon
    },
  ];

  return (
    <div className="w-full py-16 px-6 flex justify-center">
      <div className="max-w-5xl w-full space-y-6">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-sm p-6 flex items-center gap-6 border border-gray-200"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-24 h-24 object-contain text-[#063b3f]"
            />
            <div>
              <h3 className="text-xl font-semibold text-[#063b3f]">{item.title}</h3>
              <p className="text-gray-600 mt-1 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackingSupport;