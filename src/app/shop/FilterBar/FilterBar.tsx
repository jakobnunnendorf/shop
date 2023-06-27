import React from 'react';
import FilterSection from './FilterSection/FilterSection';

export default function FilterBar() {
    const filters = {
        Kategorien: ['Handy', 'Tablet', 'Laptop', 'Smartwatch'],
        Preis: ['0-10', '10-20', '20-30', '30-40', '40-50'],
        Modelle: ['iPhone 12', 'iPhone 11', 'iPhone X', 'iPhone 8'],
        Farbe: ['Schwarz', 'Weiß', 'Rot', 'Blau', 'Grün', 'Gelb'],
        Bewertung: ['1', '2', '3', '4', '5'],
    };
    const styles = {
        FilterBar_frame: {
            position: 'sticky',
            width: '20vw',
            height: 'auto',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'column',
            // position: 'fixed',
            top: '20vh',
            // left: '0',
            backgroundColor: 'white',
        },
    };

    return (
        <div style={styles.FilterBar_frame as React.CSSProperties}>
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
                        // <pre key={index}>
                        //     {JSON.stringify(filters[key], null, 2)}
                        // </pre>
                    );
                }
            )}
        </div>
    );
}
