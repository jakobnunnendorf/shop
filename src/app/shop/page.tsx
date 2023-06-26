import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { ProductContainer } from '@components/ProductCarousel/ProductContainer/ProductContainer';

export default async function ShopPage() {
    const supabase = createServerComponentClient({ cookies });
    const { data: productData } = await supabase.from('products').select('*');

    const productDataWithSkeletons = productData
        ? [
              ...productData,
              ...Array.from({ length: 50 - productData.length }, () => ({})),
          ]
        : null;
    return (
        <section className='grid grid-cols-6 gap-4 p-4'>
            {productDataWithSkeletons?.map((product, index) => {
                return <ProductContainer key={index} productData={product} />;
            })}
        </section>
    );
}
