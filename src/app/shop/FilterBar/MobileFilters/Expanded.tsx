import Link from 'next/link';
import React from 'react';
import { FiSearch, FiX } from 'react-icons/fi';
import { modelTree } from '@app/shop/FilterBar/helperFunctions';
import DeviceTree from '../components/DeviceTree';
import FilterSection from '../components/FilterSection';
import { priceArray, categoryArray } from '../components/Filter';
import FilterTags from '../components/FilterTags';
import { toggleQueryParam } from '@lib/helperFunctions';

export default function Expanded({
    modelTree,
    nOfResults,
    paramString,
}: {
    modelTree: modelTree;
    nOfResults: number;
    paramString: string;
}) {
    /*| 'schwarz'
    | 'weiss'
    | 'rot'
    | 'blau'
    | 'gruen'
    | 'gelb'
    | 'lila'
    | 'rosa'
    | 'orange'
    | 'braun'
    | 'grau'
    | 'silber'
    | 'transparent';*/
    const colors: Record<string, string> = {
        schwarz: 'bg-black',
        weiss: 'bg-slate-50',
        rot: 'bg-red-500',
        blau: 'bg-blue-500',
        gruen: 'bg-green-500',
        gelb: 'bg-yellow-500',
        lila: 'bg-purple-500',
        rosa: 'bg-pink-500',
        orange: 'bg-orange-500',
        braun: 'bg-[#965a3e]',
        grau: 'bg-gray-500',
        silber: 'bg-slate-300',
    };
    const expandedMobileFilters = (
        <div className='flex flex-col w-full h-full justify-evenly'>
            <div className='flex items-center justify-end w-full h-16 px-8 '>
                <Link
                    href='/shop'
                    className='flex items-center h-8 underline w-fit border-coastal-blue-10 text-coastal-blue-10'
                >
                    Schliessen <FiX size={20} />
                </Link>
            </div>
            <div className='flex-grow px-4 py-8'>
                <h2 className='text-3xl font-bold text-center'>Deine Filter</h2>
                <div className='py-4 pt-8'>
                    <ul className='grid grid-cols-5 py-4 mx-auto gap-y-4 gap-x-2 w-fit'>
                        {Object.keys(colors).map((colorKey) => {
                            const toggleThisColorParam = () => {
                                const currentURL =
                                    process.env.NEXT_PUBLIC_URL +
                                    '/shop?' +
                                    paramString;
                                const prunedURL = toggleQueryParam(
                                    currentURL,
                                    'color',
                                    colorKey
                                );
                                return prunedURL;
                            };
                            const isActive = paramString.includes(
                                `color=${colorKey}`
                            );
                            return (
                                <li key={colorKey}>
                                    <Link href={toggleThisColorParam()}>
                                        <div
                                            className={`mx-auto w-8 h-8 rounded-full ${
                                                colors[colorKey]
                                            } ${
                                                isActive
                                                    ? 'border-2 border-seafoam-green-10'
                                                    : ' border-coastal-blue-10'
                                            }`}
                                        ></div>
                                        <p className='pt-1 text-xs text-center'>
                                            {colorKey}
                                        </p>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    <h3 className='text-xl font-bold text-center'>Farben</h3>
                </div>
                <div className='py-4'>
                    <FilterSection
                        heading='Kategorien'
                        filters={categoryArray}
                    />
                    <FilterSection
                        heading='Modelle'
                        filters={<DeviceTree modelTree={modelTree} />}
                    />
                    <FilterSection heading='Preise' filters={priceArray} />
                </div>
            </div>
            <FilterTags paramString={paramString} />
            <div className='grid w-full grid-cols-2 py-16 justify-evenly'>
                <Link
                    href='/shop'
                    className='w-4/5 px-2 py-2 mx-auto mr-2 text-center border rounded-full border-coastal-blue-10 '
                >
                    Filter löschen
                </Link>
                <Link
                    href={`shop?${paramString.replace('filter=true', '')}`}
                    className='flex items-center w-4/5 px-2 py-2 mx-auto ml-2 text-white border rounded-full justify-evenly bg-coastal-blue-10 hover:bg-coastal-blue-10'
                >
                    Finden
                    <FiSearch size={20} />({nOfResults})
                </Link>
            </div>
        </div>
    );
    return expandedMobileFilters;
}
