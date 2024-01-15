import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function ImageComponent({
    size,
    width,
    desktopSize,
    desktopWidth,
    src,
    absolute = false,
    alt,
    cover = false,
    rounded,
    style,
    priority,
    href,
    name,
}: {
    size: number | string;
    width?: number | string;
    desktopSize?: number | string;
    desktopWidth?: number | string;
    src?: string;
    absolute?: boolean;
    alt?: string;
    cover?: boolean;
    rounded?: string;
    style?: string;
    priority?: boolean;
    href?: string;
    name?: string;
}) {
    const componentStyle = `${absolute ? 'absolute' : 'relative'} ${
        width
            ? `h-${String(size)} w-${String(width)}`
            : `h-${String(size)} w-${String(size)}`
    } ${
        desktopSize
            ? desktopWidth
                ? `lg:h-${String(size)} lg:w-${String(width)}`
                : `lg:h-${String(size)} lg:w-${String(size)}`
            : ''
    } rounded-${rounded ? `${rounded} overflow-hidden` : 'none'} ${
        style ? style : ''
    }`;
    const imageComponent = (
        <figure className={componentStyle}>
            <Image
                src={src || '/noImage.jpg'}
                fill
                alt={alt || src || ''}
                priority={priority}
                className={cover ? 'object-cover' : 'object-contain'}
            />
        </figure>
    );
    return href ? <Link href={href}>{imageComponent}</Link> : imageComponent;
}
