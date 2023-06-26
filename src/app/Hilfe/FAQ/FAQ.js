'use client';
import React, { useState } from 'react';
import './FAQ.css';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

// library.add(faQuestionCircle);

const questions = [
    {
        question: 'Was sind die Lieferoptionen?',
        answer: 'Wir bieten Standard-, Express- und Lieferoptionen am selben Tag an. Die Liefergebühren können je nach Standort und gewählter Liefermethode variieren.',
    },
    {
        question:
            'Kann ich meine Lieferadresse nach Aufgabe einer Bestellung ändern?',
        answer: 'Ja, Sie können Ihre Lieferadresse innerhalb eines bestimmten Zeitrahmens ändern. Bitte kontaktieren Sie unseren Kundenservice so schnell wie möglich, um Ihre Daten zu aktualisieren.',
    },
    {
        question: 'Was ist die Rückgaberegelung?',
        answer: 'Wir akzeptieren Rückgaben innerhalb von 30 Tagen nach dem Kauf für die meisten Artikel. Bitte beachten Sie unseren Abschnitt Rückgabe- und Rückerstattungsrichtlinien für weitere Details.',
    },
    {
        question: 'Wie verfolge ich meine Bestellung?',
        answer: 'Nachdem Ihre Bestellung versandt wurde, erhalten Sie eine Bestätigungs-E-Mail mit einer Sendungsverfolgungsnummer. Sie können diese Nummer verwenden, um Ihre Bestellung auf unserer Website zu verfolgen.',
    },
    {
        question: 'Welche Zahlungsmethoden werden akzeptiert?',
        answer: 'Wir akzeptieren alle gängigen Kreditkarten, PayPal und verschiedene mobile Zahlungsoptionen.',
    },
];

export default function FAQ() {
    const [activeIndices, setActiveIndices] = useState([]);

    const toggleQuestion = (index) => {
        if (activeIndices.includes(index)) {
            setActiveIndices(activeIndices.filter((i) => i !== index));
        } else {
            setActiveIndices([...activeIndices, index]);
        }
    };

    return (
        <div className='faq'>
            <h2 className='heading_faq'>
                {' '}
                Häufig gestellte Fragen{' '}
                {/* <FontAwesomeIcon icon='question-circle' />{' '} */}
            </h2>
            {questions.map((q, index) => (
                <div key={index} className='faq__item'>
                    <div className='faq__question-wrapper'>
                        <button
                            className={`faq__question ${
                                activeIndices.includes(index)
                                    ? 'faq__question--active'
                                    : ''
                            }`}
                            onClick={() => toggleQuestion(index)}
                        >
                            {q.question}
                        </button>
                        <span
                            className={`faq__arrow ${
                                activeIndices.includes(index)
                                    ? 'faq__arrow--active'
                                    : ''
                            }`}
                            onClick={() => toggleQuestion(index)}
                        >
                            &#9660;
                        </span>
                    </div>
                    {activeIndices.includes(index) && (
                        <div className='faq__answer'>{q.answer}</div>
                    )}
                </div>
            ))}
        </div>
    );
}
