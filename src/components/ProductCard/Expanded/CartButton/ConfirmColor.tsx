import React from 'react';

export default function ConfirmColor({
    color,
    closeConfirmColor,
    addThisProductToCart,
}: {
    color: ProductInColor | null;
    closeConfirmColor: () => void;
    addThisProductToCart: () => void;
}) {
    const handleConfirmColor = () => {
        addThisProductToCart();
        closeConfirmColor();
    };

    const handleCancelColor = () => {
        closeConfirmColor();
    };

    const confirmColor = (
        <div className='fixed right-1/2 top-[50vh] z-40 h-fit w-64 -translate-y-1/2 translate-x-1/2 rounded-3xl bg-white shadow-2xl'>
            <h2 className='p-4 px-8 text-xl text-center'>
                Möchtest du das Produkt in {color?.color_name}?
            </h2>
            <div className='grid py-4 place-content-center'>
                <div>
                    <div
                        className={`h-8 w-8 rounded-full bg-${color?.tailwind_color}`}
                    ></div>
                    <h3 className='pt-1'>{color?.color_name}</h3>
                </div>
            </div>
            <div className='grid grid-cols-2 pb-4'>
                <button
                    onClick={handleCancelColor}
                    className='w-2/3 px-4 py-2 ml-auto mr-2 border-2 rounded-full border-coastal-blue-10 text-coastal-blue-10'
                >
                    Nein
                </button>
                <button
                    onClick={handleConfirmColor}
                    className='w-2/3 px-4 py-2 ml-2 mr-auto font-bold text-white border-2 rounded-full bg-coastal-blue-10'
                >
                    Ja
                </button>
            </div>
        </div>
    );
    return confirmColor;
}
