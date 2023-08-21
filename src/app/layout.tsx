import './globals.css';

import { ActiveFiltersContextProvider } from '@globalState/ActiveFiltersContext';
import { ActiveProductContextProvider } from '@globalState/ActiveProductCardContext';
import { CartContextProvider } from '@globalState/CartContext';
import { MobileMenuContextProvider } from '@globalState/MobileMenuContext';
import { ProductCardContextProvider } from '@globalState/ProductCardContext';
import { SearchResultsContextProvider } from '@globalState/SearchResultsContext';
import { SessionContextProvider } from '@globalState/SessionContext';
import { WishlistContextProvider } from '@globalState/WishlistContext';
import Header from './Header/Header';
import Footer from './Footer/Footer';

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
                <ProductCardContextProvider>
                    <ActiveFiltersContextProvider>
                        <SearchResultsContextProvider>
                            <ActiveProductContextProvider>
                                <WishlistContextProvider>
                                    <CartContextProvider>
                                        <SessionContextProvider>
                                            <MobileMenuContextProvider>
                                                <header>
                                                    <Header />
                                                </header>
                                            </MobileMenuContextProvider>
                                            <main className='relative w-full min-h-screen top-32 lg:top-24'>
                                                {children}
                                            </main>
                                            <footer className='relative w-full top-32 lg:top-24'>
                                                <Footer />
                                            </footer>
                                        </SessionContextProvider>
                                    </CartContextProvider>
                                </WishlistContextProvider>
                            </ActiveProductContextProvider>
                        </SearchResultsContextProvider>
                    </ActiveFiltersContextProvider>
                </ProductCardContextProvider>
            </body>
        </html>
    );
    return rootLayoutContent;
}
