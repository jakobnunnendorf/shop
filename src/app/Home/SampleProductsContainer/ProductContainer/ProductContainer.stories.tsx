import { ProductContainer } from "./ProductContainer"

export default {
    component: ProductContainer,
}

const test = {
    id: "842662a4-6d61-45ed-aad4-6295ca991c05",
    created_at: "2023-05-28T21:30:38+00:00",
    title: "Olixar iPad Pro 12.9 2020 Tempered Glass Screen Protector",
    image: "https://images.mobilefun.co.uk/graphics/300pixelp/79714.jpg",
    description: " 'Lorem Ipsum'",
    price: 15.99,
}

export const Default = {
    args: {
        productData: {
            id: "842662a4-6d61-45ed-aad4-6295ca991c05",
            title: "Olixar iPad Pro 12.9 2020 Tempered Glass Screen Protector",
            image: "https://images.mobilefun.co.uk/graphics/300pixelp/79714.jpg",
            description: "Lorem Ipsum",
            price: 15.99,
            availability: 100, // Add some availability number as it is required in `ProductContainerProps`.
        },
        active: false,
    },
}
