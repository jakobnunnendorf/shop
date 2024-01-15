import BackButton from './BackButton';
import ProductForm from './ProductForm/ProductForm';
export default function AddProductPage() {
    const addProductPage = (
        <div>
            <div className='grid w-full h-20 grid-cols-3 p-4 place-items-center '>
                <BackButton />
                <h2 className='text-2xl text-center'>
                    Neues Produkt hinzufügen
                </h2>
            </div>
            <ProductForm />
        </div>
    );
    return addProductPage;
}
