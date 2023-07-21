import Image from 'next/image';
import React, { useContext } from 'react';
import {
    ActiveProductContext,
    ActiveProductContextType,
} from '@globalState/ActiveProductCardContext';

export default function ProductPicture({
    imageURL,
}: {
    imageURL: string | bucketURL<'productImageBucket'>;
}) {
    const { dispatch } = useContext(
        ActiveProductContext
    ) as ActiveProductContextType;

    const expand = () => {
        dispatch({ type: 'toggleExpanded', payload: true });
    };

    return (
        <figure className='relative' onClick={expand}>
            <Image src={imageURL} alt={imageURL} fill objectFit='contain' />
        </figure>
    );
}
