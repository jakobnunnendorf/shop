import Link from 'next/link';
import React from 'react';
import './ReturnRefund.css';
import AGB from '../AGB/AGB';

const ReturnRefundPolicy = () => {
    return (
        <div className='w-full py-16'>
            <h2 className='py-16 text-3xl text-center'>
                Allgemeine Geschäftsbedingungen
                <Link href='/Hilfe/datenschutz'>
                    <span className='text-lg font-bold text-blue-800 underline'>
                        &nbsp;(Mehr erfahren)
                    </span>
                </Link>
            </h2>
            <div className='w-full overflow-y-auto h-96'>
                <AGB />
            </div>
        </div>
    );
};

export default ReturnRefundPolicy;
