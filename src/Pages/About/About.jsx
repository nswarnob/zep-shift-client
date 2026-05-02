import React, { useEffect, useState, useRef } from "react";

// Reusable component for fade-in on scroll animation
const FadeInSection = ({ children, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
};

const About = () => {
  // Add page entrance animation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { number: "50K+", label: "Deliveries Monthly" },
    { number: "100+", label: "Districts Covered" },
    { number: "24/7", label: "Customer Support" },
    { number: "99.8%", label: "On-Time Delivery" },
  ];

  const values = [
    {
      title: "Fast & Reliable",
      description:
        "We prioritize speed without compromising safety. Your parcels are our responsibility.",
      icon: "⚡",
    },
    {
      title: "Customer First",
      description:
        "Your satisfaction drives us. We listen, adapt, and improve every day.",
      icon: "❤️",
    },
    {
      title: "Nationwide Coverage",
      description:
        "From urban hubs to remote areas, we reach every corner of Bangladesh.",
      icon: "🌍",
    },
    {
      title: "Transparent Tracking",
      description:
        "Know exactly where your parcel is at every moment with real-time updates.",
      icon: "📍",
    },
    {
      title: "Secure Payment",
      description:
        "Safe, secure, and hassle-free transactions with 100% cash on delivery.",
      icon: "🔒",
    },
    {
      title: "Professional Team",
      description:
        "Trained riders, expert staff, and dedicated support at your service.",
      icon: "👥",
    },
  ];

  const team = [
    {
      role: "Founder & CEO",
      name: "Rahman Ahmed",
      bio: "Visionary leader with 15+ years in logistics.",
      emoji: "👨‍💼",
    },
    {
      role: "Chief Operations Officer",
      name: "Sophia Khan",
      bio: "Ensures seamless operations across all regions.",
      emoji: "👩‍💼",
    },
    {
      role: "Lead Product Manager",
      name: "Karim Hassan",
      bio: "Innovates delivery solutions for modern needs.",
      emoji: "👨‍💻",
    },
    {
      role: "Head of Customer Care",
      name: "Zara Islam",
      bio: "Dedicated to excellent customer experience.",
      emoji: "👩‍💻",
    },
  ];

  return (
    <div className="w-full space-y-16 pb-16">
      {/* Hero Section */}
      <FadeInSection className="mt-12 rounded-2xl bg-gradient-to-r from-lime-400 to-lime-500 py-16 px-6 text-center shadow-lg">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          About Zap Shift
        </h1>
        <p className="text-lg text-gray-800 max-w-2xl mx-auto">
          Revolutionizing parcel delivery across Bangladesh with speed,
          reliability, and innovation.
        </p>
      </FadeInSection>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-8 px-6">
        <FadeInSection className="bg-[#063b3f] rounded-2xl p-8 text-white shadow-lg">
          <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
          <p className="text-gray-200 leading-relaxed">
            To deliver parcels reliably and affordably to every corner of
            Bangladesh, making e-commerce accessible to businesses of all sizes
            and individuals everywhere.
          </p>
        </FadeInSection>

        <FadeInSection className="bg-[#063b3f] rounded-2xl p-8 text-white shadow-lg">
          <h2 className="text-2xl font-bold mb-3">Our Vision</h2>
          <p className="text-gray-200 leading-relaxed">
            To be the most trusted and loved logistics partner in South Asia,
            known for innovation, excellence, and unwavering commitment to
            customer success.
          </p>
        </FadeInSection>
      </div>

      {/* Stats Section */}
      <FadeInSection className="bg-gray-50 rounded-2xl py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
            By The Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <p className="text-3xl sm:text-4xl font-bold text-lime-500 mb-2">
                  {stat.number}
                </p>
                <p className="text-gray-600 font-semibold text-sm sm:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* Core Values */}
      <FadeInSection className="px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 border border-gray-100"
              >
                <div className="text-4xl mb-3">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* Team Section */}
      <FadeInSection className="bg-[#063b3f] rounded-2xl py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-10">
            Meet Our Leadership Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center"
              >
                <div className="text-5xl mb-3">{member.emoji}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-lime-500 font-semibold text-sm mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* Journey Section */}
      <FadeInSection className="px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
            Our Journey
          </h2>
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center font-bold text-gray-900">
                    2020
                  </div>
                  <div className="w-1 h-16 bg-lime-400"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Founded</h3>
                  <p className="text-gray-600">
                    Zap Shift started with a vision to improve parcel delivery
                    in Bangladesh.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center font-bold text-gray-900">
                    2021
                  </div>
                  <div className="w-1 h-16 bg-lime-400"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Rapid Expansion
                  </h3>
                  <p className="text-gray-600">
                    Expanded to 30+ districts with a team of 500+ delivery
                    riders.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center font-bold text-gray-900">
                    2022
                  </div>
                  <div className="w-1 h-16 bg-lime-400"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Tech Innovation
                  </h3>
                  <p className="text-gray-600">
                    Launched real-time tracking and mobile app for seamless
                    experience.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center font-bold text-gray-900">
                    2024
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Present & Beyond
                  </h3>
                  <p className="text-gray-600">
                    50K+ monthly deliveries, 100+ districts, 99.8% on-time
                    delivery rate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* CTA Section */}
      <FadeInSection className="px-6 text-center">
        <div className="max-w-2xl mx-auto bg-gradient-to-r from-lime-400 to-lime-500 rounded-2xl p-10 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Join Us in Revolutionizing Delivery
          </h2>
          <p className="text-gray-800 mb-6">
            Whether you're a business or an individual, let's work together to
            make parcel delivery faster and easier.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-colors">
              Get Started
            </button>
            <button className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default About;
