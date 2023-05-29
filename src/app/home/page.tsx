import React from "react"
import { CategoryBlocks } from "src/components/CategoryBlocks/CategoryBlocks"
import { ProductCarousel } from "src/components/ProductCarousel/ProductCarousel"
// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
    return (
        <div className="flex h-fit w-full flex-col justify-around space-y-24 py-32">
            <ProductCarousel />
            <div className="divider"></div>
            <CategoryBlocks />
            <div className="divider"></div>
        </div>
    )
}
