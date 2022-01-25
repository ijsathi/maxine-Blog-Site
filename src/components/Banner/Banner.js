import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <>
    <div className="banner">
      <div className="slider">
        <img id="slideImg" src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
      </div>
      <div className="overlay">
        <div className="content">
          <h1 className='garden'>maxine</h1>
          <p REFL-TEXT="OUR ARTICLES" className='p'>OUR ARTICLES</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Banner;