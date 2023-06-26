import Image from "next/image"
import Link from "next/link"
import { FiShoppingCart } from 'react-icons/fi';
import MobileMenuBurger from './MobileMenuBurger';
import SideMenu from './SideMenu';
import UserHeaderLink from './UserHeaderLink';

export default function Header() {
    const upper_row = (
        <section className='top-0 w-full h-16 py-2 border-b shadow-sm bg-sandy-beige-4 backdrop-blur-3xl lg:shadow-none'>
            <div className='grid w-full h-full grid-cols-12'>
                <div className='h-full col-span-3 pl-4 pr-8 xl:px-12'>
                    <MobileMenuBurger />
                    <nav className='items-center hidden w-full h-full lg:flex'>
                        <ul className='flex justify-between w-full font-bold'>
                            <Link href='/'>
                                <li>Home</li>
                            </Link>
                            <Link href='/shop'>
                                <li>Shop</li>
                            </Link>
                            <Link href='/Hilfe'>
                                <li>Hilfe</li>
                            </Link>
                        </ul>
                    </nav>
                </div>

                <div className='flex h-full col-span-6 px-2 overflow-hidden border rounded-3xl border-coastal-blue-3'>
                    <div className='relative w-24 h-12'>
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
                        className='w-full h-full text-center bg-transparent border-l outline-none border-coastal-blue-3 placeholder-coastal-blue-10'
                    />
                </div>

                <nav className='flex justify-around h-full col-span-3 lg:justify-end lg:space-x-8 lg:pr-8'>
                    <Link
                        href='/einkaufswagen'
                        className='flex items-center h-full'
                    >
                        <FiShoppingCart
                            size={32}
                            className='text-coastal-blue-10'
                        />
                    </Link>
                    <UserHeaderLink />
                </nav>
            </div>
        </section>
    );
    const lower_row = (
        <nav className='hidden w-full h-8 border-b shadow-lg bg-sandy-beige-1 backdrop-blur-3xl lg:block'>
            <ul className='flex items-center justify-around w-full h-full text-sm'>
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
        <header className='fixed z-50 w-full max-w-screen h-fit'>
            {upper_row}
            {lower_row}
            <SideMenu />
        </header>
    );
    return wrapper;
}
