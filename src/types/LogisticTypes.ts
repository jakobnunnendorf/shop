import { UUID } from 'crypto'
import { iProduct } from './ProductTypes'

export enum OrderStatus {
    New = "Received",
    Processing = "Processing",
    Shipped = "Shipped",
    Delivered = "Delivered",
    Cancelled = "Cancelled",
    Returned = "Returned",
    Refunded = "Refunded",
    Failed = "Failed",
}

export interface iAdress{
    street: string,
    houseNumber: number,
    zipCode: number,
    city: string,
    country: string,
}

export interface iOrder {
    orderID: UUID
    orderDate: Date
    userID: UUID
    orderedItems: Array<iProduct>
    totalPrice: number
    status: OrderStatus
    updatedAt: Date
    shippingAddress: iAdress
}