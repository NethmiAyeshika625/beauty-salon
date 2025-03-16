import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './NavBar';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Hair Styling',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form data being submitted:', formData);

    try {
      // Send data to the backend API (POST request)
      const response = await axios.post('http://localhost:4000/api/book-appointment', formData);
      console.log('Response:', response.data);  // Log response from backend
      alert(response.data.message);  // Show success message

      // Reset form data after successful submission
      setFormData({ name: '', email: '', service: 'Hair Styling', date: '', time: '' });
    } catch (error) {
      console.error('Error booking appointment:', error.response ? error.response.data : error);
      alert('There was an error booking your appointment.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="booking-page">
        <div className="booking-intro">
          <h2>Ready to Transform Your Look?</h2>
          <p>
            Are you excited to experience our top-notch beauty services? Let us pamper you to perfection!
            Book your appointment now and get ready to shine.
          </p>
        </div>
        <div className="booking-form">
          <h2>Book Your Appointment</h2>
          <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />

            <label>Email:</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />

            <label>Service:</label>
            <select name="service" value={formData.service} onChange={handleChange}>
              <option value="Hair Styling">Hair Styling</option>
              <option value="Facials">Facials</option>
              <option value="Manicure & Pedicure">Manicure & Pedicure</option>
            </select>

            <label>Date:</label>
            <input 
              type="date" 
              name="date" 
              value={formData.date} 
              onChange={handleChange} 
              required 
            />

            <label>Time:</label>
            <input 
              type="time" 
              name="time" 
              value={formData.time} 
              onChange={handleChange} 
              required 
            />

            <button type="submit">Confirm Appointment</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Booking;
