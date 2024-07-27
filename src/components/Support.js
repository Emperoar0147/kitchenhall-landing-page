import React, { useEffect } from 'react';
import './Support.css';

const Support = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.src = 'https://path-to-your-chat-service.js'; // Replace with the actual URL
    script.async = true;

    // Append the script to the body
    document.body.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="support">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form action="/submit-form" method="post">
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Message:
            <textarea name="message" required></textarea>
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
      <div className="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>What is your return policy?</h3>
          <p>Our return policy allows you to return items within 7 days of purchase...</p>
        </div>
        {/* Add more FAQs as needed */}
      </div>
      <div className="phone-support">
        <h2>Phone Support</h2>
        <a href="tel:+1234567890">Call Us: +1 (234) 567-890</a>
      </div>
    </div>
  );
};

export default Support;
