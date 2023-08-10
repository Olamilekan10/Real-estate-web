import React from 'react';
import './Contact.css';
import { MdCall } from 'react-icons/md';

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


                <div className="flexColStart contactModes">
                    {/* first row */}
                    <div className="flexColStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">Call</span>
                                    <span className="secondaryText">012 345 678 910</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Call Now</div>
                        </div>
                    </div>
                </div>

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