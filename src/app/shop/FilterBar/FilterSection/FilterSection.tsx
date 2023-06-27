'use client';

import { useState } from 'react';
import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import Filter from './Filter';

export default function FilterSection(props: any) {
    const [show, setShow] = useState(
        props.section_name === 'Preis'
            ? true
            : props.section_name === 'Kategorien'
            ? true
            : false
    );
    const styles = {
        section_frame: {
            marginTop: '5vh',
            width: '50%',
            textAlign: 'left' as const,
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        hide_ul: {
            display: 'none',
        },
        show_ul: {
            display: 'block',
        },
    };
    return (
        <section style={styles.section_frame}>
            <div style={styles.header} onClick={() => setShow(!show)}>
                <h5>{props.section_name}</h5>
                <FiChevronDown />
            </div>

            <ul style={show ? styles.show_ul : styles.hide_ul}>
                {props.filter_array.map((filter: string, index: number) => (
                    <li key={index}>
                        <Filter name={filter} addFilters={props.addFilters} />
                    </li>
                ))}
            </ul>
        </section>
    );
}
