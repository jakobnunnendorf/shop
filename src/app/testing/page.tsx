import ProductCard from '@components/ProductCard/ProductCard';
import supabase from '@utils/supabase';
import Link from 'next/link';

export const metadata = {
    title: '',
    description: '',
};

export default async function TestingPage() {
    const { data: products } = (await supabase
        .from('products')
        .select('*')
        .limit(5)) as sb_fetchResponseObject<product[]>;
    return products ? (
        <ul className='flex flex-col gap-4'>
            {products.map((product, index) => (
                <Link href={`/shop/produkte/${product.id}`} key={index}>
                    <li>
                        <h2>{product.title}</h2>
                    </li>
                </Link>
            ))}
        </ul>
    ) : null;
}
