import React from "react"
import { CategoryBlocks } from "src/components/CategoryBlocks/CategoryBlocks"
import { ProductCarousel } from "src/components/ProductCarousel/ProductCarousel"
// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
    return (
        <div className="flex h-fit flex-col justify-around space-y-24 py-32">
            <ProductCarousel />
            <CategoryBlocks />
        </div>
    )
}
