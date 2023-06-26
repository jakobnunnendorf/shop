import React from 'react';
import './ReturnRefund.css';

const ReturnRefundPolicy = () => {
    return (
        <div className='return-refund-policy'>
            <h1>
                {/* <FontAwesomeIcon icon="undo" /> */}
                Rückgabe- und Rückerstattungsrichtlinie
            </h1>
            <p className='intro'>Danke, dass Sie bei Phone 2 Door einkaufen.</p>
            <p className='intro'>
                Bitte lesen Sie diese Richtlinie sorgfältig durch. Dies ist die
                Rückgabe- und Rückerstattungsrichtlinie von Phone 2 Door.
            </p>

            <h2>
                {/* <FontAwesomeIcon icon="cube" /> */}
                Physische Produkte
            </h2>
            <p>
                Wenn Sie mit Ihrem Kauf nicht vollständig zufrieden sind, sind
                wir hier um Ihnen zu helfen.
            </p>
            <p>
                Sie haben 14 Kalendertage Zeit, einen Artikel ab dem Datum, an
                dem Sie ihn erhalten haben, zurückzugeben. Um für eine
                Rücksendung in Frage zu kommen, muss Ihr Artikel unbenutzt und
                im gleichen Zustand sein, in dem Sie ihn erhalten haben. Ihr
                Artikel muss in der Originalverpackung sein. Ihr Artikel muss
                den Beleg oder Kaufnachweis haben.
            </p>
            <p>
                Bitte kontaktieren Sie uns, bevor Sie das Produkt zurücksenden.
            </p>

            <h2>
                {/* <FontAwesomeIcon icon="shipping-fast" /> */}
                Versandkosten
            </h2>
            <p>
                Sie sind verantwortlich für die Zahlung der Versandkosten und
                das Risiko von Verlust oder Beschädigung des Produkts während
                des Versands, sowohl zu als auch von Phone 2 Door.
            </p>

            <h2>
                {/* <FontAwesomeIcon icon="exclamation-triangle" /> */}
                Beschädigte Artikel
            </h2>
            <p>
                Wenn Sie ein beschädigtes Produkt erhalten haben,
                benachrichtigen Sie uns bitte sofort um Unterstützung.
            </p>

            <h2>
                {/* <FontAwesomeIcon icon="tags" /> */}
                Verkaufsartikel
            </h2>
            <p>
                Artikel, die im Ausverkauf gekauft wurden, können nicht
                erstattet werden.
            </p>
        </div>
    );
};

export default ReturnRefundPolicy;
