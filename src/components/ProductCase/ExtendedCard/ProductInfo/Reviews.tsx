import React from 'react';
import { FiStar } from 'react-icons/fi';

export default function Reviews({ productReviews }: { productReviews: any }) {
    const reviews = (
        <span className='flex items-center'>
            <div className=''>
                {productReviews?.length > 0
                    ? `(${productReviews.length}) `
                    : ''}
            </div>
            <FiStar className='text-yellow-400' />
            <FiStar className='text-yellow-400' />
            <FiStar className='text-yellow-400' />
            <FiStar className='text-yellow-400' />
            <FiStar className='text-yellow-400' />
        </span>
    );
    return reviews;
}
