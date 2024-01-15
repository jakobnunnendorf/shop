import { productCategories } from './fetchProductData';

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

export const valuesFromParamString = (paramString: string): string[][] => {
    const params = new URLSearchParams(paramString);
    const values: string[][] = [];
    for (const [key, value] of params.entries()) {
        values.push([key, value]);
    }
    return values;
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
