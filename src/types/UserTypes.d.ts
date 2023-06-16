import { UUID } from "crypto"
import { iAdress, iOrder } from "./LogisticTypes"
import { iProduct } from "./ProductTypes"

declare global {
    interface iReview {
        reviewID: UUID
        rating: number
        createdAt: Date
        comment: string
        userID: UUID
        productID: UUID
    }
    
    interface iUserDetails {
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
        userID: string
        wishList: iProduct[] | null
        settings: iSettings
    }
    
    interface iSettings {
        darkMode: boolean
    }
    
    enum iUserRole {
        admin = "admin",
        customer = "customer",
        guest = "guest",
    }
}
