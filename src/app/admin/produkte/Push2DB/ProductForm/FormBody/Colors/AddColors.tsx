import React from 'react';
import { FiPlus } from 'react-icons/fi';
import ColorMap from '@components/ProductCase/ExtendedCard/ProductInfo/ColorRow/ColorMap';
import {
    NewProductContext,
    NewProductContextType,
} from '@globalState/NewProductContext';
import ColorDialogue from './ColorDialogue';

export default function AddColors() {
    const { productColors, colorInFocus, setColorInFocus } = React.useContext(
        NewProductContext
    ) as NewProductContextType;
    const [showColorDialogue, setShowColorDialogue] = React.useState(false);
    const toggleColorDialogue = () => {
        setShowColorDialogue(!showColorDialogue);
    };
    console.log(productColors);
    const addColors = (
        <div className='relative space-y-4'>
            <div>
                {showColorDialogue ? (
                    <ColorDialogue toggleColorDialogue={toggleColorDialogue} />
                ) : null}
                <h3 className='text-xl font-bold '> Farben</h3>
                <ul className='flex py-2 space-x-4'>
                    <button type='button' onClick={toggleColorDialogue}>
                        <li className='grid w-6 h-6 border rounded-full place-content-center'>
                            <FiPlus className='text-slate-500' />
                        </li>
                    </button>
                    <ColorMap
                        colors={productColors}
                        selectedColor={colorInFocus}
                        selectColor={setColorInFocus}
                    />
                </ul>
            </div>
            {/* )} */}
        </div>
    );
    return addColors;
}
