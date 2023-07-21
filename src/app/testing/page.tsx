import ProductCard from '@components/ProductCard/ProductCard';
import supabase from '@utils/supabase';

export const metadata = {
    title: '',
    description: '',
};

export default async function TestingPage() {
    const { data: product } = (await supabase
        .from('products')
        .select('*')
        .limit(5)) as sb_fetchResponseObject<product[]>;
    return product ? (
        <div className='grid w-full grid-cols-2'>
            <ProductCard product={product[0]} grid={true} />{' '}
        </div>
    ) : null;
}
