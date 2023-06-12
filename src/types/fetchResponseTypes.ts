import { iProduct } from "./ProductTypes"

export interface iProductFetchResponse {
    code: number
    typee: string
    message: string
    data: iProduct[]
}
