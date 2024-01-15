import './globals.css';

import { CartContextProvider } from '@globalState/CartContext';
import { MobileMenuContextProvider } from '@globalState/MobileMenuContext';
import { SearchContextProvider } from '@globalState/SearchContext';
import { SessionContextProvider } from '@globalState/SessionContext';
import { WishListContextProvider } from '@globalState/WishListContext';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import NextTopLoader from 'nextjs-toploader';

export const dynamic = 'force-dynamic';
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const rootLayoutContent = (
        <html lang='en'>
            <head>
                <link rel='icon' href='/favicon.ico' />
            </head>
            <body>
                <WishListContextProvider>
                    <CartContextProvider>
                        <SessionContextProvider>
                            <MobileMenuContextProvider>
                                <SearchContextProvider>
                                    <header>
                                        <Header />
                                    </header>
                                </SearchContextProvider>
                            </MobileMenuContextProvider>

                            <main className='relative w-full min-h-screen top-36 lg:top-24'>
                                <NextTopLoader
                                    showSpinner={false}
                                    color='#0388A6'
                                />

                                {children}
                            </main>
                            <footer className='relative w-full top-36 lg:top-24'>
                                <Footer />
                            </footer>
                        </SessionContextProvider>
                    </CartContextProvider>
                </WishListContextProvider>
            </body>
        </html>
    );
    return rootLayoutContent;
}
