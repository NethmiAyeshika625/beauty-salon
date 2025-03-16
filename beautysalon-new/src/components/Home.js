import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './NavBar';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home">
        <header
          className="hero"
          style={{
            backgroundImage: "url('/image.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
          }}
        >
          <div className="hero-content">
            <h1>Welcome to Beauty by Nethu</h1>
            <p>Your destination for beauty transformation.</p>
            <Link to="/booking">
              <button className="explore-btn" aria-label="Book an appointment">
                Book Appointment
              </button>
            </Link>
          </div>
        </header>
      </div>
    </>
  );
};

export default Home;

