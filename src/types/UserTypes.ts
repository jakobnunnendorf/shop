import { UUID } from "crypto"
import { iAdress, iOrder } from "./LogisticTypes"
import { iProduct } from "./ProductTypes"

export interface iReview {
    reviewID: UUID
    rating: number
    createdAt: Date
    comment: string
    userID: UUID
    productID: UUID
}

export interface iUserDetails {
    avatar: null | string
    orders: iOrder[] | null
    bewertungen: iReview | null
    email: string
    firstName: string
    lastName: null | string
    password: string
    defaultShippingAdress: null | iAdress
    defaultBillingAdress: null | iAdress
    phoneNumber: null | string
    userID: UUID
    wishList: iProduct[] | null
    settings: iSettings
}

export interface iSettings {
    darkMode: boolean
}

export enum iUserRole {
    admin = "admin",
    customer = "customer",
    guest = "guest",
}
