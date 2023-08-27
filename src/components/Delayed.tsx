'use client';
import React, { useEffect, useState } from 'react';

export default function Delayed({
    delay,
    children,
}: {
    delay: number;
    children: React.ReactNode;
}) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    return show ? children : null;
}
