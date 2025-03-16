import React from 'react';
import Navbar from './NavBar';

const Testimonials = () => {
  return (
    <>
      <Navbar />
      <div className="testimonials-page">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-cards-container">
          <div className="testimonial-card">
            <p>"I absolutely love the service at Beauty by Nethu. The team made me feel so pampered and my hair looks fantastic!"</p>
            <h4>- john wilson</h4>
          </div>
          <div className="testimonial-card">
            <p>"The facials are heavenly! I've never felt more relaxed and rejuvenated."</p>
            <h4>- Sarah Smith</h4>
          </div>
          <div className="testimonial-card">
            <p>"From the manicure to the pedicure, everything was perfect. I feel like a new person."</p>
            <h4>- Emily Johnson</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;

