import { PostgrestResponse } from '@supabase/postgrest-js';
import supabase from '@utils/supabase';
import ProductCard from 'src/components/ProductCard/ProductCard';
import Push2DB from './Push2DB';

export const revalidate = 0;

export default async function ProductManagementPage() {
    const { data: products }: PostgrestResponse<iProduct> = await supabase
        .from('products')
        .select();
    const productCard_container = (
        <div className='grid grid-cols-3 gap-2 rounded-3xl lg:grid-cols-4 lg:gap-4 lg:border lg:p-4 xl:grid-cols-5'>
            <Push2DB />
            {products && products.length > 0
                ? products.map((product) => {
                      return (
                          <div key={product.id}>
                              <ProductCard product={product} />
                          </div>
                      );
                  })
                : null}
            
        </div>
    );
    const ProductManagementPageContent = (
        <section className='w-full space-y-4 '>
            <h1 className='text-3xl text-center'>Produkte verwalten</h1>
            {productCard_container}
        </section>
    );
    return ProductManagementPageContent;
}
