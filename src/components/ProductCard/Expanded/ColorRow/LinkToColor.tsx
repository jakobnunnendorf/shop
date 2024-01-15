'use client';
import ColorCircle from '@components/ColorCircle';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react';

export default function LinkToColor({
    colorObject,
    productId,
    colorKey,
}: {
    colorObject: ProductInColor;
    productId: UUID;
    colorKey: ColorKey;
}) {
    const activeColorKey = useSearchParams().get('colorKey');
    if (!colorObject.tailwindColor) {
        return null;
    }
    return (
        <Link
            href={`${process.env.NEXT_PUBLIC_URL}/produkte/${productId}?colorKey=${colorKey}`}
        >
            <ColorCircle
                tailwindColor={colorObject.tailwindColor}
                active={colorKey === activeColorKey}
            />
        </Link>
    );
}
