import React, { useContext, useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import {
    newProductContext,
    NewProductContextType,
} from '@globalState/NewProductContext';
import Cancel from './Cancel';
import SaveColor from './SaveColor';
import ColorCircle from '@components/ColorCircle';
import { ProductColorEnum, TailwindColorEnum } from 'src/enums';
import { ProductColor } from 'src/types/SupabaseProductsTable';

export default function ColorDialogue({
    toggleColorDialogue,
}: {
    toggleColorDialogue: () => void;
}) {
    const { newProduct, setActiveColorKey, setNewProduct } = useContext(
        newProductContext
    ) as NewProductContextType;

    const [productColorDraft, setProductColorDraft] =
        useState<ProductColor | null>(null);

    const availableColors: ProductColor[] = Object.values(ProductColorEnum);
    const test: TailwindColorEnum = "bg-black";
    const colorDialogue = (
        <div className='absolute p-2 bg-white border rounded-lg'>
            <h3 className='px-4 text-xl font-bold '>Farbe hinzufügen</h3>
            <ul className='grid grid-cols-4 gap-2 py-4 '>
                {availableColors.map((color) => {
                    const selectThisColor = () => {
                        setProductColorDraft(color);
                    };
                    // const tailwindColor = ProductColorEnum[color];
                    // console.log(tailwindColor);
                    return (
                        <li
                            key={color[0]}
                            className='grid place-content-center'
                        >
                            <button type='button' onClick={selectThisColor}>
                                <ColorCircle
                                    tailwindColor={'bg-black'}
                                    // active={color[0] === productColorDraft[0]}
                                    active={true}
                                    icon={<FiPlus className='text-slate-200' />}
                                    name={color[0]}
                                />
                            </button>
                        </li>
                    );
                })}
            </ul>
            <div className='flex w-full py-4 justify-evenly'>
                <Cancel toggleColorDialogue={toggleColorDialogue} />
                <SaveColor
                    color={productColorDraft}
                    toggleColorDialogue={toggleColorDialogue}
                />
            </div>
        </div>
    );
    return colorDialogue;
}
