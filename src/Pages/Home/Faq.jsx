import React, { useState } from 'react';
import { IoChevronDown, IoHelpCircle } from 'react-icons/io5';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does the crypto payment work?",
      answer: "A cellphone monthly invoice is typically payment due during a specified 15 to 3 month(s) 3 back, and will be automatically paid by 'on-demand' deposit (equivalent to the crypto form) from your Fiat Money. It will be directly deposited within 3 to 5 days depending upon a possible supply in the checking account."
    },
    {
      question: "Is it available for all age group/child/type?",
      answer: "Our service is available for users of all ages. However, some features may require parental consent for minors under 18 years old."
    },
    {
      question: "Does it modify body the head post and prepay/buy repayment?",
      answer: "No, our system maintains all original payment structures and does not modify the principal or repayment terms without your explicit authorization."
    },
    {
      question: "What if the user wallet has low low balances initially?",
      answer: "If your wallet balance is insufficient, you'll receive a notification to add funds. Transactions will be queued until sufficient balance is available."
    },
    {
      question: "How will be verified when the product is made or sold?",
      answer: "All transactions are verified through blockchain technology, providing transparent and immutable records of each sale or purchase."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mb-15 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Frequently Asked Question (FAQ)
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose a question from the list below to see the answer. If your question isn't answered here,
            you can email us and we'll get back to you as soon!
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-900 pr-4">
                  {faq.question}
                </span>
                <IoChevronDown
                  className={`w-5 h-5 text-gray-500 shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-4 pt-2 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Button */}
        <div className="mt-8 text-center">
          <button className="inline-flex items-center gap-2 bg-lime-400 hover:bg-lime-500 text-gray-900 font-semibold px-6 py-3 rounded-full transition-colors shadow-md hover:shadow-lg">
            See More FAQ's
            <IoHelpCircle className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Faq