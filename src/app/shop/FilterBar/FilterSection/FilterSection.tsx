'use client';

import { useState } from 'react';
import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import Filter from './Filter';

export default function FilterSection(props: any) {
    const hide =
        props.section_name === 'Preis'
            ? true
            : props.section_name === 'Kategorien'
            ? true
            : false;
    const [show, setShow] = useState(hide);
    const styles = {
        hide_ul: {
            display: 'none',
        },
        show_ul: {
            display: 'block',
        },
    };
    return (
        <section className=' w-fit'>
            <div
                className='flex text-xl font-bold text-coastal-blue-10'
                onClick={() => setShow(!show)}
            >
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
