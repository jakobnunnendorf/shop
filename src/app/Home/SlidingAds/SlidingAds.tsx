import React, { useEffect, useState } from 'react';

const SlidingAds = ({ images }: { images: any }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePreviousClick = () => {
        setCurrentImageIndex(
            currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
        );
    };

    const handleNextClick = () => {
        setCurrentImageIndex(
            currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
        );
    };

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
    }, [currentImageIndex]);

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
            <img
                src={images[currentImageIndex]}
                alt='sliding-ad'
                style={slideStyles as React.CSSProperties}
            />
        </div>
    );
};

export default SlidingAds;
