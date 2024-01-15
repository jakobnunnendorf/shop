import { eur } from '@lib/dataManipulation';

export default function Price({ productPrice }: { productPrice: number }) {
    const skeleton = (
        <div className='flex text-lg font-bold'>
            <div className='w-4 h-8 bg-gray-100 rounded-full'></div>,
            <div className='w-4 h-8 bg-gray-100 rounded-full'></div>
            &nbsp; €
        </div>
    );
    const price = (
        <div className='text-[4cqw] font-bold lg:text-lg '>
            {' '}
            {eur(productPrice)}
        </div>
    );

    return productPrice ? price : skeleton;
}
