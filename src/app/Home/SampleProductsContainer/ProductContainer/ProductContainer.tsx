import Image from 'next/image';
import styles from './ProductContainer.module.css';

export interface ProductContainerProps {
    id: string;
    title: string;
    price: number;
    image: string;
    description: string;
    availability: number;
}

export function ProductContainer({ productData }: { productData: any }) {
    return (
        <div className='flex flex-col items-center justify-center w-40 p-2 space-y-2 bg-white border-2 snap-center rounded-xl border-slate-100'>
            <figure className='relative w-full h-32 rounded-xl'>
                <Image
                    src={productData.imageURL}
                    alt={productData.title}
                    fill={true}
                    className='rounded-tl-xl rounded-tr-xl'
                />
            </figure>
            <div className='p-2 space-y-2 border-t-2 border-slate-100'>
                <div className='flex items-center justify-around w-full text-center'>
                    {productData.availability && (
                        <p className='text-xs'>
                            <span className='text-green-500'>
                                {productData.availability}
                            </span>{' '}
                            übrig
                        </p>
                    )}
                    <p className='font-bold'>{productData.price}</p>
                </div>
                <div className='flex flex-wrap space-x-1'></div>
            </div>
        </div>
    );
}
