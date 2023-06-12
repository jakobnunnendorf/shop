import { UUID } from "crypto"
import { iReview } from "./UserTypes"

export interface iProduct {
    id: UUID
    imageURL: string
    title: string
    description: string | null
    category: string
    compatibleBrands: Array<string> | null
    compatibleModels: Array<string> | null
    price: number
    stock: number
    reviews: null | Array<iReview>
    dimensions: {
        width: null | number
        height: null | number
        depth: null | number
    }
}
