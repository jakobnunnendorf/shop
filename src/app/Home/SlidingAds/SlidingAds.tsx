import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';

const SlidingAds = ({ images }: { images: string[] }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePreviousClick = () => {
        setCurrentImageIndex(
            currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
        );
    };

    const handleNextClick = useCallback(() => {
        setCurrentImageIndex(
            currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
        );
    }, [currentImageIndex, images.length]);

    const imageSlider = {
        justifyContent: 'center',
        width: '100%',
        height: '450px',
        position: 'relative',
        marginBottom: '15px',
    };

    const slideStyles = {
        width: '100%',
        height: '100%',
        borderRadius: '0px',
        objectFit: 'cover',
    };

    const leftArrow = {
        position: 'absolute',
        top: '50px',
        left: '32px',
        fontSize: '32px',
        color: 'black',
        zIndex: '1',
    };

    const rightArrow = {
        position: 'absolute',
        top: '50px',
        right: '32px',
        fontSize: '32px',
        color: 'black',
        zIndex: '1',
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNextClick();
        }, 6000);
        return () => clearInterval(interval);
    }, [currentImageIndex, handleNextClick]);

    const styles = {
        giant_heading: {
            fontSize: 'clamp(2rem, 8vw, 4rem)',
        },
    };

    return (
        <div style={imageSlider as React.CSSProperties}>
            <div
                style={leftArrow as React.CSSProperties}
                onClick={handlePreviousClick}
            >
                {/* Prev */}
            </div>
            <div
                style={rightArrow as React.CSSProperties}
                onClick={handleNextClick}
            >
                {/* Next */}
            </div>
            <Image
                src={images[currentImageIndex]}
                alt='sliding-ad'
                style={slideStyles as React.CSSProperties}
                fill={true}
            />
            <h1
                className='absolute top-10 flex w-full justify-center text-center text-3xl font-extrabold text-coastal-blue-10'
                style={styles.giant_heading}
            >
                {' '}
                <span className='flex flex-col items-center space-y-8 rounded-3xl bg-sandy-beige-3 p-8 backdrop-blur-lg'>
                    {' '}
                    <span>Willkommen bei</span>{' '}
                    <span className='flex'>Phone 2 Door</span>{' '}
                    <Image
                        src={'/p2d_logo3.png'}
                        width={300}
                        height={300}
                        alt='logo'
                    />
                </span>
            </h1>
        </div>
    );
};

export default SlidingAds;
