import supabase from '@utils/supabase';

type CategoryType = [string, ProductCategory][];
export const productCategories: CategoryType = [
    ['Handyhüllen', 'phone case'],
    ['Panzergläser', 'screen protector'],
    ['Ladekabel', 'charging cable'],
    ['Ladestecker', 'charging adapter'],
    ['Tablet-Taschen', 'tablet case'],
    ['Handy-Halterungen', 'phone holder'],
];

export const fetchProductsFromCategory = async (
    amount: number,
    category?: string
) => {
    if (category) {
        const { data, error } = (await supabase
            .from('products')
            .select('id')
            .eq('category', category)
            .limit(amount)) as SbFetchResponseObject<{ id: UUID }[]>;
        return data;
    } else {
        const { data, error } = (await supabase
            .from('products')
            .select('id')
            .limit(amount)) as SbFetchResponseObject<{ id: UUID }[]>;
        return data;
    }
};

export const fetchProductsByTextSearch = async (
    textSearch: string,
    amount?: number
) => {
    const { data } = (await supabase
        .from('products')
        .select('*')
        .textSearch('title', textSearch)
        .limit(amount ? amount : 30)) as SbFetchResponseObject<Product[]>;
    return data;
};

type ProcessedSearchParams = [string[], number[][], string[]];

export const processSearchParams = (searchParams: {
    [key: string]: string | string[] | undefined;
}): ProcessedSearchParams => {
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
    return [categories, priceFilters, colorFilters];
};

export const filterForColors = (
    productsArray: Product[],
    colorFilters: string[]
): Product[] => {
    return productsArray?.filter((product) => {
        if (colorFilters.length === 0) return true; // keep all
        const productColorKeys = Object.keys(product.imageURLObject);
        const containsTheColour = productColorKeys.some((colorKey) => {
            const colorName =
                product.imageURLObject[colorKey as ColorKey]?.colorName || '';
            return colorFilters.includes(colorName);
        });
        return containsTheColour;
    });
};

export const filterForPrices = (
    productsArray: Product[],
    priceFilters: number[][]
): Product[] => {
    return productsArray?.filter((product) => {
        return priceFilters.some((priceFilter) => {
            return (
                product.price >= priceFilter[0] &&
                product.price <= priceFilter[1]
            );
        });
    });
};

export const getProducts = async (searchParams: {
    [key: string]: string | string[] | undefined;
}) => {
    const [categories, priceFilters, colorFilters] =
        processSearchParams(searchParams);

    const { data: productsArray } = (await supabase
        .from('products')
        .select('*')
        .in('category', categories)
        .limit(30)) as SbFetchResponseObject<Product[]>;

    const productsFilteredForColor = filterForColors(
        productsArray || [],
        colorFilters
    );

    const filteredProducts = filterForPrices(
        productsFilteredForColor || [],
        priceFilters
    );

    return filteredProducts;
};
interface itemPriceObject {
    price: number;
}
export const getSubTotal = async (cart: CartItem[]): Promise<number> => {
    let index = 0;
    let subtotal = 0;
    while (index < cart.length) {
        const productId = cart[index].productId;
        const { data: itemPriceObject } = (await supabase
            .from('products')
            .select('price')
            .eq('id', productId)
            .single()) as SbFetchResponseObject<itemPriceObject>;
        const { price } = itemPriceObject || { price: 0 };
        subtotal += price * cart[index].quantity || 0;
        index++;
    }
    return subtotal;
};

interface imageURLArray {
    imageURLArray: BucketURL<'ProductImages'>[] | string[];
}
export const fetchCartThumbnail = async (cart: CartItem[]): Promise<string> => {
    const firstItemId = cart[0].productId;
    const firstItemColor = cart[0].color;
    const { data } = (await supabase
        .from('products')
        .select(`imageURLObject -> ${firstItemColor} -> imageURLArray`)
        .eq('id', firstItemId)
        .single()) as SbFetchResponseObject<imageURLArray>;
    const { imageURLArray } = data || { imageURLArray: [] };
    const thumbnail = imageURLArray[0];
    return thumbnail;
};

export const fetchImageURLArray = async (
    activeColorKey: ColorKey | undefined,
    productId: UUID | undefined
): Promise<string[]> => {
    if (!productId) return [];
    const { data, error } = (await supabase
        .from('products')
        .select(
            `imageURLObject -> ${
                activeColorKey || 'defaultColor'
            } -> imageURLArray`
        )
        .eq('id', productId)
        .single()) as SbFetchResponseObject<{
        imageURLArray: string[];
    }>;
    if (!data) {
        console.log('Failed to fetch imageURLArray', error);
        return [];
    } else {
        const { imageURLArray } = data;
        return imageURLArray;
    }
};