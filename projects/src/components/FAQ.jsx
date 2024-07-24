import React, { useState } from 'react';
import './FAQ.css';

function FAQ () {
  const [activeIndex, setActiveIndex] = useState(null);

  function handleToggle (index) {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    } 
  };

  const faqs = [
    {
       question: "Who is eligible to donate blood?",
      answer: "Individuals who are generally healthy, weigh at least 110 pounds, and are at least 16 or 17 years old (depending on state laws) are typically eligible to donate blood. Specific eligibility criteria may vary, so it's best to check with the local blood donation center."
    },
    {
      question: "How often can I donate blood?",
      answer: "Whole blood can be donated every 56 days. Plasma and platelet donation frequency may vary, with plasma donations possible every 28 days and platelet donations every 7 days, up to 24 times a year."
    },
    {
      question: "What should I do to prepare for a blood donation?",
      answer: "Drink plenty of water, eat a healthy meal before donating, and avoid fatty foods. Ensure you bring a valid ID and any required paperwork."
    },
    {
      question: "Is donating blood safe?",
      answer: "Yes, donating blood is safe. Blood donation centers use sterile, single-use needles and equipment to ensure the donor's safety."
    },
    {
      question: "How long does the blood donation process take?",
      answer: "The entire process, including registration, a brief medical check-up, the donation itself, and a short rest period, usually takes about an hour. The actual blood draw typically takes 10-15 minutes."
    },
    {
      question:"What happens to my blood after donation?",
      answer: "After donation, the blood is tested, processed, and stored. It is then distributed to hospitals and clinics to help patients in need."
    },
    {
      question: "Can I donate blood if I have a medical condition?",
      answer: "Some medical conditions may affect eligibility to donate blood. It's best to consult with the blood donation center or a healthcare provider to determine if you are eligible.."
    },
    {
      question: "Will donating blood affect my health or performance?",
      answer: "Donating blood is generally safe and has minimal impact on health. Most donors feel fine after a short rest and can resume normal activities. It's advisable to avoid heavy exercise or strenuous activities for 24 hours after donation."
    },
    {
      question: "Can I donate blood if I have traveled recently?",
      answer: "Recent travel to certain areas may temporarily affect eligibility due to the risk of infectious diseases. Check with the blood donation center for specific travel-related restrictions."
    },
    {
      question: "How can I find a blood donation center near me?",
      answer: "You can use the website's locator tool, enter your zip code, or contact your local hospital or blood bank to find the nearest donation center."
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