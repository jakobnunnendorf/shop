import { v4 as uuidv4 } from "uuid"
import supabase from "@utils/supabase"

interface uploadProduct {
    id: UUID;
    title: string;
    description: string;
    price: number;
    stock: number;
    category: productCategory;
    compatibleModels: compatibleModels;
    reviews: string[];
    dimensions: dimensions;
    imageURL_object: imageURL_object;
}


export async function uploadFile_to_supabase_storage(
    bucket: string,
    pathName: string,
    file: File,
    success_callback?: () => void,
    error_callback?: () => void
) {
        const { data, error } = await supabase.storage.from(bucket).upload(pathName, file)
        if (error && error_callback) {
            error_callback()
        } else if (success_callback) {
            success_callback()
        }
        return data
}


export async function addProduct_to_database(
    newProduct: uploadProduct,
    imageFile?: File
) {
    newProduct.id = uuidv4() as UUID;
    const filePath = `image_${newProduct.title}_${newProduct.id}`;
    if (imageFile) {
        const { data: storageData, error: storageError } =
            await supabase.storage
                .from('productImageBucket')
                .upload(filePath, imageFile);
        const { data: urlResponse } = await supabase.storage
            .from('productImageBucket')
            .getPublicUrl(filePath);
        const image_url = urlResponse.publicUrl as bucketURL<'ProductImageBucket'>;
        newProduct.imageURL_object.default_color.imageURL_array.push(image_url);
    } 
    const { data } = await supabase
        .from('products')
        .insert([newProduct as uploadProduct]);
   
    return data;
}

export function extract_product_from_form(formDataObject: FormData, model_array: string[]) {
    const product: uploadProduct = {
        created_at: new Date(),
        title: formDataObject.get('title') as string,
        imageURL: '',
        description: formDataObject.get('description') as string,
        price: parseFloat(formDataObject.get('price') as string) as number,
        stock: parseInt(formDataObject.get('stock') as string),
        category: formDataObject.get('category') as productCategory,
        compatibleModels: model_array.join(', '),
        reviews: '',
        dimensions: {
            width: parseInt(formDataObject.get('width') as string),
            height: parseInt(formDataObject.get('height') as string),
            depth: parseInt(formDataObject.get('depth') as string),
        },
    };
    return product
}

export function convert_price_string_to_float(price: string) {
    const price_string = price.replace(' €', '').replace(',', '.').trim();
    const price_float = parseFloat(price_string);
    return price_float;
}

export const extractDefaultImage = (product: product) => {
    if (product && product.imageURL_object) {
        const default_image = product.imageURL_object.default_color.imageURL_array[0];
        return default_image;
    } else {
        return '';
    }
};

export const eur = (price: number): string => {
    return String(price).replace('.', ',') + ' €';
}

export const returnDefaultPicture = (product:product): string => {
    const getDefaultImage = (product: product) => {
        return product.imageURL_object.default_color.imageURL_array[0];
    };
    return getDefaultImage(product);
};