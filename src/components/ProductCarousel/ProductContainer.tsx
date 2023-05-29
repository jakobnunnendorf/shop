import Image from "next/image"

export interface ProductContainerProps {
    id: string
    title: string
    price: number
    image: string
    description: string
    availability: number
}

export function ProductContainer({ productData, active }: { productData: ProductContainerProps; active: boolean }) {
    return (
        <div className={`card w-48 bg-base-100 shadow-xl`}>
            <figure>
                <img src={productData.image} alt={productData.title} />
            </figure>
            <div className="card-body">
                <div className="flex w-full flex-col justify-around">
                    <p>{productData.title}</p>
                    <p className="font-bold">{productData.price}€</p>
                </div>
            </div>
        </div>
    )
}
