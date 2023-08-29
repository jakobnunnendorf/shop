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
            .limit(amount);
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
    const { data, error } = await supabase.storage
        .from(bucket)
        .upload(pathName, file);
    if (error && error_callback) {
        error_callback();
    } else if (success_callback) {
        success_callback();
    }
    return data;
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
        const image_url =
            urlResponse.publicUrl as bucketURL<'ProductImageBucket'>;
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
        const default_image =
            product.imageURL_object.default_color.imageURL_array[0];
        return default_image;
    } else {
        return '';
    }
};

export const eur = (price: number): string => {
    return String(price).replace('.', ',') + ' €';
};

export const returnDefaultPicture = (product: product): string => {
    const getDefaultImage = (product: product) => {
        return product.imageURL_object.default_color.imageURL_array[0];
    };
    return getDefaultImage(product);
};

export const getProducts = async (searchParams: {
    [key: string]: string | string[] | undefined;
}) => {
    const categories: string[] = [];
    switch (typeof searchParams['category']) {
        case 'string':
            categories.push(searchParams['category']);
            break;
        case 'object':
            searchParams['category'].forEach((category) =>
                categories.push(category)
            );
        case 'undefined':
            productCategories.forEach((productCategory) =>
                categories.push(productCategory[1])
            );
            break;
    }
    let priceFilters: number[][] = [];
    switch (typeof searchParams['price']) {
        case 'string':
            priceFilters = [
                searchParams['price'].split('-').map((price) => Number(price)),
            ];
            break;
        case 'object':
            priceFilters = searchParams['price'].map((priceFilter) =>
                priceFilter.split('-').map((price) => Number(price))
            );
            break;
        case 'undefined':
            priceFilters = [[0, 100000]];
            break;
    }
    let colorFilters: string[] = [];
    switch (typeof searchParams['color']) {
        case 'string':
            colorFilters = [searchParams['color']];
            break;
        case 'object':
            colorFilters = searchParams['color'];
            break;
        case 'undefined':
            colorFilters = [];
            break;
    }
    const { data } = (await supabase
        .from('products')
        .select('*')
        .in('category', categories)
        .limit(30)) as sb_fetchResponseObject<product[]>;

    const applyColourFilter = data?.filter((product) => {
        if (searchParams['color'] === undefined) return true;
        const colorKeys = Object.keys(product.imageURL_object);
        const containsTheColour = colorKeys.some((colorKey) => {
            const colorName =
                product.imageURL_object[colorKey]?.color_name || '';
            return colorFilters.includes(colorName);
        });
        return containsTheColour;
    });

    const products = applyColourFilter?.filter((product) => {
        return priceFilters.some((priceFilter) => {
            return (
                product.price >= priceFilter[0] &&
                product.price <= priceFilter[1]
            );
        });
    });

    return products;
};

export const paramString = (searchParams: {
    [key: string]: string | string[] | undefined;
}): string => {
    const sortedParams: string[][] = [];
    for (const key in searchParams) {
        if (searchParams[key] !== undefined) {
            const param = searchParams[key];
            if (typeof param === 'string') {
                sortedParams.push([key, param]);
            }
            if (Array.isArray(param)) {
                param.forEach((param) => sortedParams.push([key, param]));
            }
        }
    }

    const params = new URLSearchParams(sortedParams);
    const searchParamString =
        params.toString().length > 0 ? params.toString() : '';

    return searchParamString;
};

export const valuesFromParamString = (paramString: string): string[][] => {
    const params = new URLSearchParams(paramString);
    const values: string[][] = [];
    for (const [key, value] of params.entries()) {
        values.push([key, value]);
    }
    return values;
};

export const convertCategoryToGerman = (category: string): string => {
    const categoryInGerman = productCategories.find((productCategory) => {
        if (productCategory[1] === category) {
            return productCategory[0];
        }
    });
    if (!categoryInGerman) throw new Error('Category not found');
    return categoryInGerman[0];
};

export const replaceSpecialCharacters = (string: string): string => {
    return string
        .replace('ä', 'ae')
        .replace('ö', 'oe')
        .replace('ü', 'ue')
        .replace('ß', 'ss')
};