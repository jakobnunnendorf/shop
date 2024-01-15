import ProductGrid from './ProductGrid/ProductGrid';

export default function ProductManagementPage() {
    const ProductManagementPageContent = (
        <section className='w-full '>
            <h1 className='py-8 text-3xl text-center'>Produkte verwalten</h1>
            <ProductGrid />
        </section>
    );
    return ProductManagementPageContent;
}
