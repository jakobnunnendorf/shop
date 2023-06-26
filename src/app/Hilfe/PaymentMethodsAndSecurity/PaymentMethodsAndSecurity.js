import React from 'react';
import './PaymentMethodsAndSecurity.css';
import visaLogo from './payment-logos/visa.png';
import mastercardLogo from './payment-logos/mastercard.png';
import amexLogo from './payment-logos/amx.png';
import paypalLogo from './payment-logos/paypal.png';
import paylahLogo from './payment-logos/paylah.png';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoins, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

// library.add(faCoins);
// library.add(faShieldAlt);

const PaymentMethodsAndSecurity = () => {
    return (
        <div className='payment-methods-security'>
            <h2>Zahlungsmethoden</h2> {/* <FontAwesomeIcon icon={faCoins} /> */}
            <div className='payment-methods'>
                <div className='cardsDescription'>
                    <div className='cards'>
                        <img class='smallLogo' src={visaLogo} alt='visa' />
                        <img
                            class='smallLogo'
                            src={mastercardLogo}
                            alt='mastercard'
                        />
                        <img class='smallLogo' src={amexLogo} alt='amex' />
                    </div>
                    <div className='description'>
                        Phone 2 Door bietet eine Reihe von Zahlungsoptionen für
                        Ihre Bequemlichkeit an, darunter Visa, Mastercard und
                        American Express. Mit diesen beliebten Debit- und
                        Kreditkarten können Sie Ihre Einkäufe bei uns einfach
                        und sicher tätigen. Darüber hinaus können Sie sogar für
                        exklusive Rabattangebote berechtigt sein, wenn Sie Ihre
                        Karte zum Einkaufen bei uns verwenden. Unsere Website
                        verwendet SSL-Verschlüsselung,
                        Zwei-Faktor-Authentifizierung, PCI-Konformität und
                        sichere Passwörter, um Ihre Transaktionen und
                        persönlichen Informationen zu schützen. Einkaufen mit
                        Vertrauen, dass Ihre Sicherheit unsere oberste Priorität
                        ist.
                    </div>
                </div>
                <div className='payPalDescription'>
                    <div className='payPal'>
                        <img class='bigLogo' src={paypalLogo} alt='paypal' />
                    </div>
                    <div className='description'>
                        PayPal ist eine sichere und bequeme Möglichkeit,
                        Online-Zahlungen zu tätigen. Es ermöglicht Ihnen, Ihr
                        Bankkonto oder Ihre Kreditkarte zu verknüpfen und
                        Einkäufe zu tätigen, ohne Ihre Finanzinformationen mit
                        Händlern teilen zu müssen. Mit PayPal können Sie einfach
                        für Ihre Phone 2 Door Bestellungen bezahlen, ohne jedes
                        Mal Ihre Zahlungsinformationen eingeben zu müssen, wenn
                        Sie einkaufen.
                    </div>
                </div>
                <div className='payLahDescription'>
                    <div className='payLah'>
                        <img class='bigLogo' src={paylahLogo} alt='paylah' />
                    </div>
                    <div className='description'>
                        Paylah ist eine sichere mobile Wallet-App der DBS Bank
                        für einfache und sichere Zahlungen mit Ihrem Telefon.
                        Mit Funktionen wie QR-Code-Scanning, Rechnungszahlungen
                        und Top-Up-Services ist es eine problemlose Möglichkeit,
                        Ihre Finanzen unterwegs zu verwalten. Paylah verwendet
                        Verschlüsselungstechnologie und
                        Zwei-Faktor-Authentifizierung, um Benutzerinformationen
                        zu schützen, und wird durch die strengen
                        Sicherheitsmaßnahmen der DBS Bank unterstützt.
                    </div>
                </div>
            </div>
            <div className='security'>
                <h2>
                    {' '}
                    {/* <FontAwesomeIcon icon={faShieldAlt} /> */}
                    Sichere Transaktionen
                </h2>
                <p className='securityDescription'>
                    Zusätzlich zu unseren eigenen Sicherheitsmaßnahmen arbeiten
                    wir auch mit vertrauenswürdigen Zahlungsprozessanbietern
                    zusammen, um sicherzustellen, dass Ihre Transaktionen sicher
                    und geschützt sind. Diese Anbieter halten sich an strenge
                    Sicherheitsstandards, einschließlich PCI-Konformität, um
                    Ihre sensiblen Finanzinformationen zu schützen. Mit
                    SSL-Verschlüsselung und Zwei-Faktor-Authentifizierung können
                    Sie darauf vertrauen, dass Ihre persönlichen Daten während
                    jeder Phase des Zahlungsprozesses sicher aufbewahrt werden.
                    Bei Phone 2 Door verstehen wir, dass Ihre Seelenruhe wichtig
                    ist, und wir bemühen uns, ein sicheres und sorgenfreies
                    Einkaufserlebnis zu bieten.
                </p>
            </div>
        </div>
    );
};

export default PaymentMethodsAndSecurity;
