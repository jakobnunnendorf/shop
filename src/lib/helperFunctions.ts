import { v4 as uuidv4 } from "uuid"
import supabase from "@utils/supabase"

export async function uploadFile_to_supabase_storage(
    bucket: string,
    pathName: string,
    file: File,
    success_callback?: () => void,
    error_callback?: () => void
) {
        const { data, error } = await supabase.storage.from(bucket).upload(pathName, file)
        console.log(`data: ${data} error: ${error}`)
        if (error && error_callback) {
            error_callback()
        } else if (success_callback) {
            success_callback()
        }
        return data
}


export async function addProduct_to_database(newProduct: iProduct, imageFile?: File) {
    newProduct.id = uuidv4()
    const filePath = `image_${newProduct.title}_${newProduct.id}`
    if (imageFile) {
        await uploadFile_to_supabase_storage("productImageBucket", filePath, imageFile)
        const { data: urlResponse } = await supabase.storage.from("productImageBucket").getPublicUrl(filePath)
        const image_url = urlResponse.publicUrl
        newProduct.imageURL = image_url
    }
    const { data, error } = await supabase.from("products").insert([newProduct as iProduct])
    if (error) {
        console.log(error)
    }

    return data
}

export function extract_product_from_form(formDataObject: FormData, model_array: string[]) {
    const product: iProduct = {
        id: "",
        created_at: new Date(),
        title: formDataObject.get("title") as string,
        imageURL: "",
        description: formDataObject.get("description") as string,
        price: parseFloat(formDataObject.get("price") as string),
        stock: parseInt(formDataObject.get("stock") as string),
        category: formDataObject.get("category") as string,
        compatibleModels: model_array,
        reviews: [],
        dimensions: {
            width: parseInt(formDataObject.get("width") as string),
            height: parseInt(formDataObject.get("height") as string),
            depth: parseInt(formDataObject.get("depth") as string),
        },
    }
    return product
}