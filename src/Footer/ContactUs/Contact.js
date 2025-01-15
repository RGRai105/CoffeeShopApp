import React from 'react';
import "../../style.css"

const ContactUs = () => {
    return (
        <div>
            <div className="contacter-container">
                <form>
                    <div className="input-group">
                        <input type="text" className="contact-input" placeholder="Your Name" required />
                    </div>
                    <div className="input-group">
                        <input type="email" className="contact-input" placeholder="Your Email" required />
                    </div>
                    <div className="input-group">
                        <textarea className="contact-input message" placeholder="Your Message" required></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
