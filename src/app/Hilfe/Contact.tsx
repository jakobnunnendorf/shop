import React from 'react';
import { FiMail, FiPhone } from 'react-icons/fi';
import ContactForm from './ContactForm/ContactForm';

export default function Contact() {
    return (
        <div className='px-4 pb-16 lg:w-1/2 lg:mx-auto '>
            <h2 className='py-8 text-3xl font-bold lg:text-center text-coastal-blue-10 '>
                Kontaktiere uns
            </h2>
            <ContactForm />
            <div className='help__contact-info'>
                <p>
                    <span className='phone'>
                        <FiPhone /> +65 95045938{' '}
                    </span>
                    <a href='mailto:Phone2Door@gmail.com' className='email'>
                        <FiMail /> Phone2Door@gmail.com{' '}
                    </a>
                </p>
            </div>
        </div>
    );
}
