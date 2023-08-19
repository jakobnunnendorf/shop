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
import HelpCenterBanner from './HelpCenterBanner';
import Contact from './Contact';

export default function Help() {
    return (
        <div className='help'>
            <HelpCenterBanner />
            <FAQ />
            <Contact />
            {/*
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
            </div> */}
        </div>
    );
}
