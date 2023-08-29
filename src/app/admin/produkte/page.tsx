import supabase from '@utils/supabase';
import Link from 'next/link';
import ButtonCard from './Push2DB/ButtonCard';
import Collapsed from '@components/ProductCard/Collapsed/Collapsed';

export const revalidate = 0;

export default async function ProductManagementPage() {
    const { data: products } = (await supabase
        .from('products')
        .select()) as sb_fetchResponseObject<product[]>;

    const productsArray = products?.map((product, index) => {
        return <Collapsed key={index} product={product} />;
    });

    const ProductManagementPageContent = (
        <section className='w-full '>
            <h1 className='py-8 text-3xl text-center'>Produkte verwalten</h1>
            <div className='grid w-full grid-cols-2 gap-2 px-2 lg:grid-cols-4 lg:gap-4'>
                <Link href={'/admin/produkte/neues-produkt'}>
                    <ButtonCard />
                </Link>
                {productsArray}
            </div>
        </section>
    );
    return ProductManagementPageContent;
}
