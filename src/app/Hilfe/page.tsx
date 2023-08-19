import Image from 'next/image';
import React from 'react';
import { FiMail, FiPhone } from 'react-icons/fi';
import ContactForm from './ContactForm/ContactForm';
import FAQ from './FAQ/FAQ';
import PaymentMethodsAndSecurity from './PaymentMethodsAndSecurity/PaymentMethodsAndSecurity';
import PrivacyPolicy from './PrivacyPolicy/PrivacyPolicy';
import ReturnRefund from './ReturnRefund/ReturnRefund';
import ShippingInfo from './ShippingInfo/ShippingInfo';
import './Help.css';

export default function Help() {
    return (
        <div className='help'>
            <div
                style={{
                    backgroundImage: "url('/three_phones_v2_cropped.png')",
                }}
                className='relative grid w-full bg-center bg-no-repeat bg-cover place-content-center h-fit rborder'
            >
                <h2 className='z-10 py-16 text-5xl font-bold text-center lg:py-32 gradient-text lg:text-9xl text-coastal-blue-10 '>
                    Hilfe Center
                </h2>
            </div>
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
