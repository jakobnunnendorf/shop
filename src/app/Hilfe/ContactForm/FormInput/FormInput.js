import Input from '@components/Input/Input';
import emailjs from '@emailjs/browser';
import React from 'react';
import { useRef } from 'react';

export default function FormInput(props) {
    const form = useRef();

    /*
    function sendEmail(e) {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_raio2fy',
                'template_rwpvtgd',
                form.current,
                'tKEmu2eMAB7uAjgYz'
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        props.handleToggle();
    }*/

    return (
        <div>
            <form
                ref={form}
                // onSubmit={sendEmail}
                className='grid grid-cols-2 grid-rows-6 gap-x-5'
            >
                <Input label='Name' />
                <Input label='Telefon' />
                <Input label='Email' colspan='col-span-2' />
                <Input
                    label='Deine Nachricht'
                    inputType='textarea'
                    colspan='col-span-2'
                    rowspan='row-span-2'
                />
                <div className='grid col-span-2 place-content-center'>
                    <button
                        type='submit'
                        className='px-4 py-2 font-bold text-white shadow-xl bg-coastal-blue-10 rounded-xl'
                    >
                        Abschicken
                    </button>
                </div>
            </form>
        </div>
    );
}
