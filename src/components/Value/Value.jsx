import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
} from 'react-accessible-accordion';
import "react-accessible-accordion/dist/fancy-example.css";
import {MdOutlineArrowDropDown} from 'react-icons/md'
import './Value.css';

const Value = () => {
  return (
    <section className="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">
            {/* left side */}
            <div className="v-left">
                <div className="image-container">
                    <img src="./value.png" alt="" />
                </div>
            </div>

            {/* right side */}
            <div className="flexColStart v-right">
                <span className="orangeText">Our Value</span>
                <span className="primaryText">Value we give to you</span>
                <span className="secondaryText">
                    We are always ready to help you by providing the best service to you
                    <br />
                    We believe a good blace to live can make your live better
                </span>
            </div>
        </div>
    </section>
  )
}

export default Value;