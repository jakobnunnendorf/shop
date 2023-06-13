import { UUID } from "crypto"
import { iReview } from "./UserTypes"

export interface iProduct {
    id: UUID
    created_at: Date
    title: string
    imageURL: string
    description: string | null
    price: number
    stock: number
    category: string
    compatibleBrands: Array<string> | null
    compatibleModels: Array<string> | null
    reviews: null | Array<iReview>
    dimensions: {
        width: null | number
        height: null | number
        depth: null | number
    }
}
