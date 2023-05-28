import { ComponentFrame } from "./LoginComponent/ComponentFrame"
import "./globals.css"

export default function Page() {
    return (
        <div className="flex h-fit min-h-screen flex-col items-center justify-around bg-gray-100 py-2">
            <main className="flex w-full flex-1 flex-col items-center justify-center px-5 text-center sm:px-20">
                <h1 className="my-20 text-4xl font-bold text-gray-700 md:text-6xl">Hier entsteht eine Website</h1>
                <ComponentFrame />
            </main>
        </div>
    )
}
