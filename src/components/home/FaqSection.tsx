"use client";

import Image from "next/image";
import React, { useState } from "react";

type FaqItem = {
  id: number;
  question: string;
  answer: string;
  isOpen: boolean;
};

const faqData: FaqItem[] = [
  {
    id: 1,
    question: "How do I use this feature?",
    answer: "Here's how you use it: [...]",
    isOpen: false,
  },
  {
    id: 2,
    question: "Where can I find more information?",
    answer: "More information can be found here: [...]",
    isOpen: false,
  },
  {
    id: 3,
    question: "Where can I find even more information?",
    answer: "More information can be found here: [...]",
    isOpen: false,
  },
  {
    id: 4,
    question: "Where can I find even more more information?",
    answer: "More information can be found here: [...]",
    isOpen: false,
  },
  {
    id: 5,
    question: "Where to contact us information about it?",
    answer: "More information can be found here: [...]",
    isOpen: false,
  },
  {
    id: 6,
    question: "Where to contact between the information?",
    answer: "More information can be found here: [...]",
    isOpen: false,
  },
  // Add more FAQ items as needed
];

const FaqSection: React.FC = () => {
  const [faqs, setFaqs] = useState<FaqItem[]>(faqData);

  const toggleFaq = (id: number) => {
    setFaqs((currentFaqs) =>
      currentFaqs.map((faq) =>
        faq.id === id ? { ...faq, isOpen: !faq.isOpen } : faq
      )
    );
  };

  return (
    <section
      id="faq"
      className="bg-white flex flex-col items-center justify-center min-h-screen"
    >
      <div className="container p-4 sm:p-24">
        <div className="w-full">
          <h1 className="text-5xl text-center font-bold text-[#494949] drop-shadow-md mb-12">
            Frequently Asked Questions
          </h1>
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className={`mb-5 ${
                index !== faqs.length - 1 ? "border-b border-gray-300 pb-5" : ""
              }`}
            >
              <div className="flex justify-between items-center">
                <p className="text-left flex-1 text-[#1A1A1A] font-bold">
                  {faq.question}
                </p>
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="ml-4 p-2 rounded hover:bg-gray-300 hover:text-white transition-colors duration-200 ease-in-out cursor-pointer"
                >
                  {faq.isOpen ? (
                    <Image
                      src="/down-arrow.png"
                      alt="Collapse"
                      width={20}
                      height={20}
                      className="transform rotate-180"
                    />
                  ) : (
                    <Image
                      src="/down-arrow.png"
                      alt="Expand"
                      width={20}
                      height={20}
                    />
                  )}
                </button>
              </div>
              <div
                className={`transition-all duration-200 ease-in-out ${
                  faq.isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="mt-2">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
