import './globals.css';

import { ActiveFiltersContextProvider } from '@globalState/ActiveFiltersContext';
import { ActiveProductContextProvider } from '@globalState/ActiveProductCard';
import { CartContextProvider } from '@globalState/CartContext';
import { MobileMenuContextProvider } from '@globalState/MobileMenuContext';
import { SessionContextProvider } from '@globalState/SessionContext';
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
                <ActiveFiltersContextProvider>
                    <ActiveProductContextProvider>
                        <CartContextProvider>
                            <SessionContextProvider>
                                <MobileMenuContextProvider>
                                    <Header />
                                </MobileMenuContextProvider>
                                <main className='relative top-16 w-full lg:top-24'>
                                    {children}
                                </main>
                            </SessionContextProvider>
                        </CartContextProvider>
                    </ActiveProductContextProvider>
                </ActiveFiltersContextProvider>
            </body>
        </html>
    );
    return rootLayoutContent;
}
