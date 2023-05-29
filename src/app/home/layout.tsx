import { HeaderBar } from "src/layout/HeaderBar/HeaderBar"
import FooterSection from "src/layout/FooterSection/FooterSection"
import { BottomNav } from "src/layout/BottomNav/BottomNav"

export default function DashboardLayout({
    children, // Will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <section className="flex h-screen flex-col">
            <HeaderBar />
            {children}
            <BottomNav />
            <FooterSection />
        </section>
    )
}
