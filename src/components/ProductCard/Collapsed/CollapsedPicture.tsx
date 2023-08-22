import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function ProductPicture({
    imageURL,
    productId,
}: {
    imageURL: string | bucketURL<'productImageBucket'>;
    productId: UUID;
}) {
    return (
        <figure className='relative row-span-2 lg:row-span-1'>
            <Link href={`/produkte/${productId}`}>
                <Image
                    src={imageURL}
                    alt={imageURL}
                    fill
                    className='object-cover'
                />
            </Link>
        </figure>
    );
}
