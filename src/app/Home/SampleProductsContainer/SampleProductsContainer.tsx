import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import {ProductContainer} from './ProductContainer/ProductContainer';
// import products from '../../Products/test_data.js';

const products = [
    {
        id: 1,
        name: 'Product 1',
        imageUrl: 'https://via.placeholder.com/150x150',
        price: 100,
    },
    {
        id: 2,
        name: 'Product 2',
        imageUrl: 'https://via.placeholder.com/150x150',
        price: 200,
    },
    {
        id: 3,
        name: 'Product 3',
        imageUrl: 'https://via.placeholder.com/150x150',
        price: 300,
    },
    {
        id: 4,
        name: 'Product 4',
        imageUrl: 'https://via.placeholder.com/150x150',
        price: 400,
    },
    {
        id: 5,
        name: 'Product 5',
        imageUrl: 'https://via.placeholder.com/150x150',
        price: 500,
    },
];

export default function SampleProductsContainer() {
    
    const [startIndex, setStartIndex] = useState(0);
    const itemsPerPage = 4;
    const randomProducts = products.slice(
        startIndex,
        startIndex + itemsPerPage
    );

    const styles = {
        outerContainer: {
            // overflowX: "auto",
            margin: '0 0 0 0',
            // marginLeft: "-50px",
            display: 'flex',
            alignItems: 'center',
            marginTop: '20px',
        },
        innerContainer: {
            display: 'flex',
            flexWrap: 'nowrap',
            margin: '0 0 0 0',
            whiteSpace: 'nowrap',
            alignItems: 'center',
        },
        product: {
            flexGrow: 1,
            marginTop: '0px',
        },
        prevButton: {
            margin: '0 0 0 0',
            marginRight: '25px',
            color: startIndex === 0 ? 'white' : '#111111',
            cursor: 'pointer',
            fontSize: '24px',
            border: 'none',
            padding: '0',
            outline: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        nextButton: {
            margin: '0 0 0 0',
            color:
                startIndex + itemsPerPage >= products.length
                    ? 'white'
                    : '#111111',
            cursor: 'pointer',
            fontSize: '24px',
            border: 'none',
            padding: '0',
            outline: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
    };

    const handleNext = () => {
        const maxIndex = products.length - 1;
        const nextIndex = startIndex + 1;
        const canMoveNext = nextIndex <= maxIndex - itemsPerPage + 1;
        if (canMoveNext) {
            setStartIndex(nextIndex);
            randomProducts.push(products[nextIndex + itemsPerPage - 1]);
            randomProducts.shift();
        }
    };

    const handlePrev = () => {
        if (startIndex - 1 >= 0) {
            setStartIndex(startIndex - 1);
        }
    };

    return (
        <div style={styles.outerContainer}>
            <div style={styles.innerContainer as React.CSSProperties}>
                <div style={styles.prevButton} onClick={handlePrev}>
                    {/* <FontAwesomeIcon icon={faChevronLeft} /> */}
                </div>
                {products.map((product, index) => (
                    <ProductContainer key={index} productData={product} />
                ))}
                <div style={styles.nextButton} onClick={handleNext}>
                    {/* <FontAwesomeIcon icon={faChevronRight} /> */}
                </div>
            </div>
        </div>
    );
}

// <div style={containerStyles}>
//     {props.matchingProducts.map((product, index) => (
//       <ProductContainer
//       key={index}
//       product={product}
//       addItemToCart={props.addItemToCart}/>
//     ))}
//   </div>
