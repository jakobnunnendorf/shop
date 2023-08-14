import ProductCard from '@components/ProductCard/ProductCard';
import supabase from '@utils/supabase';
import Push2DB from './Push2DB/Push2DB';
import Link from 'next/link';
import ButtonCard from './Push2DB/ButtonCard';


export const revalidate = 0;

export default async function ProductManagementPage() {
    const { data: products } = (await supabase
        .from('products')
        .select()) as sb_fetchResponseObject<product[]>;

    const productsArray = products?.map((product, index) => {
        return <ProductCard key={index} product={product} />;
    });

    const ProductManagementPageContent = (
        <section className='w-full '>
            <h1 className='text-center text-3xl'>Produkte verwalten</h1>
            <div className='grid w-full grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-4 '>
                <Link href={'/admin/produkte/neues-produkt'}>
                    <ButtonCard />
                </Link>
                {productsArray}
            </div>
        </section>
    );
    return ProductManagementPageContent;
}
