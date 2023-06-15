import supabase from "@utils/supabase"
import { v4 as uuidv4 } from "uuid"

export async function uploadFile_to_supabase_storage(
    bucket: enum_Storage_bucket,
    pathName: string,
    file: File,
    allowed_file_types: enum_File_type[] = [],
    success_callback?: () => void,
    error_callback?: () => void
) {
    if (
        // checks if one is empty or not allowed
        file.size === 0 ||
        pathName.length === 0 ||
        bucket.length === 0 ||
        (allowed_file_types.length > 0 ? (allowed_file_types.includes(file.type) ? true : false) : true)
    ) {
        console.log("uploadFile: missing or incorrect type of parameters")
        return
    } else {
        const { data, error } = await supabase.storage.from(bucket).upload(pathName, file)
        console.log(`data: ${data} error: ${error}`)
        if (error && error_callback) {
            error_callback()
        } else if (success_callback) {
            success_callback()
        }
        return data
    }
}


export async function addProduct_to_database(newProduct: iProduct, imageFile?: File) {
    newProduct.id = uuidv4()
    const filePath = `image_${newProduct.title}_${newProduct.id}`
    if (imageFile) {
        await uploadFile_to_supabase_storage(
            enum_Storage_bucket.ProductImageBucket,
            filePath,
            imageFile,
            [enum_File_type['image/jpeg'], enum_File_type['image/png'], enum_File_type['image/gif'], enum_File_type['image/svg+xml']]
        )
        const { data: urlResponse } = await supabase.storage.from(enum_Storage_bucket.ProductImageBucket).getPublicUrl(filePath)
        const image_url = urlResponse.publicUrl
        newProduct.imageURL = image_url
    }
    const { data, error } = await supabase.from("products").insert([newProduct as iProduct])
    if (error) {
        console.log(error)
    }

    return data
}

export function extract_product_from_form(formDataObject: FormData, brand_array: string[], model_array: string[]) {
    const product: iProduct = {
        id: "",
        created_at: new Date(),
        title: formDataObject.get("title") as string,
        imageURL: "",
        description: formDataObject.get("description") as string,
        price: parseFloat(formDataObject.get("price") as string),
        stock: parseInt(formDataObject.get("stock") as string),
        category: formDataObject.get("category") as string,
        compatibleBrands: brand_array,
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