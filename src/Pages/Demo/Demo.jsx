import React, { useEffect } from "react";

const Demo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      title: "Real-Time Tracking Dashboard",
      description:
        "Track all your parcels in real-time with live GPS updates and estimated delivery times.",
      icon: "📊",
      image: "📱",
    },
    {
      title: "One-Click Parcel Booking",
      description:
        "Book pickups and schedule deliveries in seconds with our intuitive interface.",
      icon: "🎯",
      image: "⚙️",
    },
    {
      title: "Smart Delivery Notifications",
      description:
        "Get instant SMS, email, and push notifications at every delivery milestone.",
      icon: "🔔",
      image: "📬",
    },
    {
      title: "Secure Payment Gateway",
      description:
        "Multiple payment options including COD, online transfer, and wallet integration.",
      icon: "💳",
      image: "🔐",
    },
    {
      title: "Advanced Analytics",
      description:
        "Detailed reports on delivery performance, costs, and customer satisfaction metrics.",
      icon: "📈",
      image: "📊",
    },
    {
      title: "API Integration",
      description:
        "Seamlessly integrate with your e-commerce platform or custom applications.",
      icon: "🔗",
      image: "⚡",
    },
  ];

  const demoSteps = [
    {
      title: "Create Your Account",
      description:
        "Sign up in minutes with just your email and phone number. No verification hassles.",
      number: "01",
    },
    {
      title: "Add Parcel Details",
      description:
        "Enter recipient information, package weight, and dimensions. Auto-calculated pricing.",
      number: "02",
    },
    {
      title: "Schedule Pickup",
      description:
        "Choose from available time slots. Our rider will be there on time, every time.",
      number: "03",
    },
    {
      title: "Track Live",
      description:
        "Get real-time updates as your parcel moves. Share tracking link with customers.",
      number: "04",
    },
  ];

  const testimonials = [
    {
      name: "Rashid Khan",
      role: "E-commerce Owner",
      text: "Zap Shift has been a game-changer for my online store. Reliable, affordable, and customer-friendly!",
      rating: 5,
      avatar: "👨‍💼",
    },
    {
      name: "Farah Ahmed",
      role: "Logistics Manager",
      text: "The real-time tracking and API integration have streamlined our entire delivery process.",
      rating: 5,
      avatar: "👩‍💼",
    },
    {
      name: "Imran Hossain",
      role: "Small Business Owner",
      text: "Started with just 10 parcels a month. Now we ship 500+. Zap Shift scaled with us!",
      rating: 5,
      avatar: "👨‍🔧",
    },
    {
      name: "Sara Akter",
      role: "Customer",
      text: "Amazing service! My parcel was delivered exactly when promised. Highly recommended!",
      rating: 5,
      avatar: "👩‍🎓",
    },
  ];

  const faqs = [
    {
      question: "How do I get started?",
      answer:
        "Simply sign up on our website or app, add your first parcel, and schedule a pickup. You'll receive real-time updates from collection to delivery.",
    },
    {
      question: "What areas do you cover?",
      answer:
        "We deliver to 100+ districts across Bangladesh, including Dhaka, Chittagong, Sylhet, Khulna, Rajshahi, and all major cities.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept COD (Cash on Delivery), online bank transfers, credit/debit cards, and digital wallets. Choose what works best for you.",
    },
    {
      question: "Can I track my parcel in real-time?",
      answer:
        "Yes! Every parcel has a unique tracking ID. Monitor your delivery live with GPS tracking and receive instant notifications.",
    },
    {
      question: "Do you offer bulk discounts?",
      answer:
        "Absolutely! Our Professional and Enterprise plans offer significant discounts for bulk shipments. Contact our sales team for custom quotes.",
    },
    {
      question: "Is my parcel insured?",
      answer:
        "All parcels are covered with our standard protection. You can also opt for additional insurance for high-value items.",
    },
  ];

  return (
    <div className="w-full space-y-16 pb-16">
      {/* Hero Section */}
      <div className="mt-12 rounded-2xl bg-gradient-to-r from-lime-400 via-lime-300 to-lime-500 py-16 px-6 text-center shadow-lg">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Experience Zap Shift Live
        </h1>
        <p className="text-lg text-gray-800 max-w-2xl mx-auto">
          Discover how Zap Shift simplifies parcel delivery with cutting-edge
          technology and exceptional service
        </p>
      </div>

      {/* Platform Features */}
      <div className="px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
            Powerful Features Made Simple
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="text-5xl flex-shrink-0">{feature.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works - Step by Step */}
      <div className="bg-[#063b3f] rounded-2xl py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Getting Started is Easy
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {demoSteps.map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-lime-400 to-lime-500 rounded-full flex items-center justify-center font-bold text-3xl text-gray-900 mx-auto mb-4 shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Live Demo Preview */}
      <div className="px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
            Mobile App Preview
          </h2>
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  Track Anytime, Anywhere
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our mobile app puts complete control in your hands. Download
                  it today and experience seamless parcel management on the go.
                </p>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-lime-500 font-bold">✓</span>
                    Live tracking with GPS
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-lime-500 font-bold">✓</span>
                    One-tap booking
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-lime-500 font-bold">✓</span>
                    Instant notifications
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-lime-500 font-bold">✓</span>
                    Payment integration
                  </li>
                </ul>
                <button className="mt-6 px-6 py-3 bg-lime-400 text-gray-900 font-semibold rounded-full hover:bg-lime-500 transition-colors shadow-md">
                  Download App Now
                </button>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 text-center">
                <div className="text-6xl mb-4">📱</div>
                <p className="text-white font-semibold mb-2">
                  Available on iOS & Android
                </p>
                <div className="flex gap-3 justify-center mt-4">
                  <button className="px-4 py-2 bg-white bg-opacity-20 text-white rounded-lg hover:bg-opacity-30 transition-colors">
                    App Store
                  </button>
                  <button className="px-4 py-2 bg-white bg-opacity-20 text-white rounded-lg hover:bg-opacity-30 transition-colors">
                    Play Store
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
            What Our Users Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-lime-400">
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 rounded-2xl py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-md cursor-pointer hover:shadow-lg transition-shadow group"
              >
                <summary className="font-bold text-gray-900 text-lg flex justify-between items-center">
                  {faq.question}
                  <span className="text-lime-500 font-bold group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-6 text-center">
        <div className="max-w-2xl mx-auto bg-gradient-to-r from-lime-400 to-lime-500 rounded-2xl p-10 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-gray-800 mb-6">
            Join thousands of businesses already using Zap Shift for faster,
            cheaper, and smarter deliveries.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-colors">
              Start Free Trial
            </button>
            <button className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
