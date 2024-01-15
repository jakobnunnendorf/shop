import { uniqueId } from 'lodash';
import React from 'react';
import Link from 'next/link';
import ButtonCard from './ButtonCard/ButtonCard';
import Collapsed from '@components/ProductCard/Collapsed/Collapsed';
import supabase from '@utils/supabase';

export default async function ProductGrid() {
    const { data } = await supabase.from('products').select('id'); // as SbFetchResponseObject<{ id: UUID }[]>;
    const productGrid = (
        <ul className='grid w-full grid-cols-2 gap-2 px-2 lg:grid-cols-4 lg:gap-4'>
            <li key={uniqueId()}>
                <Link href={'/admin/produkte/neues-produkt'}>
                    <ButtonCard />
                </Link>
            </li>
            {data?.map((idObject, index) => {
                const { id: productId } = idObject;
                return (
                    <li key={index}>
                        <Collapsed productId={productId} />
                    </li>
                );
            })}
        </ul>
    );
    return productGrid;
}
