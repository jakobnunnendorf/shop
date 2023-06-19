import './globals.css';

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
                    <Header/>
                    {children}
                </SessionContextProvider>
            </body>
        </html>
    );
    return rootLayoutContent;
}
