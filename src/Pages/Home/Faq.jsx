import React, { useState } from "react";
import { Link } from "react-router";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What areas do you deliver to?",
      answer:
        "We deliver to 64+ districts across Bangladesh including all major cities and remote areas. Check our interactive map to see if we deliver to your location.",
    },
    {
      question: "How much does delivery cost?",
      answer:
        "Delivery costs vary based on location and parcel weight. Use our pricing calculator on the website, or contact our sales team for custom quotes.",
    },
    {
      question: "Can I track my parcel in real-time?",
      answer:
        "Yes! Every parcel comes with a unique tracking ID. Monitor your delivery live on our website or mobile app with GPS updates at every stage.",
    },
    {
      question: "Do you offer same-day delivery?",
      answer:
        "Yes, we offer express delivery within 4-6 hours in Dhaka and surrounding areas. Standard delivery across Bangladesh takes 24-72 hours.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept Cash on Delivery (COD), online bank transfers, credit/debit cards, and digital wallets. Choose the method that works best for you.",
    },
    {
      question: "Are my parcels insured?",
      answer:
        "All parcels are covered with standard protection. For high-value items, we offer additional insurance options at a nominal fee.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full py-20 px-6 flex justify-center">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Have questions? Check our FAQ section below. Can't find your answer?
            Contact our support team.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-lime-50 transition-colors duration-200 group"
              >
                <span className="font-semibold text-gray-900 text-lg pr-4 group-hover:text-lime-600 transition-colors duration-200">
                  {faq.question}
                </span>
                <div
                  className={`flex-shrink-0 w-6 h-6 rounded-full bg-lime-400 flex items-center justify-center text-white font-bold transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 bg-lime-500" : ""
                  }`}
                >
                  ▼
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-8 pb-6 pt-2 text-gray-600 leading-relaxed border-t border-gray-100">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Still have questions? Our support team is here to help!
          </p>
          <a href="mailto:support@zapshift.com" className="inline-flex items-center gap-2 bg-lime-400 hover:bg-lime-500 text-gray-900 font-bold px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:translate-y-[-2px]">
            Contact Support
            <span className="text-xl">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Faq;
