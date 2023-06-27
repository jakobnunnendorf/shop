import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import './SlidingAds.css';

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
        height: '500px',
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
            <div>
                <div>
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
                </div>
                <div className=''>
                    <h1
                        className='absolute flex justify-center w-1/2 h-full text-5xl font-extrabold text-center y-8 bg-sandy-beige-4 text-coastal-blue-10 backdrop-blur-3xl'
                        style={styles.giant_heading}
                    >
                        {' '}
                        <span className='flex flex-col items-center p-8 space-y-8 '>
                            {' '}
                            <span className=''>Willkommen bei</span>{' '}
                            {/* <span className='flex'>Phone 2 Door</span>{' '} */}
                            <Image
                                src={'/p2d_logo3.png'}
                                width={400}
                                height={400}
                                alt='Phone 2 Door Logo'
                            />
                        </span>
                    </h1>
                </div>
            </div>
            <div className='absolute bottom-0 w-full h-2 sliding-gradient'></div>
        </div>
    );
};

export default SlidingAds;
