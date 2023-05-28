import Image from "next/image"

interface ProductContainerProps {
    name: string
    price: number
    image: string
    description: string
    availability: number
}

export function ProductContainer({ productData, active }: { productData: ProductContainerProps; active: boolean }) {
    return (
        <div className="h-fit w-2/5 flex-col items-center justify-center border-2 border-black text-center">
            <Image src={productData.image} alt={productData.name} width={140} height={60} />
            <h2>{productData.name}</h2>
            <div className="flex w-full justify-around">
                <p>{productData.availability} left</p>
                <p>${productData.price}</p>
            </div>
        </div>
    )
}
