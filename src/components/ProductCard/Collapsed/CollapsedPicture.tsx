import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import supabase from '@utils/supabase';

export default async function CollapsedPicture({ productId }: { productId: UUID }) {
    const { data } = (await supabase
        .from('products')
        .select(
            'thumbnail: imageURL_object -> default_color -> imageURL_array -> 0, title'
        )
        .eq('id', productId)
        .single()) as sb_fetchResponseObject<{
        thumbnail: string;
        title: string;
    }>;
    const thumbnail = data?.thumbnail || '/cases/placeholder.png';
    const title = data?.title || 'Handy Hülle und Zubehör';

    return (
        <figure className='relative row-span-2 lg:row-span-1'>
            <Link href={`/produkte/${productId}`}>
                <Image
                    src={thumbnail}
                    alt={title}
                    fill
                    className='object-cover'
                />
            </Link>
        </figure>
    );
}
