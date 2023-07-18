import React, { Dispatch, SetStateAction } from 'react';
import { FiArrowRight, FiCheck, FiX } from 'react-icons/fi';

export default function Explain({
    setStatus,
}: {
    setStatus: Dispatch<
        SetStateAction<productStatus>
    >;
}) {
    const launchShowcase = () => {
        setStatus('showcase');
    };
    const explain = (
        <div className='relative w-full h-full p-16 '>
            <div className='space-y-4'>
                <h2 className='text-2xl font-bold'>Anleitung</h2>
                <div className='flex items-center space-x-4'>
                    <div className='grid w-6 h-6 p-2 border rounded-full place-content-center'>
                        1
                    </div>
                    <p>
                        <span className='font-bold'>Produktfarbe</span>{' '}
                        hinzufügen.
                    </p>
                </div>
                <div className='flex items-start space-x-4'>
                    <div className='grid w-6 h-6 p-2 border rounded-full place-content-center'>
                        2
                    </div>
                    <p>
                        <span className='font-bold'>Produktbild </span>
                        hinzufügen: <br />
                        Der{' '}
                        <span className='p-1 text-orange-400 border border-orange-400 rounded-lg'>
                            Edit Mode
                        </span>{' '}
                        ist dafür da, um ein neues Bild hochzuladen. Wenn du
                        dein Bild hochgeladen hast siehst du es im{' '}
                        <span className='p-1 text-yellow-400 border border-yellow-400 rounded-lg'>
                            Preview Mode
                        </span>{' '}
                        . Wenn es dir nicht gefällt, kannst du mit{' '}
                        <FiX className='inline-block text-red-400' /> zurück in
                        den edit mode oder das Bild mit{' '}
                        <FiCheck className='inline-block text-green-400' />{' '}
                        bestätigen.
                    </p>
                </div>
                <div className='flex items-start space-x-4'>
                    <div className='grid w-6 h-6 p-2 border rounded-full place-content-center'>
                        3
                    </div>
                    <p>
                        <span className='font-bold'>Produkt </span>
                        bearbeiten: <br />
                        Im{' '}
                        <span className='p-1 text-blue-400 border border-blue-400 rounded-lg'>
                            Showcase Mode
                        </span>{' '}
                        kannst du das Produkt bearbeiten und siehst, wie es auf
                        der Website aussehen wird.
                    </p>
                </div>
                <div className='flex items-start space-x-4'>
                    <div className='grid w-6 h-6 p-2 border rounded-full place-content-center'>
                        4
                    </div>
                    <p>
                        In den Server{' '}
                        <span className='font-bold'>Hochladen: </span> <br />{' '}
                        Sobald dein Produkt fertig ist, wird es grün und sagt
                        dir, dass es{' '}
                        <span className='p-1 text-green-400 border border-green-400 rounded-lg'>
                            Ready
                        </span>{' '}
                        zum hochladen ist.
                    </p>
                </div>
            </div>
            <button
                className='absolute flex items-center px-2 py-1 text-green-700 border border-green-400 rounded-lg bottom-6 right-6'
                onClick={launchShowcase}
            >
                <p> Los geht&apos;s</p>
                <FiArrowRight />
            </button>
        </div>
    );
    return explain;
}
