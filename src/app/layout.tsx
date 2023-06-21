import './globals.css';

import { MobileMenuStateContextProvider } from '@globalState/MobileMenuContext';
import { SessionContextProvider } from '@globalState/SessionContext';
import Header from './Header/Header';
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const rootLayoutContent = (
        <html lang='en'>
            <body>
                <SessionContextProvider>
                    <MobileMenuStateContextProvider>
                        <Header />
                    </MobileMenuStateContextProvider>
                    <main className='relative top-16 w-full lg:top-24'>
                        {children}
                    </main>
                </SessionContextProvider>
            </body>
        </html>
    );
    return rootLayoutContent;
}
