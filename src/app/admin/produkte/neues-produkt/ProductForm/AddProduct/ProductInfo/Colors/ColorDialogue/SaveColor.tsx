import React, { useContext } from 'react';
import {
    newProductContext,
    NewProductContextType,
} from '@globalState/NewProductContext';

export default function SaveColor({
    color,
    toggleColorDialogue,
}: {
    color: ProductColor | null;
    toggleColorDialogue: () => void;
}) {
    const { newProduct, setActiveColorKey, setNewProduct } = useContext(
        newProductContext
    ) as NewProductContextType;

    const addColor = () => {
        const nextFreeColorKey = newProduct.imageURLObject
            ? Object.keys(newProduct.imageURLObject).find(
                  (colorKey): colorKey is ColorKey => {
                      if (!newProduct.imageURLObject) return true;
                      const colorName =
                          newProduct.imageURLObject[colorKey as ColorKey]
                              ?.colorName;
                      return colorName ? false : true;
                  }
              )
            : 'defaultColor';
        if (nextFreeColorKey) {
            const imageURLObject: ImageURLObject = {
                ...newProduct.imageURLObject,
                [nextFreeColorKey]: {
                    colorName: color,
                    imageURLArray: [],
                    tailwindColor: colorToTailwind(color),
                },
            };
            setNewProduct({
                ...newProduct,
                imageURLObject,
            });
            setActiveColorKey(nextFreeColorKey);
        } else {
        }
        toggleColorDialogue();
    };
    const saveColor = (
        <button
            onClick={addColor}
            aria-disabled={color === null}
            className={`px-4 py-2 border ${
                color ? 'border-green-500' : 'border-gray-300 text-gray-300'
            } rounded-lg`}
        >
            Speichern
        </button>
    );
    return saveColor;
}
