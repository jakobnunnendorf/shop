import Image from "next/image"
import Link from "next/link"
import { FiMenu, FiShoppingCart, FiUser } from 'react-icons/fi';

export default function Header() {
    const upper_row = (
        <section className='top-0 h-16 w-full border-b py-2 shadow-sm lg:shadow-none'>
            <div className='grid h-full w-full grid-cols-12'>
                <div className='col-span-3 h-full pl-4 pr-8 xl:px-12'>
                    <FiMenu
                        fontSize='3em'
                        className='align-self-end lg:hidden'
                    />
                    <nav className='hidden h-full w-full items-center lg:flex'>
                        <ul className='flex w-full justify-between font-bold'>
                            <Link href='/'>
                                <li>Home</li>
                            </Link>
                            <Link href='/shop'>
                                <li>Shop</li>
                            </Link>
                            <Link href='/help'>
                                <li>Hilfe</li>
                            </Link>
                        </ul>
                    </nav>
                </div>

                <div className='col-span-6 flex h-full overflow-hidden rounded-3xl border p-2'>
                    <div className='relative h-full w-24'>
                        <Link href='/' className=''>
                            <Image
                                src='/p2d_logo.png'
                                alt='Phone2Door Handyzubehör Online shop Logo'
                                fill={true}
                                objectFit='contain'
                            />
                        </Link>
                    </div>
                    <input
                        type='text'
                        placeholder='Suche...'
                        className='h-full w-full border-l text-center'
                    />
                </div>

                <nav className='col-span-3 flex h-full justify-around lg:justify-end lg:space-x-8 lg:pr-8'>
                    <Link
                        href='/einkaufswagen'
                        className='flex h-full items-center'
                    >
                        <FiShoppingCart size={32} />
                    </Link>

                    <Link href='/user' className='flex h-full items-center '>
                        <FiUser size={32} />
                    </Link>
                </nav>
            </div>
        </section>
    );
    const lower_row = (
        <nav className='hidden h-8 w-full border-b shadow-lg lg:block'>
            <ul className='flex h-full w-full items-center justify-around text-sm'>
                <Link href='shop'>
                    <li>Handyhüllen</li>
                </Link>
                <Link href='shop'>
                    <li>Panzergläser</li>
                </Link>
                <Link href='shop'>
                    <li>Ladekabel</li>
                </Link>
                <Link href='shop'>
                    <li>Ladestecker</li>
                </Link>
                <Link href='shop'>
                    <li>Tablet-Taschen</li>
                </Link>
                <Link href='shop'>
                    <li>Handy-Halterungen</li>
                </Link>
            </ul>
        </nav>
    );
    const wrapper = (
        <header>
            {upper_row}
            {lower_row}
        </header>
    );
    return wrapper;
}
