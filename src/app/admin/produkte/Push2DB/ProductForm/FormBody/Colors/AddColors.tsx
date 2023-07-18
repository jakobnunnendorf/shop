import React from 'react';
import { FiPlus } from 'react-icons/fi';
import ColorMap from '@components/ProductCase/ExtendedCard/ProductInfo/ColorRow/ColorMap';
import {
    NewProductContext,
    NewProductContextType,
} from '@globalState/NewProductContext';
import ColorDialogue from './ColorDialogue';

export default function AddColors() {
    const { newProduct, activeColorKey, setActiveColorKey } = React.useContext(
        NewProductContext
    ) as NewProductContextType;

    const [showColorDialogue, setShowColorDialogue] = React.useState(false);
    const toggleColorDialogue = () => {
        setShowColorDialogue(!showColorDialogue);
    };

    const nonNullColors = Object.values(newProduct.imageURL_object).filter(
        (color): color is ProductInColor =>
            color !== null && color.color_name !== null
    );
    console.log('nonNullColors', nonNullColors);
    const setKeyFromColor = (color: ProductInColor) => {
        let keyOfColor = Object.keys(newProduct.imageURL_object).find(
            (colorKey): colorKey is colorKey => {
                return (
                    newProduct.imageURL_object[colorKey]?.color_name ===
                    color.color_name
                );
            }
        );
        keyOfColor = keyOfColor ? keyOfColor : 'default_color';
        setActiveColorKey(keyOfColor);
    };
    const addColors = (
        <div className='relative space-y-4'>
            <div>
                {showColorDialogue ? (
                    <ColorDialogue toggleColorDialogue={toggleColorDialogue} />
                ) : null}
                <h3 className='text-xl font-bold '> Farben</h3>
                <ul className='flex space-x-4 py-2'>
                    {nonNullColors.length < 6 && (
                        <button type='button' onClick={toggleColorDialogue}>
                            <li className='grid h-6 w-6 place-content-center rounded-full border'>
                                <FiPlus className='text-slate-500' />
                            </li>
                        </button>
                    )}
                    <ColorMap
                        colors={nonNullColors}
                        activeColorKey={
                            newProduct.imageURL_object[activeColorKey]
                        }
                        selectColor={setKeyFromColor}
                    />
                </ul>
            </div>
            {/* )} */}
        </div>
    );
    return addColors;
}
