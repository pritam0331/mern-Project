import React, { useState } from 'react';
import './FAQ.css';

function FAQ () {
  const [activeIndex, setActiveIndex] = useState(null);

  function handleToggle (index) {
    if (activeIndex && index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    } 
  };

  const faqs = [
    {
      question: "How does the blood donation process work?",
      answer: "The blood donation process involves registration, a health screening, the actual donation, and a short recovery period."
    },
    {
      question: "How much blood can you donate at once?",
      answer: "You can donate (about 470 ml) of blood at a time."
    },
    {
      question: "Donated blood is used for?",
      answer: "Donated blood is used for transfusions during surgeries, trauma care, cancer treatment, and for people with chronic illnesses."
    },
    {
      question: "Is giving blood good for you?",
      answer: "Yes, giving blood can be beneficial as it can reduce harmful iron stores, improve cardiovascular health, and allow for a free health screening."
    },
    {
      question: "What types of tests are performed on donated blood?",
      answer: "Donated blood is tested for blood type, Rh factor, and screened for infectious diseases such as HIV, hepatitis B and C, and syphilis."
    },
    {
      question:"How long will it take to replenish the blood I donate?",
      answer: "It takes about 24-48 hours to replace the plasma and about 4-6 weeks to replace the red blood cells."
    },
    {
      question: "What should I do/not do after donating blood?",
      answer: "After donating blood, you should rest, stay hydrated, avoid heavy lifting and strenuous exercise for at least 24 hours."
    },
    {
      question: "Who cannot donate blood?",
      answer: "People with certain health conditions, recent tattoos or piercings, certain medications, or risky behaviors may not be eligible to donate blood."
    }
  ];

  return (
    <div className="faq-section">
      <h2>FAQs</h2>
      <p>The health and safety of the donor as well as the recipient must be safeguarded.</p>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleToggle(index)}
          >
            <div className="faq-question">
              <span className="plus-minus">{activeIndex === index ? '-' : '+'}</span>
              {faq.question}
            </div>
            {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;