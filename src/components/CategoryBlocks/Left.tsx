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
        <aside className='space-y-8 bg-coastal-blue-10 px-10 py-8 lg:py-16'>
            <h1 className='text-center text-5xl font-bold text-sandy-beige-10'>
                Entdecke unsere Produkte
            </h1>
            <div className='grid w-fit grid-cols-3 gap-4'>
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
        description: 'Schütze dein Handy mit einer Hülle',
        icon: <FiSmartphone className='m-auto h-8 w-8' />,
        style: 'text-multicolore-pink border-multicolore-pink',
    },
    category2: {
        name: 'Panzergläser',
        description: 'Hochwertige Panzergläser für optimalen Schutz',
        icon: <FiShield className='m-auto h-8 w-8' />,
        style: 'text-multicolore-orange border-multicolore-orange',
    },
    category3: {
        name: 'Ladekabel',
        description: 'Hochwertige Ladekabel für zuverlässiges Aufladen',
        icon: <FiBatteryCharging className='m-auto h-8 w-8' />,
        style: 'text-multicolore-yellow border-multicolore-yellow',
    },
    category4: {
        name: 'Tablet Taschen',
        description: 'Schütze dein Tablet mit stilvollen Taschen',
        icon: <FiTablet className='m-auto h-8 w-8' />,
        style: 'text-multicolore-green border-multicolore-green',
    },
    category5: {
        name: 'Handy Halterungen',
        description: 'Praktische Halterungen für dein Handy',
        icon: <FiSmartphone className='m-auto h-8 w-8' />,
        style: 'text-multicolore-lightblue border-multicolore-lightblue',
    },
    category6: {
        name: 'Sonstiges',
        description: 'Verschiedenes Zubehör für deine Geräte',
        icon: <FiMoreHorizontal className='m-auto h-8 w-8' />,
        style: 'text-multicolore-blue border-multicolore-blue',
    },
};
