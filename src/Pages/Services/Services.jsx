import React, { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceCategories = [
    {
      title: "Express Delivery",
      description: "Fast delivery for urgent parcels",
      services: [
        "4-6 hours delivery in Dhaka",
        "Same-day delivery available",
        "Priority handling",
        "Real-time tracking",
      ],
      icon: "⚡",
      highlight: true,
    },
    {
      title: "Standard Delivery",
      description: "Reliable delivery at great prices",
      services: [
        "24-72 hours nationwide",
        "Nationwide coverage",
        "Affordable rates",
        "Secure packaging",
      ],
      icon: "🚚",
    },
    {
      title: "Fulfillment Solutions",
      description: "Complete order management",
      services: [
        "Inventory management",
        "Order processing",
        "Professional packaging",
        "After-sales support",
      ],
      icon: "📦",
    },
    {
      title: "Cash on Delivery",
      description: "Secure payment collection",
      services: [
        "100% COD guarantee",
        "Verified payment handling",
        "Instant settlement",
        "Fraud protection",
      ],
      icon: "💵",
    },
    {
      title: "Corporate Logistics",
      description: "Customized B2B solutions",
      services: [
        "Warehouse management",
        "Bulk shipping discounts",
        "Dedicated support",
        "Contract-based pricing",
      ],
      icon: "🏢",
    },
    {
      title: "Return & Reverse Logistics",
      description: "Hassle-free product returns",
      services: [
        "Easy return process",
        "Exchange facilitation",
        "Reverse pickup",
        "Return tracking",
      ],
      icon: "🔄",
    },
  ];

  const features = [
    {
      title: "Real-Time Tracking",
      description:
        "Track your parcel every step of the journey with live updates.",
      icon: "📍",
    },
    {
      title: "Professional Riders",
      description: "Trained, verified, and courteous delivery professionals.",
      icon: "👨‍🦰",
    },
    {
      title: "100% Safe Delivery",
      description: "Your parcels are insured and handled with utmost care.",
      icon: "🔒",
    },
    {
      title: "24/7 Support",
      description:
        "Customer care team available round the clock for assistance.",
      icon: "☎️",
    },
    {
      title: "Flexible Scheduling",
      description: "Choose delivery times that work best for you.",
      icon: "🕐",
    },
    {
      title: "Nationwide Network",
      description: "Reach every district and remote area across Bangladesh.",
      icon: "🌍",
    },
  ];

  const pricing = [
    {
      plan: "Starter",
      price: "৳50",
      parcels: "1-10 per month",
      features: [
        "Local delivery",
        "Standard tracking",
        "Basic support",
        "Online payment",
      ],
    },
    {
      plan: "Professional",
      price: "৳35",
      parcels: "11-100 per month",
      features: [
        "Nationwide delivery",
        "Priority handling",
        "Phone support",
        "Monthly invoice",
      ],
      popular: true,
    },
    {
      plan: "Enterprise",
      price: "Custom",
      parcels: "100+ per month",
      features: [
        "Dedicated account manager",
        "Custom rates",
        "API access",
        "SLA guarantee",
      ],
    },
  ];

  return (
    <div className="w-full space-y-16 pb-16">
      {/* Hero Section */}
      <div className="mt-12 rounded-2xl bg-gradient-to-r from-lime-400 to-lime-500 py-16 px-6 text-center shadow-lg animate-fadeIn">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Our Services
        </h1>
        <p className="text-lg text-gray-800 max-w-2xl mx-auto">
          Comprehensive delivery solutions tailored to meet all your parcel
          needs
        </p>
      </div>

      {/* Service Categories Grid */}
      <div className="px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
            Service Categories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((category, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-6 shadow-lg hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 ${
                  category.highlight
                    ? "bg-gradient-to-br from-lime-100 to-lime-50 border-2 border-lime-400"
                    : "bg-white border border-gray-100"
                }`}
              >
                <div className="text-5xl mb-3">{category.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4 font-medium">
                  {category.description}
                </p>
                <ul className="space-y-2">
                  {category.services.map((service, sidx) => (
                    <li
                      key={sidx}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <span className="text-lime-500 font-bold">✓</span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="bg-[#063b3f] rounded-2xl py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-10">
            Why Choose Zap Shift?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20"
              >
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-200">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
            How Our Service Works
          </h2>
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center font-bold text-2xl text-gray-900 mx-auto mb-4">
                  1
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Place Order</h3>
                <p className="text-gray-600 text-sm">
                  Submit your parcel details through our website or app
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center font-bold text-2xl text-gray-900 mx-auto mb-4">
                  2
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Schedule Pickup
                </h3>
                <p className="text-gray-600 text-sm">
                  Choose a time that suits you for parcel collection
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center font-bold text-2xl text-gray-900 mx-auto mb-4">
                  3
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Track & Confirm
                </h3>
                <p className="text-gray-600 text-sm">
                  Monitor real-time delivery status and receive confirmation
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center font-bold text-2xl text-gray-900 mx-auto mb-4">
                  4
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Delivery Done</h3>
                <p className="text-gray-600 text-sm">
                  Parcel safely delivered with photo proof
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Plans */}
      <div className="px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
            Simple, Transparent Pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((plan, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-8 shadow-lg transition-all duration-300 ${
                  plan.popular
                    ? "bg-lime-400 scale-105 shadow-2xl"
                    : "bg-white border border-gray-200 hover:shadow-xl"
                }`}
              >
                {plan.popular && (
                  <div className="bg-gray-900 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3
                  className={`text-2xl font-bold mb-2 ${plan.popular ? "text-gray-900" : "text-gray-900"}`}
                >
                  {plan.plan}
                </h3>
                <div className="mb-4">
                  <span
                    className={`text-3xl font-bold ${plan.popular ? "text-gray-900" : "text-lime-500"}`}
                  >
                    {plan.price}
                  </span>
                  <p
                    className={`text-sm ${plan.popular ? "text-gray-800" : "text-gray-600"}`}
                  >
                    {plan.parcels}
                  </p>
                </div>
                <ul
                  className={`space-y-3 mb-6 ${plan.popular ? "text-gray-900" : "text-gray-700"}`}
                >
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-2">
                      <span
                        className={
                          plan.popular ? "text-gray-900" : "text-lime-500"
                        }
                      >
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-full font-semibold transition-colors ${
                    plan.popular
                      ? "bg-gray-900 text-white hover:bg-gray-800"
                      : "bg-lime-400 text-gray-900 hover:bg-lime-500"
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-6 text-center">
        <div className="max-w-2xl mx-auto bg-gradient-to-r from-[#063b3f] to-gray-800 rounded-2xl p-10 shadow-lg text-white">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Transform Your Delivery?
          </h2>
          <p className="text-gray-200 mb-6">
            Start using Zap Shift today and experience hassle-free parcel
            delivery
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="px-6 py-3 bg-lime-400 text-gray-900 font-semibold rounded-full hover:bg-lime-500 transition-colors">
              Get Started Now
            </button>
            <button className="px-6 py-3 bg-white bg-opacity-20 text-white font-semibold rounded-full hover:bg-opacity-30 transition-colors border border-white">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
