import React, { Dispatch, SetStateAction } from 'react';
import { FiArrowRight, FiCheck, FiX } from 'react-icons/fi';

export default function Explain({
    setStatus,
}: {
    setStatus: Dispatch<
        SetStateAction<'showcase' | 'preview' | 'edit' | 'explain'>
    >;
}) {
    const launchShowcase = () => {
        setStatus('showcase');
    };
    const explain = (
        <div className='relative h-full w-full p-16 '>
            <div className='space-y-4'>
                <h2 className='text-2xl font-bold'>Anleitung</h2>
                <div className='flex items-center space-x-4'>
                    <div className='grid h-6 w-6 place-content-center rounded-full border p-2'>
                        1
                    </div>
                    <p>
                        <span className='font-bold'>Produktfarbe</span>{' '}
                        hinzufügen.
                    </p>
                </div>
                <div className='flex items-start space-x-4'>
                    <div className='grid h-6 w-6 place-content-center rounded-full border p-2'>
                        2
                    </div>
                    <p>
                        <span className='font-bold'>Produktbild </span>
                        hinzufügen: <br />
                        Der{' '}
                        <span className='rounded-lg border border-orange-400 p-1 text-orange-400'>
                            Edit Mode
                        </span>{' '}
                        ist dafür da, um ein neues Bild hochzuladen. Wenn du
                        dein Bild hochgeladen hast siehst du es im{' '}
                        <span className='rounded-lg border border-yellow-400 p-1 text-yellow-400'>
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
                    <div className='grid h-6 w-6 place-content-center rounded-full border p-2'>
                        3
                    </div>
                    <p>
                        <span className='font-bold'>Produkt </span>
                        bearbeiten: <br />
                        Im{' '}
                        <span className='rounded-lg border border-blue-400 p-1 text-blue-400'>
                            Showcase Mode
                        </span>{' '}
                        kannst du das Produkt bearbeiten und siehst, wie es auf
                        der Website aussehen wird.
                    </p>
                </div>
                <div className='flex items-start space-x-4'>
                    <div className='grid h-6 w-6 place-content-center rounded-full border p-2'>
                        4
                    </div>
                    <p>
                        In den Server{' '}
                        <span className='font-bold'>Hochladen: </span> <br />{' '}
                        Sobald dein Produkt fertig ist, wird es grün und sagt
                        dir, dass es{' '}
                        <span className='rounded-lg border border-green-400 p-1 text-green-400'>
                            Ready
                        </span>{' '}
                        zum hochladen ist.
                    </p>
                </div>
            </div>
            <button
                className='absolute bottom-6 right-6 flex items-center rounded-lg border border-green-400 px-2 py-1 text-green-700'
                onClick={launchShowcase}
            >
                <p> Los geht&apos;s</p>
                <FiArrowRight />
            </button>
        </div>
    );
    return explain;
}
