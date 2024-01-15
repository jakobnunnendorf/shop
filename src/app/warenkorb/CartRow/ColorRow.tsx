'use client';
import React, { useEffect, useState } from 'react';
import SelectColorButton from './SelectColorButton';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function ColorRow({ cartItem }: { cartItem: CartItem }) {
    const [imageURLObject, setImageURLObject] = useState<ImageURLObject | null>(
        null
    );
    useEffect(() => {
        const supabase = createClientComponentClient();
        const fetchData = async () => {
            const { data } = (await supabase
                .from('products')
                .select('imageURLObject')
                .eq('id', cartItem.productId)
                .single()) as SbFetchResponseObject<{
                imageURLObject: ImageURLObject;
            }>;
            if (!data) {
                throw new Error("Couldn't fetch color");
            }
            const { imageURLObject } = data;
            setImageURLObject(imageURLObject);
        };
        fetchData();
    }, []);
    const colors = imageURLObject
        ? Object.keys(imageURLObject).map((key) => {
              return {
                  colorObject: imageURLObject[
                      key as ColorKey
                  ] as ProductInColor,
                  colorKey: key as ColorKey,
              };
          })
        : null;
    const colorRow = (
        <ul className='flex gap-4 p-4'>
            {colors?.map((color, index) => {
                return <SelectColorButton cartItem={cartItem} color={color} />;
            })}
        </ul>
    );
    return colorRow;
}
