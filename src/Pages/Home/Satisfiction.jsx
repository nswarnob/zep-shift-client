import React from "react";
import { Link } from "react-router";

const Satisfiction = () => {
  return (
    <div className="w-full py-16 px-6 flex justify-center">
      <div className="max-w-6xl w-full bg-gradient-to-r from-[#022B2F] to-[#0a5a60] rounded-2xl p-8 md:p-12 text-white shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-700">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">
          {/* Text Section */}
          <div className="space-y-6 max-w-xl flex-1">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
                Merchant and Customer Satisfaction is Our First Priority
              </h2>
              <p className="text-gray-200 leading-relaxed text-base">
                We offer the lowest delivery charges with the highest value,
                along with 85% weekly or personal instant revenue delivered to
                your account on time.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">✓</span>
                <span className="text-gray-100">Best rates in the market</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">✓</span>
                <span className="text-gray-100">
                  Instant payment settlement
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">✓</span>
                <span className="text-gray-100">24/7 dedicated support</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Link to="/services" className="inline-flex items-center justify-center bg-lime-400 text-gray-900 px-6 py-3 rounded-full font-bold hover:bg-lime-500 transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] transform">
                Become a Merchant
              </Link>
              <Link to="/rider" className="inline-flex items-center justify-center border-2 border-lime-400 text-lime-400 px-6 py-3 rounded-full font-bold hover:bg-lime-400 hover:text-gray-900 transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] transform">
                Earn with Zap Shift
              </Link>
            </div>
          </div>

          {/* Illustration */}
          <div className="flex-1 flex justify-center items-center opacity-80 hover:opacity-100 transition-opacity duration-300">
            <svg
              width="280"
              height="180"
              viewBox="0 0 200 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hover:scale-110 transition-transform duration-300"
            >
              <rect
                x="20"
                y="50"
                width="80"
                height="50"
                rx="6"
                stroke="white"
                strokeWidth="2"
              />
              <rect
                x="70"
                y="30"
                width="80"
                height="50"
                rx="6"
                stroke="white"
                strokeWidth="2"
              />
              <circle cx="150" cy="20" r="6" stroke="white" strokeWidth="2" />
              <path
                d="M140 25 C150 40 170 40 180 25"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Satisfiction;
