import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
            {/* left side */}
            <div className="flexColStart c-left">
                <span className="orangeText">Our Contacts</span>
                <span className="primaryText">Easy to Contact us</span>
                <span className="secondaryText">
                    We are always ready to help you by providing the best service to you
                    <br />
                    We believe a good blace to live can make your live better
                </span>
            </div>

            {/* right side */}
            <div className="c-right">
                <div className="image-container">
                    <img src="./contact.jpg" alt="contact" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact;