import React from 'react';

export default function ColorCircle({
    tailwindColor,
    active,
    icon,
    name,
}: {
    tailwindColor: TailwindColor | null;
    active: boolean;
    icon?: React.ReactNode;
    name?: string;
}) {
    const colorCircle = (
        <div className='flex flex-col items-center justify-center'>
            <div
                className={`grid place-content-center h-6 w-6 ${tailwindColor} rounded-full border-2 ${
                    active ? ' border-blue-400 shadow-2xl' : ''
                }}`}
            >
                {icon}
            </div>
            {name && (
                <p
                    className={` ${
                        active ? 'underline decoration-blue-400' : ''
                    }`}
                >
                    {name}
                </p>
            )}
        </div>
    );
    return colorCircle;
}
