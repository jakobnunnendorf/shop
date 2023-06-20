import Image from "next/image"
import Link from "next/link"
import { FiShoppingCart } from 'react-icons/fi';
import MobileMenuBurger from './MobileMenuBurger';
import SideMenu from './SideMenu';
import UserHeaderLink from './UserHeaderLink';

export default function Header() {
    const upper_row = (
        <section className='top-0 h-16 w-full border-b bg-sandy-beige-4 py-2 shadow-sm backdrop-blur-3xl lg:shadow-none'>
            <div className='grid h-full w-full grid-cols-12'>
                <div className='col-span-3 h-full pl-4 pr-8 xl:px-12'>
                    <MobileMenuBurger />
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

                <div className='col-span-6 flex h-full overflow-hidden rounded-3xl border border-coastal-blue-3 px-2'>
                    <div className='relative h-12 w-24'>
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
                        className='h-full w-full border-l border-coastal-blue-3 bg-transparent text-center placeholder-coastal-blue-10 outline-none'
                    />
                </div>

                <nav className='col-span-3 flex h-full justify-around lg:justify-end lg:space-x-8 lg:pr-8'>
                    <Link
                        href='/einkaufswagen'
                        className='flex h-full items-center'
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
        <nav className='hidden w-full h-8 border-b shadow-lg lg:block'>
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
        <header className='fixed h-screen w-full'>
            {upper_row}
            {lower_row}
            <SideMenu />
        </header>
    );
    return wrapper;
}
