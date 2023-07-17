import React from 'react';
import { useContext } from 'react';
import { FiCheck } from 'react-icons/fi';
import {
    NewProductContext,
    NewProductContextType,
} from '@globalState/NewProductContext';

export default function AddCategory() {
    const { newCategory, setNewCategory } = useContext(
        NewProductContext
    ) as NewProductContextType;
    const [categoryInput, setCategoryInput] =
        React.useState<productCategory | null>(null);

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const categoryId = e.target.value as productCategory;
        setCategoryInput(categoryId);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (categoryInput !== null) {
            setNewCategory(categoryInput);
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
        <form className='flex items-center space-x-2' onSubmit={handleSubmit}>
            <label htmlFor='category'>Kategorie:</label>
            <select
                id='category'
                value={categoryInput ?? ''}
                onChange={handleSelectChange}
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
                onClick={handleSubmit}
                className='grid w-8 h-8 border border-green-400 rounded-full place-content-center'
            >
                <FiCheck />
            </button>
        </form>
    );

    const category = (
        <div className='flex justify-end w-full '>
            <button
                onClick={() => setNewCategory(null)}
                className='text-xs  text-slate-500'
            >
                {newCategory}
            </button>
        </div>
    );
    return newCategory ? category : addCategory;
}
