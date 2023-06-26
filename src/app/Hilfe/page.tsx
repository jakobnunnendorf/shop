import React from 'react';
import FAQ from './FAQ/FAQ';
import PrivacyPolicy from './PrivacyPolicy/PrivacyPolicy';
import ShippingInfo from './ShippingInfo/ShippingInfo';
import ReturnRefund from './ReturnRefund/ReturnRefund';
import PaymentMethodsAndSecurity from './PaymentMethodsAndSecurity/PaymentMethodsAndSecurity';
import ContactUs from './ContactUs/ContactUs';
// import {
//     faEnvelope,
//     faFax,
//     faMobile,
//     faMobileAlt,
//     faPhone,
// } from '@fortawesome/free-solid-svg-icons';
import { FiMail, FiPhone, FiSmartphone } from 'react-icons/fi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContactForm from './ContactForm/ContactForm';

import './Help.css';

export default function Help() {
    return (
        <div className='help'>
            <img
                src='https://dominionpayroll.com/wp-content/uploads/HelpCenter.png'
                alt='Hilfezentrum'
                className='help__image'
            />
            <div className='help__section'>
                <FAQ />
            </div>

            <div className='help__section'>
                <h2>
                    <FiPhone /> Kontaktiere uns
                </h2>
                <div className='help__contact-form'>
                    <ContactForm />
                </div>
                <div className='help__contact-info'>
                    <p>
                        <span className='phone'>
                            {' '}
                            <FiPhone /> +65 95045938{' '}
                        </span>
                        <a href='mailto:Phone2Door@gmail.com' className='email'>
                            {' '}
                            <FiMail /> Phone2Door@gmail.com{' '}
                        </a>
                    </p>
                </div>
            </div>

            <div className='help__section'>
                <PaymentMethodsAndSecurity />
            </div>

            <div className='help__section'>
                <ShippingInfo />
            </div>

            <div className='help__section'>
                <ReturnRefund />
            </div>

            <div className='help__section'>
                <PrivacyPolicy />
            </div>
        </div>
    );
}
