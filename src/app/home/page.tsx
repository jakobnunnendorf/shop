import Image from "next/image"
import React from "react"
import { CategoryBlocks } from "src/components/CategoryBlocks/CategoryBlocks"
import { ProductCarousel } from "src/components/ProductCarousel/ProductCarousel"
// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
    return (
        <div className="flex h-fit w-full flex-col justify-around space-y-32 py-48">
            <div className="space-y-4 text-teal-900 flex flex-col items-center">
                <Image src='/p2d_logo.png' width={140} height={140} alt='' className='mb-8'/>
                <h1 className="text-center text-4xl font-bold">Willkommen bei Phone2Door</h1>
                <h2 className="text-center text-xl font-bold">
                    Wir liefern Handyhüllen und Zubehör bequem an ihre Haustür
                </h2>
            </div>
            <ProductCarousel heading="Bestseller" />
            <CategoryBlocks />
            <ProductCarousel heading="Handy Hüllen" />
            <ProductCarousel heading="Panzergläser" />
            <ProductCarousel heading="Ladekabel" />
        </div>
    )
}
