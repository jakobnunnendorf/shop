import React from 'react';
import { useContext } from 'react';
import { FiCheck } from 'react-icons/fi';
import {
    NewProductContext,
    NewProductContextType,
} from '@globalState/NewProductContext';

export default function AddCategory() {
    const { newProduct, setNewProduct } = useContext(
        NewProductContext
    ) as NewProductContextType;
    const [categoryDraft, setCategoryDraft] =
        React.useState<productCategory | null>(null);

    const handleCategorySelected = (
        e: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const categoryId = e.target.value as productCategory;
        setCategoryDraft(categoryId);
    };

    const addCategoryToNewProduct = (e: React.FormEvent) => {
        e.preventDefault();
        if (categoryDraft !== null && newProduct.category === null) {
            setNewProduct({ ...newProduct, category: categoryDraft });
        } else {
            setNewProduct({ ...newProduct, category: null });
        }
    };
    type categoryType = [string, productCategory][];
    const categories: categoryType = [
        ['Handyhüllen', 'phone case'],
        ['Panzergläser', 'screen protector'],
        ['Ladekabel', 'charging cable'],
        ['Ladestecker', 'charging adapter'],
        ['Tablet-Taschen', 'tablet case'],
        ['Handy-Halterungen', 'phone holder'],
    ];
    const addCategory = (
        <form
            className='flex items-center space-x-2'
            onSubmit={addCategoryToNewProduct}
        >
            <label htmlFor='category'>Kategorie:</label>
            <select
                id='category'
                value={categoryDraft ?? ''}
                onChange={handleCategorySelected}
            >
                <option className='text-xs' value=''>
                    -- auswählen --
                </option>
                {categories.map((category) => (
                    <option key={category[0]} value={category[1]}>
                        {category[0]}
                    </option>
                ))}
            </select>
            <button
                onClick={addCategoryToNewProduct}
                className='grid h-8 w-8 place-content-center rounded-full border border-green-400'
            >
                <FiCheck />
            </button>
        </form>
    );

    const category = (
        <div className='flex w-full justify-end '>
            <button
                onClick={addCategoryToNewProduct}
                className='text-xs text-slate-500'
            >
                {newProduct.category}
            </button>
        </div>
    );
    return newProduct.category ? category : addCategory;
}
