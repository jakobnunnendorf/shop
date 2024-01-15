import React from 'react';
import CompatibleModelTags from '@components/ProductCard/SharedComponents/CompatibleModelTags';
import CartButton from '@components/ProductCard/SharedComponents/CartButton';
import WishListButton from '@components/ProductCard/SharedComponents/WishListButton';
import Price from '@components/ProductCard/SharedComponents/Price';
import supabase from '@utils/supabase';
import ColorLinkRow from './ColorRow/ColorLinkRow';

export default async function ExpandedInfo({
    productId,
    activeColorKey,
}: {
    productId: UUID;
    activeColorKey: ColorKey;
}) {
    const { data: product } = (await supabase
        .from('products')
        .select('*')
        .eq('id', productId)
        .single()) as SbFetchResponseObject<Product>;
    if (!product) {
        throw new Error(
            "Couldn't fetch prodcut data (src/components/ProductCard/Expanded/ExpandedInfo.tsx)"
        );
    }
    const expandedInfo = (
        <div className='flex flex-col justify-evenly lg:col-span-2 '>
            <h2 className='px-4 pt-8 text-xl font-bold text-center lg:pt-0 lg:text-3xl'>
                {product.title}
            </h2>
            <CompatibleModelTags
                compatibleModelsArray={product.compatibleModels}
                expanded={true}
            />
            <div className='lg:hidden'>
                <h3 className='px-8 text-lg font-bold'>Beschreibung</h3>
                <p className='px-8'>{product.description}</p>
            </div>
            <ColorLinkRow
                imageURLObject={product.imageURLObject}
                productId={product.id}
            />
            <div className='flex items-center w-full justify-evenly'>
                <Price productPrice={product.price} />
                <WishListButton productId={product.id} />
                <CartButton productId={product.id} colorKey={activeColorKey} />
            </div>
        </div>
    );
    return expandedInfo;
}
