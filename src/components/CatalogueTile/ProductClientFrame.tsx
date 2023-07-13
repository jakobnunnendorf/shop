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
        if (typeof window !== 'undefined') {
            // Make sure we are in a browser environment
            const handleClickOutside = (event: MouseEvent) => {
                if (
                    ProductCardRef.current &&
                    !ProductCardRef.current.contains(event.target as Node)
                ) {
                    // Your logic here
                }
            };

            window.addEventListener('mousedown', handleClickOutside);

            return () => {
                // cleanup function that removes the event listener when the component unmounts
                window.removeEventListener('mousedown', handleClickOutside);
            };
        }
    }, []); // Empty dependency array ensures this effect runs only once after the initial render

    const wrapper_with_content = (
        <article
            className={
                active
                    ? 'fixed left-1/2 top-1/2 z-50 h-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2 transform overflow-hidden rounded-3xl  border bg-white shadow-xl'
                    : 'relative rounded-3xl border shadow-xl lg:h-96 lg:w-64'
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