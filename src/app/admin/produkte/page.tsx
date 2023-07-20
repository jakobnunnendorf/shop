import ProductClientFrame from '@components/CatalogueTile/ProductClientFrame';
import supabase from '@utils/supabase';
import Push2DB from './Push2DB/Push2DB';

export const revalidate = 0;

export default async function ProductManagementPage() {
    const { data: products } = (await supabase
        .from('products')
        .select()) as sb_fetchResponseObject<product[]>;

    const productsArray = products?.map((product, index) => {
        return (
            <div className='w-full h-48  snap-center' key={index}>
                <ProductClientFrame product={product} />
            </div>
        );
    });

    const ProductManagementPageContent = (
        <section className='w-full '>
            <h1 className='text-3xl text-center'>Produkte verwalten</h1>
            <div className='grid w-full grid-cols-2 gap-4 lg:grid-cols-4 '>
                <Push2DB />
                {productsArray}
            </div>
        </section>
    );
    return ProductManagementPageContent;
}
