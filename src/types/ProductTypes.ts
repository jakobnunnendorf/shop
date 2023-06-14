import { iReview } from "./UserTypes"

export interface iProduct {
    id: string
    created_at: Date
    title: string
    imageURL: any
    description: string | null
    price: number
    stock: number
    category: string
    compatibleBrands: Array<string>
    compatibleModels: Array<string>
    reviews: null | Array<iReview>
    dimensions: {
        width: null | number
        height: null | number
        depth: null | number
    }
}
