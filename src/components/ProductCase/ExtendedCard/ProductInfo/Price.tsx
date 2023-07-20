import { eur } from '@lib/helperFunctions';

export default function Price({ productPrice }: { productPrice: number }) {
    const skeleton = (
        <div className='flex text-lg font-bold'>
            <div className='h-8 w-4 rounded-full bg-gray-100'></div>,
            <div className='h-8 w-4 rounded-full bg-gray-100'></div>
            &nbsp; €
        </div>
    );
    const price = (
        <div className='text-lg font-bold '> {eur(productPrice)}</div>
    );

    return productPrice ? price : skeleton;
}
