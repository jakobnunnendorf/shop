import { v4 as uuidv4 } from "uuid"
import supabase from '@utils/supabase';

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

export const toggleQueryParam = (
    currentUrl: string,
    key: string,
    value: string
): string => {
    const url = new URL(currentUrl);
    const params = new URLSearchParams(url.search);

    if (params.getAll(key).includes(value)) {
        const removeValue = params.getAll(key).filter((v) => v !== value);
        params.delete(key);
        removeValue.forEach((v) => params.append(key, v));
    } else {
        params.append(key, value);
    }

    url.search = params.toString();
    return url.toString();
};

export const fetchProductsFromCategory = async (
    amount: number,
    category?: string
) => {
    if (category) {
        const { data } = await supabase
            .from('products')
            .select('*')
            .eq('category', category)
            .limit(amount );
        return data as product[];
    } else {
        const { data } = await supabase
            .from('products')
            .select('*')
            .limit(amount);
        return data as product[];
    }
};

type categoryType = [string, productCategory][];
export const productCategories: categoryType = [
    ['Handyhüllen', 'phone case'],
    ['Panzergläser', 'screen protector'],
    ['Ladekabel', 'charging cable'],
    ['Ladestecker', 'charging adapter'],
    ['Tablet-Taschen', 'tablet case'],
    ['Handy-Halterungen', 'phone holder'],
];

export const fetchProductsByTextSearch = async (
    textSearch: string,
    amount?: number
) => {
    const { data } = (await supabase
        .from('products')
        .select('*')
        .textSearch('title', textSearch)
        .limit(amount ? amount : 30)) as sb_fetchResponseObject<product[]>;
    return data;
};

export const filterProductArrayByDeviceFilters = (
    products: product[],
    deviceFilters: device[]
) => {
    if (deviceFilters.length === 0) return products;
    // first we filter all products
    const filteredProducts = products.filter((product: product) => {
        // in the filter we loop through all device filters
        return deviceFilters.some((deviceFilter: device) => {
            // if the device filter has no name, we only filter by brand
            if (deviceFilter.name.length === 0) {
                return product.compatibleModels?.some((compatibleDevice) => {
                    return compatibleDevice.brand === deviceFilter.brand;
                });
            } else {
                return product.compatibleModels?.some((compatibleDevice) => {
                    return (
                        compatibleDevice.brand === deviceFilter.brand &&
                        compatibleDevice.name === deviceFilter.name
                    );
                });
            }
        });
    });
    return filteredProducts;
};

export const filterProductArrayByPriceFilters = (
    products: product[],
    priceFilters: number[][]
) => {
    if (priceFilters.length === 0) return products;
    const filteredProducts = products.filter((product: product) => {
        return priceFilters.some((priceFilter: number[]) => {
            return (
                product.price >= priceFilter[0] &&
                product.price <= priceFilter[1]
            );
        });
    });
    return filteredProducts;
};


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