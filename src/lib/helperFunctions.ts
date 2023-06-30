import { useContext } from 'react'
import { v4 as uuidv4 } from "uuid"
import { CartContext } from '@globalState/CartContext'
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
    console.log('addProduct_to_database');
    newProduct.id = uuidv4();
    const filePath = `image_${newProduct.title}_${newProduct.id}`;
    if (imageFile) {
        console.log('image exists');
        const { data: storageData, error: storageError } =
            await supabase.storage
                .from('productImageBucket')
                .upload(filePath, imageFile);
        console.log(JSON.stringify(storageData, null, 2));
        console.log(JSON.stringify(storageError, null, 2));
        const { data: urlResponse } = await supabase.storage
            .from('productImageBucket')
            .getPublicUrl(filePath);
        const image_url = urlResponse.publicUrl;
        newProduct.imageURL = image_url;
    } else {
        console.log('no image file');
    }
    const { data, error } = await supabase
        .from('products')
        .insert([newProduct as iProduct]);
    if (error) {
        console.log(JSON.stringify(error, null, 2));
    }
    return data
}

export function extract_product_from_form(formDataObject: FormData, model_array: string[]) {
    const product: iProduct = {
        id: '',
        created_at: new Date(),
        title: formDataObject.get('title') as string,
        imageURL: '',
        description: formDataObject.get('description') as string,
        price: formDataObject.get('price') as string,
        stock: parseInt(formDataObject.get('stock') as string),
        category: formDataObject.get('category') as string,
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


export function AddToCart(product: any, cartItems: any, setCartItems: any) {
    const already_in_cart =
        cartItems.find((item: any) => {
            return item.product.id === product.id;
        }) !== undefined;
    // const replace_array = cartItems.map();
    if (already_in_cart) {
        setCartItems((prev_cartItems: any) => {
            return prev_cartItems.map((cartItem: any) => {
                if (cartItem.product.id === product.id) {
                    return {
                        product: { ...cartItem.product },
                        quantity: cartItem.quantity + 1,
                    };
                } else {
                    return cartItem;
                }
            });
        });
    } else {
        setCartItems([...cartItems, { product, quantity: 1 }]);
    }
    console.log(cartItems);
}