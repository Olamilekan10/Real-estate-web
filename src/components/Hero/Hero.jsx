import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">

            {/* left side */}
            <div className="hero-left">

                <div className="hero-title">
                    <h1>
                        Discover Most Suitable Property
                    </h1>
                </div>
            </div>

            {/* right side */}
            <div className="flexCenter hero-right">
                <div className="image-container">
                    <img src="./hero-image.png" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero;