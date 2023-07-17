import { eur } from '@lib/helperFunctions';

export default function Price({ productPrice }: { productPrice: number }) {
    const skeleton = (
        <span className='flex text-lg font-bold'>
            <div className='h-8 w-4 rounded-full bg-gray-100'></div>,
            <div className='h-8 w-4 rounded-full bg-gray-100'></div>
            &nbsp; €
        </span>
    );
    const price = (
        <span className='text-lg font-bold'> {eur(productPrice)}</span>
    );

    return productPrice ? price : skeleton;
}
