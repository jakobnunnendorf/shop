import React from 'react';
import FilterSection from './FilterSection/FilterSection';

export default function FilterBar() {
    const filters = {
        Kategorien: ['Handy', 'Tablet', 'Laptop', 'Smartwatch'],
        Preis: ['0-10 €', '10-20 €', '20-30 €', '30-40 €', '40-50 €'],
        Modelle: ['iPhone 12', 'iPhone 11', 'iPhone X', 'iPhone 8'],
        Farbe: ['Schwarz', 'Weiß', 'Rot', 'Blau', 'Grün', 'Gelb'],
        Bewertung: ['1', '2', '3', '4', '5'],
    };

    return (
        <div className='flex h-auto min-h-[calc(100vh-6rem)] w-64 flex-col items-start space-y-4 border-r-2 p-8'>
            {(Object.keys(filters) as Array<keyof typeof filters>).map(
                (key, index) => {
                    return (
                        <FilterSection
                            key={index}
                            section_name={key}
                            filter_array={filters[key]}
                            addFilters={filters}
                            activeFilters={filters}
                        />
                    );
                }
            )}
        </div>
    );
}
