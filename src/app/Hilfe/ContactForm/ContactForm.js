'use client';

import React from 'react';
import { useState } from 'react';
import './form.css';
import Dank from './Dank.js/Dank';
import FormInput from './FormInput/FormInput';

export default function ContactForm(props) {
    const [submitted, toggleSubmitted] = useState(false);
    const handleToggle = () => {
        toggleSubmitted(!submitted);
    };
    return (
        <div className='px-8 mx-auto lg:w-1/3'>
            {submitted ? (
                <Dank version={props.version} />
            ) : (
                <FormInput
                    version={props.version}
                    handleToggle={handleToggle}
                />
            )}
        </div>
    );
}
