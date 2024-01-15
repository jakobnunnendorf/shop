import React from 'react';
import NavigateBack from './NavigateBack';
import ExpandedPicture from '@components/ProductCard/Expanded/Images/ExpandedPicture/ExpandedPicture';
import ExpandedInfo from '@components/ProductCard/Expanded/ExpandedInfo';
import Description from './Description';

type Params = {
    productId: string;
};

export default async function ProductPage({
    params: { productId },
    searchParams,
}: {
    params: Params;
    searchParams?: { [key: string]: string | string[] | undefined };
}) {
    if (typeof searchParams?.colorKey === 'object') {
        throw new Error('More than one color selected.');
    }
    if (typeof searchParams?.activeIndex === 'object') {
        throw new Error('More than one index selected.');
    }
    const activeColorKey: ColorKey =
        (searchParams?.colorKey as ColorKey) || 'defaultColor';
    const activeIndex: number =
        typeof searchParams?.activeIndex === 'string'
            ? parseInt(searchParams.activeIndex)
            : 0;
    const page = (
        <div className='min-h-screen lg:p-16 '>
            <div className='grid w-full grid-rows-2 h-4/5 lg:grid-cols-5 lg:grid-rows-none '>
                <NavigateBack />
                <ExpandedPicture
                    productId={productId as UUID}
                    activeColorKey={activeColorKey}
                    activeIndex={activeIndex}
                />
                <ExpandedInfo
                    productId={productId as UUID}
                    activeColorKey={activeColorKey}
                />
                <Description productId={productId as UUID} />
            </div>
        </div>
    );
    return page;
}
