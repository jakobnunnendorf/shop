import Image from 'next/image';
import {
    FiBatteryCharging,
    FiMoreHorizontal,
    FiShield,
    FiSmartphone,
    FiTablet,
} from 'react-icons/fi';
import { CategoryBlock } from './CategoryBlock';
import Showcase from './Showcase';
import Left from './Left';

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

export function CategoryBlocks() {
    return (
        <div className='flex w-full flex-col overflow-hidden lg:h-[70vh] lg:flex-row lg:shadow-xl'>
            <Left />
            <Showcase />
        </div>
    );
}
