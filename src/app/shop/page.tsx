import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import ExtendedCard from '@components/ProductCase/ExtendedCard';
import ProductClientFrame from '@components/ProductCase/ProductClientFrame';
import SmallCard from '@components/ProductCase/SmallCard';

export default async function ShopPage() {
    const supabase = createServerComponentClient({ cookies });
    const { data: productData } = await supabase.from('products').select('*');
    return (
        <section className='grid grid-cols-4 gap-4 p-4 w-fit'>
            {productData?.map((product, index) => {
                const extended_card_component_with_props = (
                    <ExtendedCard product={product as productsFetchResponse} />
                );
                const small_card_component_with_props = (
                    <SmallCard product={product as productsFetchResponse} />
                );
                return (
                    <ProductClientFrame
                        key={index}
                        ExtendedCard={extended_card_component_with_props}
                        SmallCard={small_card_component_with_props}
                    />
                );
            })}
        </section>
    );
}
