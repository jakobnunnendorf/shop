import "./globals.css"
import React from "react"
import { BottomNav } from "src/components/layout/BottomNav/BottomNav"
import FooterSection from "src/components/layout/FooterSection/FooterSection"
import HeaderBar from "src/components/layout/HeaderBar/HeaderBar"

export const metadata = {
    title: "Phone2Door.com",
    description: "Hüllen, Panzergläser, screen protector, ladekabel und Zubehör für dein Handy",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
            <HeaderBar />
                {children}
            <FooterSection />
            <BottomNav />
            </body>
        </html>
    )
}
