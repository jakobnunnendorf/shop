import { ProductContainer } from "./ProductContainer"
const inventory = {
    product1: {
        name: "Product 1",
        price: 100,
        image: "/assets/img/product/product-3.jpg",
        description: "This is a great product",
        availability: 50,
    },
    product2: {
        name: "Product 2",
        price: 200,
        image: "/assets/img/product/product-3.jpg",
        description: "This is a great product",
        availability: 50,
    },
    product3: {
        name: "Product 3",
        price: 300,
        image: "/assets/img/product/product-3.jpg",
        description: "This is a great product",
        availability: 50,
    },
}

export function ProductCarousel() {
    return (
        <div className="flex h-80 flex-col items-center justify-around">
            <h2 className="text-3xl">Bestsellers</h2>
            <div className="space-around flex h-60 w-full items-center justify-center">
                {Object.values(inventory).map((product, index) => (
                    <ProductContainer key={index} productData={product} active={true} />
                ))}
            </div>
            <button className="rounded-xl border-2 border-black p-2">Add to cart</button>
        </div>
    )
}
