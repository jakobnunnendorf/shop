import React from 'react';
import { FiMail, FiPhone } from 'react-icons/fi';
import ContactForm from './ContactForm/ContactForm';

export default function Contact() {
    return (
        <div>
            <h2>
                <FiPhone /> Kontaktiere uns
            </h2>
            <div className='help__section'>
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
        </div>
    );
}
