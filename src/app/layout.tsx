import './globals.css';

import {
    ActiveProductContextProvider,
} from '@globalState/ActiveProductCard';
import { CartContextProvider } from '@globalState/CartContext';
import { MobileMenuStateContextProvider } from '@globalState/MobileMenuContext';
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
                <ActiveProductContextProvider>
                    <CartContextProvider>
                        <SessionContextProvider>
                            <MobileMenuStateContextProvider>
                                <Header />
                            </MobileMenuStateContextProvider>
                            <main className='relative w-full top-16 lg:top-24'>
                                {children}
                            </main>
                        </SessionContextProvider>
                    </CartContextProvider>
                </ActiveProductContextProvider>
            </body>
        </html>
    );
    return rootLayoutContent;
}
