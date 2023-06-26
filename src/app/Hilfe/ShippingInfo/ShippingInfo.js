import React from 'react';
import './ShippingInfo.css';

const ShippingInfo = () => {
    return (
        <div className='shipping-info'>
            <h1>
                {/* <FontAwesomeIcon icon={faShippingFast} /> */}
                Versand- und Lieferinformationen
            </h1>
            <p className='intro'>Danke, dass Sie bei Phone 2 Door einkaufen.</p>
            <h2>
                {/* <FontAwesomeIcon icon={faFileAlt} /> */}
                Versandoptionen:
            </h2>

            <table className={'table-container'}>
                <thead>
                    <tr>
                        <th>Versandoption</th>
                        <th>Lieferzeit</th>
                        <th>Preis</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Standardversand</td>
                        <td>1-2 Werktage</td>
                        <td>€3,00</td>
                    </tr>
                    <tr>
                        <td>Expressversand</td>
                        <td>12 Stunden</td>
                        <td>€7,00</td>
                    </tr>
                    <tr>
                        <td>Internationaler Versand *</td>
                        <td>5-11 Werktage</td>
                        <td>€10,00 - €30,00</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan='3'>
                            {/* <FontAwesomeIcon icon={faMoneyBill} /> */}* Die
                            Preise für den internationalen Versand hängen vom
                            Land ab und werden beim Auschecken berechnet.
                        </td>
                    </tr>
                </tfoot>
            </table>

            <h2>
                {/* <FontAwesomeIcon icon={faMapMarkedAlt} /> */}
                Bestellverfolgung
            </h2>
            <p>
                Nach dem Versand Ihrer Bestellung erhalten Sie eine
                Sendungsverfolgungsnummer per E-Mail.
            </p>

            <h2>
                {/* <FontAwesomeIcon icon={faTools} /> */}
                Lieferprobleme
            </h2>
            <p>
                Wenn Sie Probleme mit der Lieferung Ihrer Bestellung haben,
                kontaktieren Sie uns bitte für Hilfe.
            </p>
        </div>
    );
};

export default ShippingInfo;
