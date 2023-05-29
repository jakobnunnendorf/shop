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
        <div className={`card w-48 bg-base-100 shadow-xl`}>
            <figure>
                <Image src={productData.image} alt={productData.name} width={140} height={30} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{productData.name}</h2>
                <div className="flex w-full justify-around">
                    <p>{productData.availability} übrig</p>
                    <p>{productData.price},00€</p>
                </div>
                <div className="card-actions flex justify-center">
                    <button className="btn btn-primary">
                        Jetzt Kaufen
                    </button>
                </div>
            </div>
        </div>
    )
}
