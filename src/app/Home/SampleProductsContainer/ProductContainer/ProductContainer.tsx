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
    console.log(productData);
    return (
        <div className='flex w-40 snap-center flex-col items-center justify-center space-y-2 rounded-xl border-2 border-slate-100 bg-white p-2'>
            <figure className='relative h-32 w-full rounded-xl'>
                <Image
                    src={productData.imageURL}
                    alt={productData.title}
                    fill={true}
                    className='rounded-tl-xl rounded-tr-xl'
                />
            </figure>
            <div className='space-y-2 border-t-2 border-slate-100 p-2'>
                <div className='flex w-full items-center justify-around text-center'>
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
