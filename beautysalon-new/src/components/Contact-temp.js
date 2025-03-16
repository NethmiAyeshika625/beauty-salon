import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for API calls
import Navbar from './NavBar';

const ContactTemp = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading state

    try {
      console.log("📩 Sending contact form data:", contactForm);
      
      const response = await axios.post('http://localhost:4000/api/contact', contactForm);

      console.log("✅ Response from backend:", response.data); // Log the response
      alert(response.data.message); // Show success message
      setContactForm({ name: '', email: '', message: '' }); // Clear the form
    } catch (error) {
      console.error('❌ Error sending message:', error.response ? error.response.data : error.message);
      alert('Failed to send message. Please try again.');
    } finally {
      setLoading(false); // Hide loading state
    }
  };

  return (
    <>
      <Navbar />
      <div className="contact-page">
        <h2>Contact Us</h2>
        <p>
          Have any questions? We'd love to hear from you. Please fill out the form below or email us at <a href="mailto:info@beautybynethu.com">info@beautybynethu.com</a>.
        </p>
        <form onSubmit={handleSubmit} className="contact-form">
          <label>Name:</label>
          <input type="text" name="name" value={contactForm.name} onChange={handleChange} required />

          <label>Email:</label>
          <input type="email" name="email" value={contactForm.email} onChange={handleChange} required />

          <label>Message:</label>
          <textarea name="message" value={contactForm.message} onChange={handleChange} required></textarea>

          <button type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactTemp;