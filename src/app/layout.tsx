import './globals.css';

import { ActiveFiltersContextProvider } from '@globalState/ActiveFiltersContext';
import { ActiveProductContextProvider } from '@globalState/ActiveProductCardContext';
import { CartContextProvider } from '@globalState/CartContext';
import { MobileMenuContextProvider } from '@globalState/MobileMenuContext';
import { ProductCardContextProvider } from '@globalState/ProductCardContext';
import { SearchResultsContextProvider } from '@globalState/SearchResults';
import { SessionContextProvider } from '@globalState/SessionContext';
import { WishlistContextProvider } from '@globalState/WishlistContext';
import Header from './Header/Header';

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
                <SearchResultsContextProvider>
                    <ProductCardContextProvider>
                        <ActiveFiltersContextProvider>
                            <ActiveProductContextProvider>
                                <WishlistContextProvider>
                                    <CartContextProvider>
                                        <SessionContextProvider>
                                            <MobileMenuContextProvider>
                                                <Header />
                                            </MobileMenuContextProvider>
                                            <main className='relative w-full top-32 lg:top-24'>
                                                {children}
                                            </main>
                                        </SessionContextProvider>
                                    </CartContextProvider>
                                </WishlistContextProvider>
                            </ActiveProductContextProvider>
                        </ActiveFiltersContextProvider>
                    </ProductCardContextProvider>
                </SearchResultsContextProvider>
            </body>
        </html>
    );
    return rootLayoutContent;
}
