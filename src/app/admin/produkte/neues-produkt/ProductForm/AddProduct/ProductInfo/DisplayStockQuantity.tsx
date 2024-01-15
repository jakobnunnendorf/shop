import React from 'react';

export default function DisplayStockQuantity({ stock }: { stock: number }) {
    const showStock = (
        <div className='text-xs text-slate-500'>Lagerbestand: {stock}</div>
    );
    return showStock;
}
