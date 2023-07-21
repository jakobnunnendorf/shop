import ProductCase from '@components/ProductCase/ProductCard';
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
    return product ? <ProductCase product={product[0]} /> : null;
}
