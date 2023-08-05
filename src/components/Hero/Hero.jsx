import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">

            {/* left side */}
            <div className="hero-left">

                <div className="hero-title">
                    <h1>Discover <br /> Most Suitable <br /> Property</h1>
                </div>

                <div className="hero-des">
                    <span>Find a variety of property that suits you very easily</span>
                    <span>Forgeet all difficulties in finding a residence for you</span>
                </div>

                <div className="search-bar">
                    search bar
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