import { UUID } from 'crypto'

enum OrderStatus {
    New = "Received",
    Processing = "Processing",
    Shipped = "Shipped",
    Delivered = "Delivered",
    Cancelled = "Cancelled",
    Returned = "Returned",
    Refunded = "Refunded",
    Failed = "Failed",
}

interface iAdress{
    street: string,
    houseNumber: number,
    zipCode: number,
    city: string,
    country: string,
}

interface iOrder {
    orderID: UUID
    orderDate: Date
    userID: UUID
    orderedItems: Array<iProduct>
    totalPrice: number
    status: OrderStatus
    updatedAt: Date
    shippingAddress: iAdress
}