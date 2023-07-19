'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function ProductClientFrame({
    ExtendedCard,
    SmallCard,
}: {
    ExtendedCard: React.ReactNode;
    SmallCard: React.ReactNode;
}) {
    const [active, setActive] = useState(false);
    const ProductCardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                ProductCardRef.current &&
                !ProductCardRef.current.contains(event.target as Node)
            ) {
                setActive(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ProductCardRef]);

    const wrapper_with_content = (
        <article
            className={
                active
                    ? 'fixed right-1/2 bottom-1/2 z-50 h-2/3 w-2/3 translate-x-1/2 translate-y-1/2 transform overflow-hidden rounded-3xl  border bg-white shadow-xl'
                    : 'relative h-96 w-64 rounded-3xl border shadow-xl'
            }
        >
            <div
                ref={ProductCardRef}
                onClick={() => setActive(true)}
                className={
                    active
                        ? ''
                        : ' absolute top-0 z-20 h-2/3 w-full cursor-pointer'
                }
            ></div>
            {active ? ExtendedCard : SmallCard}
        </article>
    );

    return wrapper_with_content;
}