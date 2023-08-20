import React from 'react';
import { FiMail, FiPhone } from 'react-icons/fi';
import MapComponent from './MapComponent';

export default function ContactInfo() {
    return (
        <div className='grid grid-rows-2 py-8 lg:grid-cols-2 lg:grid-rows-none '>
            <div className='py-16 bg-coastal-blue-10'>
                <h2 className='text-3xl font-bold text-center text-white '>
                    Kontakt
                </h2>
                <ul className='block px-16 space-y-4 text-lg font-bold text-white'>
                    <li>
                        <h3>Ruf bei uns an:</h3>
                        <a
                            href='tel:  +65 84250580'
                            className='flex items-center py-4 gap-x-2'
                        >
                            <div className='p-2 border border-white rounded-full aspect-square'>
                                <FiPhone className='m-auto' />
                            </div>
                            <p> +65 84250580</p>
                        </a>
                    </li>
                    <li>
                        <h3>Schreib uns eine Email</h3>
                        <a
                            href='mailto:Phone2Door@gmail.com'
                            className='flex items-center py-4 gap-x-2'
                        >
                            <div className='p-2 border border-white rounded-full aspect-square'>
                                <FiMail />
                            </div>
                            <p>Phone2Door@gmail.com</p>
                        </a>
                    </li>
                </ul>
            </div>
            <MapComponent />
        </div>
    );
}
////style={styles.container}
