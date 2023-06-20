import './globals.css';

import { SessionContextProvider } from '@globalState/SessionContext';
import Header from './Header/Header';
import { MobileMenuStateContextProvider } from '@globalState/MobileMenuContext';
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
                    {children}
                </SessionContextProvider>
            </body>
        </html>
    );
    return rootLayoutContent;
}
