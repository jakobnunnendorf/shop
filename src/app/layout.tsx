import "./globals.css"
import React from "react"

import Header from "./Header/Header"

export const metadata = {
    title: "Phone2Door.com",
    description: "Hüllen, Panzergläser, screen protector, ladekabel und Zubehör für dein Handy",
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                {" "}
                <Header />
                {children}
            </body>
        </html>
    )
}
