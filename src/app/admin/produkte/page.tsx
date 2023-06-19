import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { PostgrestResponse } from '@supabase/postgrest-js';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import ProductCard from 'src/components/ProductCard/ProductCard';
import Push2DB from './Push2DB';

export const revalidate = 0;

export default async function ProductManagementPage() {
    const supabase = createServerComponentClient({ cookies });
    const {
        data: { session },
    } = await supabase.auth.getSession();

    if (!session || session.user.role !== 'admin_p2d') {
        redirect('/');
    }
    const { data: products }: PostgrestResponse<iProduct> = await supabase
        .from('products')
        .select();
    const ProductManagementPageContent = (
        <section className='space-y-4'>
            <h1 className='text-center text-3xl'>Produkte verwalten</h1>
            <div className='min-w-32 grid grid-cols-4 gap-4 rounded-3xl border-2 p-4 xl:grid-cols-5'>
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
        </section>
    );
    return ProductManagementPageContent;
}
