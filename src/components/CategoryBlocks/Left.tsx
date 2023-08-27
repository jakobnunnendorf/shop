import React from 'react';
import {
    FiBatteryCharging,
    FiMoreHorizontal,
    FiShield,
    FiSmartphone,
    FiTablet,
} from 'react-icons/fi';
import { CategoryBlock } from './CategoryBlock';

export default function Left() {
    return (
        <aside className='px-10 py-8 space-y-8 bg-coastal-blue-10 lg:py-16'>
            <h1 className='text-5xl font-bold text-center text-sandy-beige-10'>
                Entdecke unsere Produkte
            </h1>
            <div className='grid grid-cols-3 gap-4 w-fit'>
                {Object.values(categories).map((category, index) => (
                    <CategoryBlock key={index} categoryData={category} />
                ))}
            </div>
        </aside>
    );
}

const categories = {
    category1: {
        name: 'Handyhüllen',
        category: 'phone case',
        description: 'Schütze dein Handy mit einer Hülle',
        icon: <FiSmartphone className='w-8 h-8 m-auto' />,
        style: 'text-multicolore-pink border-multicolore-pink',
    },
    category2: {
        name: 'Panzergläser',
        category: 'screen protector',
        description: 'Hochwertige Panzergläser für optimalen Schutz',
        icon: <FiShield className='w-8 h-8 m-auto' />,
        style: 'text-multicolore-orange border-multicolore-orange',
    },
    category3: {
        name: 'Ladekabel',
        category: 'charging cable',
        description: 'Hochwertige Ladekabel für zuverlässiges Aufladen',
        icon: <FiBatteryCharging className='w-8 h-8 m-auto' />,
        style: 'text-multicolore-yellow border-multicolore-yellow',
    },
    category4: {
        name: 'Tablet Taschen',
        category: 'tablet case',
        description: 'Schütze dein Tablet mit stilvollen Taschen',
        icon: <FiTablet className='w-8 h-8 m-auto' />,
        style: 'text-multicolore-green border-multicolore-green',
    },
    category5: {
        name: 'Handy Halterungen',
        category: 'phone holder',
        description: 'Praktische Halterungen für dein Handy',
        icon: <FiSmartphone className='w-8 h-8 m-auto' />,
        style: 'text-multicolore-lightblue border-multicolore-lightblue',
    },
    category6: {
        name: 'Sonstiges',
        category: null,
        description: 'Verschiedenes Zubehör für deine Geräte',
        icon: <FiMoreHorizontal className='w-8 h-8 m-auto' />,
        style: 'text-multicolore-blue border-multicolore-blue',
    },
};
