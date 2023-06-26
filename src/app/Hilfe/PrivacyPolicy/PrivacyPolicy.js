import React from 'react';
import './PrivacyPolicy.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLock, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

export default function PrivacyPolicy() {
    return (
        <div className='privacy-policy'>
            <h1>
                {/* <FontAwesomeIcon icon={faLock} /> */}
                Datenschutz
            </h1>
            <p>
                Bei Phone 2 Door glauben wir an die Bedeutung des Schutzes Ihrer
                Privatsphäre. Diese Richtlinie skizziert, wie wir Informationen
                sammeln, verwenden und schützen, die wir von Ihnen sammeln
                können, während Sie unsere Website{' '}
                <a href='https://www.phone2door.com'>
                    https://www.phone2door.com
                </a>{' '}
                oder eine andere Website, die wir besitzen und betreiben,
                nutzen. Durch die Nutzung unserer Website akzeptieren Sie die in
                dieser Richtlinie beschriebenen Praktiken.
            </p>
            <h2>Die von uns gesammelten Informationen</h2>
            <p>
                Wir können persönliche Informationen wie Ihren Namen, Ihre
                E-Mail-Adresse und Ihre Telefonnummer erfassen, wenn Sie sich
                auf unserer Website registrieren, eine Bestellung aufgeben oder
                unseren Newsletter abonnieren. Wir können auch nicht
                personenbezogene Informationen wie Ihren Browsertyp, Ihre
                IP-Adresse und die Seiten, die Sie auf unserer Website besuchen,
                sammeln.
            </p>
            <h2>Wie wir Ihre Informationen nutzen</h2>
            <p>
                Wir verwenden die von uns gesammelten Informationen, um Ihre
                Bestellungen zu bearbeiten, Kundensupport zu bieten, Ihnen
                Werbe-E-Mails zu senden und unsere Website und Dienstleistungen
                zu verbessern. Wir können Ihre Informationen auch verwenden, um
                gesetzlichen Verpflichtungen nachzukommen oder Streitigkeiten
                beizulegen.
            </p>
            <h2>Weitergabe von Informationen</h2>
            <p>
                Wir verkaufen oder vermieten Ihre persönlichen Daten nicht an
                Dritte. Wir können Ihre Informationen mit Dienstleistern teilen,
                die uns helfen, Zahlungen abzuwickeln, Bestellungen zu liefern
                oder Kundensupport zu bieten. Wir können Ihre Informationen auch
                mit Strafverfolgungsbehörden oder anderen staatlichen Stellen
                teilen, wenn dies gesetzlich vorgeschrieben ist.
            </p>
            <h2>Cookies</h2>
            <p>
                Wir verwenden Cookies, um Ihre Benutzererfahrung zu verbessern
                und personalisierte Inhalte bereitzustellen. Sie können in den
                Einstellungen Ihres Browsers wählen, ob Sie Cookies deaktivieren
                möchten, aber dies kann die Funktionalität unserer Website
                beeinträchtigen.
            </p>
            <h2>
                {/* <FontAwesomeIcon icon={faShieldAlt} /> */}
                Sicherheit
            </h2>
            <p>
                Wir nehmen Ihre Sicherheit ernst. Alle Zahlungsinformationen
                werden mit SSL-Technologie (Secure Socket Layer) verschlüsselt,
                um sicherzustellen, dass Ihre Informationen geschützt sind.
                Achten Sie auf das Vorhängeschlosssymbol in der Adressleiste
                Ihres Browsers, um zu überprüfen, ob Sie sich auf einer sicheren
                Seite befinden. Wir treffen angemessene Vorkehrungen, um Ihre
                persönlichen Daten vor unbefugtem Zugriff, Gebrauch oder
                Offenlegung zu schützen. Allerdings ist keine Methode der
                Übertragung über das Internet oder der elektronischen
                Speicherung vollständig sicher und wir können keine absolute
                Sicherheit garantieren.
            </p>
            <h2>Änderungen dieser Richtlinie</h2>
            <p>
                Wir können diese Datenschutzrichtlinie von Zeit zu Zeit
                aktualisieren. Wir werden Sie über alle Änderungen informieren,
                indem wir die neue Richtlinie auf unserer Website
                veröffentlichen. Es wird empfohlen, diese Richtlinie regelmäßig
                auf Änderungen zu überprüfen.
            </p>
        </div>
    );
}
