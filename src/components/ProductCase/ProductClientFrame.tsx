'use client';

import React, { useRef, useState } from 'react';

export default function ProductClientFrame({
    ExtendedCard,
    SmallCard,
}: {
    ExtendedCard: React.ReactNode;
    SmallCard: React.ReactNode;
}) {
    const [active, setActive] = useState(false);
    const ProductCardRef = useRef<HTMLDivElement>(null);

    window.addEventListener('mousedown', (event) => {
        if (
            ProductCardRef.current &&
            !ProductCardRef.current.contains(event.target as Node)
        ) {
            setActive(false);
        }
    });

    const wrapper_with_content = (
        <article
            ref={ProductCardRef}
            className={`${
                active
                    ? 'fixed left-1/2 top-1/2 z-50 h-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2 transform overflow-hidden rounded-3xl  border bg-white shadow-xl'
                    : 'h-56 cursor-pointer rounded-3xl border shadow-xl lg:h-72 lg:max-w-lg xl:h-96 xl:max-w-xs'
            }`}
            onClick={() => setActive(!active)}
        >
            {active ? ExtendedCard : SmallCard}
        </article>
    );

    return wrapper_with_content;
}
// 'h-56 w-36 cursor-pointer rounded-3xl border shadow-xl lg:h-72 lg:w-48 xl:h-96 xl:w-64'
