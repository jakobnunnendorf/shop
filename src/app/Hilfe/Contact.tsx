import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactInfo from './ContactInfo';

export default function Contact() {
    return (
        <div className='pb-16 lg:mx-auto'>
            <h2 className='px-8 py-8 text-3xl font-bold lg:text-center text-coastal-blue-10 '>
                Melde dich bei uns
            </h2>
            <ContactForm />
            <ContactInfo />
        </div>
    );
}
