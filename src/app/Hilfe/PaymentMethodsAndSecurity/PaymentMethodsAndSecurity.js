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
        <section className='p-6 bg-gray-100 rounded-md shadow-md'>
            <h2 className='mb-4 text-2xl font-bold'>
                Stripe Checkout-Zahlungsmodul
            </h2>
            <p className='mb-4'>
                Wir verwenden Stripe Checkout, um Ihnen eine sichere, schnelle
                und zuverlässige Zahlungserfahrung zu bieten. Stripe ist ein
                weltweit führender Zahlungsanbieter, dem Millionen von
                Unternehmen vertrauen.
            </p>
            <p className='mb-4'>
                Mit Stripe Checkout können Sie bequem mit Ihrer Kreditkarte,
                Debitkarte oder über andere beliebte Zahlungsmethoden bezahlen.
                Der gesamte Zahlungsprozess ist verschlüsselt und sicher, sodass
                Sie mit Vertrauen einkaufen können.
            </p>
            <ul className='pl-5 mb-4 list-disc'>
                <li>Schnelle und einfache Zahlung</li>
                <li>Unterstützt viele Zahlungsmethoden</li>
                <li>100% sichere und verschlüsselte Transaktionen</li>
            </ul>
            <p>
                Wenn Sie Fragen zum Zahlungsprozess oder zu Stripe haben, zögern
                Sie bitte nicht, uns zu kontaktieren.
            </p>
            <section className='p-6 bg-white rounded-md shadow-md'>
                <h2 className='mb-4 text-2xl font-bold text-center'>
                    Vertrauenswürdige Unternehmen, die Stripe verwenden
                </h2>
                <p className='mb-4 text-center'>
                    Viele weltbekannte Unternehmen vertrauen auf Stripe für ihre
                    Zahlungsabwicklungen. Sie sind in guter Gesellschaft.
                </p>
                <div className='flex items-center justify-center space-x-10'>
                    {/* You'll need to replace the src attributes with the actual paths or URLs to the logos */}
                    <embed
                        src='https://stripe.com/en-sg/customers'
                        style={{ width: '500px', height: '300px' }}
                    />
                </div>
            </section>
        </section>
    );
};

export default PaymentMethodsAndSecurity;
