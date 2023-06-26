import React from 'react';
import FilterSection from './FilterSection/FilterSection';

export default function FilterBar() {
    const filters = ['Filter 1', 'Filter 2', 'Filter 3'];
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
        <div style={styles.FilterBar_frame}>
            {Object.keys(filters).map((key) => {
                const filter = filters[key];
                return (
                    <FilterSection
                        key={key}
                        section_name={'test'}
                        filter_array={filters}
                        addFilters={filters}
                        activeFilters={filters}
                    />
                );
            })}
        </div>
    );
}
