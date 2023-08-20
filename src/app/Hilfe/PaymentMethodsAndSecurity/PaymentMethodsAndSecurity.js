import Image from 'next/image';
import React from 'react';
import './PaymentMethodsAndSecurity.css';
import amexLogo from './payment-logos/amx.png';
import mastercardLogo from './payment-logos/mastercard.png';
import paylahLogo from './payment-logos/paylah.png';
import paypalLogo from './payment-logos/paypal.png';
import visaLogo from './payment-logos/visa.png';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FiDollarSign } from 'react-icons/fi';
// library.add(faCoins);
// library.add(faShieldAlt);

const PaymentMethodsAndSecurity = () => {
    return (
        <section className='grid grid-rows-2 py-16 rounded-md shadow-md lg:grid-rows-none lg:grid-cols-2'>
            <article className='grid grid-rows-2 p-6 rounded-md '>
                <div className=''>
                    <figure className='relative w-full h-full '>
                        <Image
                            src={'/stripe/wordmark-blurple-large.png'}
                            fill
                            className='object-contain'
                            alt='Stripe Logo'
                        />
                    </figure>
                </div>
                <div>
                    <h2 className='mb-4 text-2xl font-bold lg:text-center'>
                        Vertrauenswürdige Unternehmen, <br />
                        die Stripe verwenden{' '}
                        <a href='https://stripe.com/en-sg/customers'>
                            <span className='font-bold text-blue-800 underlined'>
                                (Mehr erfahren)
                            </span>
                        </a>
                    </h2>

                    <p className='mb-4 text-center'>
                        Viele weltbekannte Unternehmen vertrauen auf Stripe für
                        ihre Zahlungsabwicklungen. Sie sind in guter
                        Gesellschaft.
                    </p>
                </div>
            </article>
            <article className='px-8'>
                <h2 className='mb-4 text-2xl font-bold'>
                    Stripe Checkout-Zahlungsmodul
                </h2>
                <p className='mb-4'>
                    Wir verwenden Stripe Checkout, um Ihnen eine sichere,
                    schnelle und zuverlässige Zahlungserfahrung zu bieten.
                    Stripe ist ein weltweit führender Zahlungsanbieter, dem
                    Millionen von Unternehmen vertrauen.
                </p>
                <p className='mb-4'>
                    Mit Stripe Checkout können Sie bequem mit Ihrer Kreditkarte,
                    Debitkarte oder über andere beliebte Zahlungsmethoden
                    bezahlen. Der gesamte Zahlungsprozess ist verschlüsselt und
                    sicher, sodass Sie mit Vertrauen einkaufen können.
                </p>
                <ul className='pl-5 mb-4 list-disc'>
                    <li>Schnelle und einfache Zahlung</li>
                    <li>Unterstützt viele Zahlungsmethoden</li>
                    <li>100% sichere und verschlüsselte Transaktionen</li>
                </ul>
                <p>
                    Wenn Sie Fragen zum Zahlungsprozess oder zu Stripe haben,
                    zögern Sie bitte nicht, uns zu kontaktieren.
                </p>
            </article>
        </section>
    );
};

export default PaymentMethodsAndSecurity;
