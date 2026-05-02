import React, { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const serviceCenter = useLoaderData();
  const bdCenter = [23.685, 90.3563];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full py-12 px-6">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto mb-12 text-center animate-fadeIn">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Service Coverage Map
        </h1>
        <div className="inline-block bg-gradient-to-r from-lime-400 to-lime-500 px-6 py-3 rounded-full shadow-lg mb-6">
          <p className="text-gray-900 font-semibold text-lg">
            Available in 64+ Districts Nationwide
          </p>
        </div>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Explore our nationwide delivery network and find service centers near
          you. We're committed to reaching every corner of Bangladesh.
        </p>
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "64+", label: "Districts" },
            { number: "500+", label: "Service Centers" },
            { number: "100%", label: "Coverage" },
            { number: "24/7", label: "Support" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] text-center border border-gray-100"
            >
              <p className="text-3xl sm:text-4xl font-bold text-lime-500 mb-2">
                {stat.number}
              </p>
              <p className="text-gray-600 font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Map Container */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          {/* Map Title Bar */}
          <div className="bg-gradient-to-r from-[#063b3f] to-[#0a5a60] px-8 py-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-2xl">📍</span>
              Interactive Coverage Map
            </h2>
            <p className="text-gray-200 text-sm mt-2">
              Click on markers to see district details
            </p>
          </div>

          {/* Map */}
          <div className="h-[600px] w-full hover:shadow-2xl transition-shadow duration-300">
            <MapContainer
              className="h-full w-full"
              center={bdCenter}
              zoom={8}
              scrollWheelZoom={true}
              style={{ borderRadius: "0 0 1rem 1rem" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {serviceCenter.map((center, index) => (
                <Marker
                  key={index}
                  position={[center.latitude, center.longitude]}
                >
                  <Popup className="rounded-lg">
                    <div className="p-2">
                      <strong className="text-[#063b3f] text-lg">
                        {center.district}
                      </strong>
                      <p className="text-sm text-gray-600 mt-1">
                        📌 Service Center Active
                      </p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>

        {/* Map Info */}
        <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
          <div className="flex gap-3">
            <span className="text-2xl">💡</span>
            <div>
              <h3 className="font-bold text-blue-900 mb-1">Pro Tip</h3>
              <p className="text-blue-800 text-sm">
                Use your mouse wheel to zoom in and out. Click on any marker to
                see more details about that service center.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* District List Section */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            All Districts Covered
          </h2>
          <p className="text-gray-600 mb-6">
            We have active service centers in the following districts:
          </p>

          {/* Districts Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {serviceCenter.map((center, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-lime-50 to-lime-100 p-4 rounded-xl text-center hover:shadow-md hover:scale-105 transition-all duration-300 border border-lime-200 cursor-pointer"
              >
                <p className="text-sm font-semibold text-gray-900">
                  {center.district}
                </p>
                <p className="text-xs text-gray-600 mt-1">✓ Active</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-6xl mx-auto mt-12 bg-gradient-to-r from-lime-400 to-lime-500 rounded-2xl p-8 shadow-lg text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          Ready to Start?
        </h2>
        <p className="text-gray-800 mb-6 max-w-xl mx-auto">
          Send your parcels to any of our 64+ districts with fast, reliable, and
          affordable delivery.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button className="px-8 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-colors shadow-md hover:shadow-lg">
            Send Parcel Now
          </button>
          <button className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-colors shadow-md hover:shadow-lg">
            View Pricing
          </button>
        </div>
      </div>
    </div>
  );
};

export default Coverage;
