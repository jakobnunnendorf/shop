import Image from "next/image"
import styles from "./ProductContainer.module.css"

export interface ProductContainerProps {
    id: string
    title: string
    price: number
    image: string
    description: string
    availability: number
}

export function ProductContainer({ productData, active }: { productData: ProductContainerProps; active: boolean }) {
    {
        console.log(productData)
    }
    return (
        <div className="flex flex-col items-center justify-center w-40 p-2 space-y-2 bg-white border-2 snap-center rounded-xl border-slate-100">
            <figure className="relative w-full h-32 rounded-xl">
                <Image
                    src={productData.image}
                    alt={productData.title}
                    fill={true}
                    className="rounded-tl-xl rounded-tr-xl"
                />
            </figure>
            <div className="p-2 space-y-2 border-t-2 border-slate-100">
                <div className="flex items-center justify-around w-full text-center">
                    {productData.availability && (
                        <p className="text-xs">
                            <span className="text-green-500">{productData.availability}</span> übrig
                        </p>
                    )}
                    <p className="font-bold">{productData.price}€</p>
                </div>
                <div className="grid grid-cols-2 gap-1">
                    <div
                        className={`badge-outline badge h-auto border-2 border-gray-300 text-center text-xs font-extrabold text-gray-400 ${styles.tiny_text}`}
                    >
                        Xiaomi m12
                    </div>
                    <div
                        className={`badge-outline badge h-auto border-2 border-gray-300 text-center text-xs font-extrabold text-gray-400 ${styles.tiny_text}`}
                    >
                        iPhone X
                    </div>
                    <div
                        className={`badge-outline badge h-auto border-2 border-gray-300 text-center text-xs font-extrabold text-gray-400 ${styles.tiny_text}`}
                    >
                        Samsung Galaxy
                    </div>
                </div>
            </div>
        </div>
    )
}
