'use client';
import React, { useEffect, useState } from 'react';

export default function BgBanner({ images }: { images: React.JSX.Element[] }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(
                currentImageIndex === images.length - 1
                    ? 0
                    : currentImageIndex + 1
            );
        }, 3000);
        return () => clearInterval(interval);
    }, [currentImageIndex, images.length]);

    return (
        <figure className='relative w-full h-full'>
            {images[currentImageIndex]}
        </figure>
    );
}
