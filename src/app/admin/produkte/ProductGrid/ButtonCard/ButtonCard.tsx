import React from 'react';
import { FiPlus } from 'react-icons/fi';
import styles from './buttonCard.module.css';

export default function ButtonCard() {
    const buttonCard = (
        <div className={styles.card}>
            <div
                className={`${styles.innerCard} flex flex-col items-center justify-center aspect-[4/7] w-full px-4 py-4 lg:aspect-[2/3] lg:h-full lg:py-8`}
            >
                <FiPlus
                    className='z-10 w-16 h-16 aspect-square lg:h-36 lg:w-36'
                    fill='true'
                />
                <h3 className='z-10 text-xs lg:text-xl'>Produkt Hinzufügen</h3>
            </div>
        </div>
    );
    return buttonCard;
}
