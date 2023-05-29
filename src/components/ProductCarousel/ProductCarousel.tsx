import { ProductContainer } from "./ProductContainer"
const inventory = {
    product1: {
        name: "iPhone 14 Pro Leder Case - Waldgrün",
        price: 69,
        image: "/cases/iphone_3c7f37af-623e-4c38-bd80-5d1f66c76e69.jpg",
        description: "This is a great product",
        availability: 24,
    },
    product2: {
        name: "iPhone 14 Pro Leder Case - Mitternacht",
        price: 69,
        image: "/cases/iphone_085d2bba-a94d-4fae-931d-6ed7d574f551.jpeg",
        description: "This is a great product",
        availability: 37,
    },
    product3: {
        name: "iPhone 14 Pro Leder Case - Umbra",
        price: 69,
        image: "/cases/iphone_1984c306-3546-40d9-97ef-dbb8ce227b25.jpeg",
        description: "This is a great product",
        availability: 50,
    },
}

export function ProductCarousel() {
    const activeItem=0
    return (
        <div className="carousel-center carousel rounded-box max-w-md space-x-4 p-4">
                    {Object.values(inventory).map((product, index) => (
                        <div className="carousel-item" key={1}>
                            <ProductContainer
                                key={index}
                                productData={product}
                                active={index === activeItem ? true : false}
                            />
                        </div>
                    ))}
        </div>
    )
}
