import './globals.css';

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
            <body>
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
            </body>
        </html>
    );
    return rootLayoutContent;
}
