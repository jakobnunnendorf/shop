import ExtendedCard from '@components/ProductCase/ExtendedCard/ExtendedCard';
import ProductClientFrame from '@components/ProductCase/ProductClientFrame';
import SmallCard from '@components/ProductCase/SmallCard';
import supabase from '@utils/supabase';
import Push2DB from './Push2DB/Push2DB';

export const revalidate = 0;

export default async function ProductManagementPage() {
    const { data: products } = (await supabase
        .from('products')
        .select()) as sb_fetchResponseObject<product[]>;

    const productsArray = products?.map((product, index) => {
        return (
            <div className=' h-96 w-96 snap-center' key={index}>
                <ProductClientFrame
                    ExtendedCard={<ExtendedCard product={product as product} />}
                    SmallCard={<SmallCard product={product as product} />}
                />
            </div>
        );
    });

    const ProductManagementPageContent = (
        <section className='w-full space-y-4 '>
            <h1 className='text-3xl text-center'>Produkte verwalten</h1>
            <div className='grid w-full grid-cols-4 gap-4 '>
                <Push2DB />
                {productsArray}
            </div>
        </section>
    );
    return ProductManagementPageContent;
}
