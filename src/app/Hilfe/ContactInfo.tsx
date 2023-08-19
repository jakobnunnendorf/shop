import React from 'react';
import { FiMail, FiPhone } from 'react-icons/fi';
import MapComponent from './MapComponent';

export default function ContactInfo() {
    return (
        <div className='grid grid-rows-2 px-8 py-8 lg:grid-cols-2 lg:grid-rows-none '>
            <div className='bg-coastal-blue-10'>
                <h2 className='py-4 text-3xl font-bold text-center text-white'>
                    Kontakt
                </h2>
                <div className='block text-lg font-bold text-white lg:flex'>
                    <a
                        href='tel:  +65 84250580'
                        className='flex items-center py-4 gap-x-2'
                    >
                        <div className='p-2 border border-white rounded-full aspect-square'>
                            <FiPhone className='m-auto' />
                        </div>
                        <p> +65 84250580</p>
                    </a>
                    <a
                        href='mailto:Phone2Door@gmail.com'
                        className='flex items-center py-4 gap-x-2'
                    >
                        <div className='p-2 border border-white rounded-full aspect-square'>
                            <FiMail />
                        </div>
                        <p>Phone2Door@gmail.com</p>
                    </a>
                </div>
            </div>
            <MapComponent />
        </div>
    );
}
////style={styles.container}
