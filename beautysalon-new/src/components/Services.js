import React from 'react';
import Navbar from './NavBar';

const Services = () => {
  return (
    <>
      <Navbar />
      <div className="services-page">
        <h2>Our Services</h2>
        <section className="intro">
          <p>Discover our world of beauty and style. We offer premium services that bring out the best in you.</p>
        </section>
        <div className="service-cards-container">
          <div className="service-card">
            <span role="img" aria-label="hair styling">💇‍♀️</span>
            <h3>Hair Styling</h3>
            <p>Professional cuts, color, and treatments.</p>
          </div>
          <div className="service-card">
            <span role="img" aria-label="facials">💆‍♀️</span>
            <h3>Facials</h3>
            <p>Customized skincare treatments for glowing skin.</p>
          </div>
          <div className="service-card">
            <span role="img" aria-label="manicure">💅</span>
            <h3>Manicure & Pedicure</h3>
            <p>Luxurious care for your hands and feet.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
