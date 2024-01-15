import React from 'react';
import { FiPlus } from 'react-icons/fi';
import {
    newProductContext,
    NewProductContextType,
} from '@globalState/NewProductContext';
import ColorDialogue from '../ColorDialogue/ColorDialogue';
import { uniqueId } from 'lodash';
import AddColorButton from './AddColorButton';
import ColorCircle from '@components/ColorCircle';

export default function AddColors() {
    const { newProduct, activeColorKey, setActiveColorKey } = React.useContext(
        newProductContext
    ) as NewProductContextType;
    const [showColorDialogue, setShowColorDialogue] = React.useState(false);
    const toggleColorDialogue = () => {
        setShowColorDialogue(!showColorDialogue);
    };
    const nonNullColors = newProduct.imageURLObject
        ? Object.values(newProduct.imageURLObject).filter(
              (color): color is ProductInColor => color && color.colorName
          )
        : [];
    // const setKeyFromColor = (color: ProductInColor) => {
    //     let keyOfColor = Object.keys(newProduct.imageURLObject).find(
    //         (colorKey): colorKey is ColorKey => {
    //             return (
    //                 newProduct.imageURLObject[colorKey as ColorKey]
    //                     ?.colorName === color.colorName
    //             );
    //         }
    //     );
    //     keyOfColor = keyOfColor ? keyOfColor : 'defaultColor';
    //     setActiveColorKey(keyOfColor);
    // };
    const addColors = (
        <div className='relative space-y-4'>
            <div>
                {showColorDialogue && (
                    <ColorDialogue toggleColorDialogue={toggleColorDialogue} />
                )}
                <h3 className='text-xl font-bold '> Farben</h3>
                <ul className='flex py-2 space-x-4'>
                    {nonNullColors.length < 6 && (
                        <AddColorButton
                            toggleColorDialogue={toggleColorDialogue}
                        />
                    )}
                    {nonNullColors.map((color) => {
                        return (
                            <ColorCircle
                                tailwindColor={color.tailwindColor}
                                active={false}
                            />
                        );
                    })}
                </ul>
            </div>
        </div>
    );
    return addColors;
}
