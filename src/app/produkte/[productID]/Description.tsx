import React from 'react';
import supabase from '@utils/supabase';

interface DescriptionObject {
    description: string;
}

export default async function Description({ productId }: { productId: UUID }) {
    const { data: descriptionObject, error } = (await supabase
        .from('products')
        .select('description')
        .eq('id', productId)
        .single()) as SbFetchResponseObject<DescriptionObject>;
    if (!descriptionObject) {
        throw new Error(`Couldn't fetch description: ${JSON.stringify(error)}`);
    }
    const { description } = descriptionObject;
    const descriptionWindow = (
        <div className='hidden py-16 lg:block lg:col-span-5'>
            <h2 className='px-8 text-2xl font-bold'>Beschreibung</h2>
            <p className='px-8'>{description}</p>
        </div>
    );
    return descriptionWindow;
}
