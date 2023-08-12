import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">

            {/* left side */}
            <div className="flexColStart f-left">
                <img src="./logo2.png" alt="" width={120} />

                <span className="secondaryText">
                    Our vision is to make all People <br />
                    the best place to live for them.
                </span>
            </div>

            {/* right side */}
            <div className="flexColStart f-right">
                <span className="primaryText">Information</span>
                <span className="secondaryText">145 New York, FL 4571, USA</span>

                <div className="flexCenter-f-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer;