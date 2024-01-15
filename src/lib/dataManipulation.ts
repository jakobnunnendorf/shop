type categoryType = [string, ProductCategory][];
export const productCategories: categoryType = [
    ['Handyhüllen', 'phone case'],
    ['Panzergläser', 'screen protector'],
    ['Ladekabel', 'charging cable'],
    ['Ladestecker', 'charging adapter'],
    ['Tablet-Taschen', 'tablet case'],
    ['Handy-Halterungen', 'phone holder'],
];

export const replaceSpecialCharacters = (
    string: string,
    removeBlankSpaces = false
): string => {
    const cleanString = string
        .replace('ü', 'ue')
        .replace('ä', 'ae')
        .replace('ö', 'oe')
        .replace('ß', 'ss')
        .replace('Ü', 'Ue')
        .replace('Ä', 'Ae')
        .replace('Ö', 'Oe')
        .replace('ß', 'Ss');
    if (removeBlankSpaces) {
        return cleanString.replace(' ', '-');
    } else {
        return cleanString;
    }
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

export const eur = (price: number): string => {
    const priceString = price?.toFixed(2) || '0.00';
    return priceString.replace('.', ',') + ' €';
};

export function convertPriceStringToFloat(price: string) {
    const priceString = price.replace(' €', '').replace(',', '.').trim();
    const priceFloat = parseFloat(priceString);
    return priceFloat;
}

export const filterProductArrayByPriceFilters = (
    products: Product[],
    priceFilters: number[][]
) => {
    if (priceFilters.length === 0) return products;
    const filteredProducts = products.filter((product: Product) => {
        return priceFilters.some((priceFilter: number[]) => {
            return (
                product.price >= priceFilter[0] &&
                product.price <= priceFilter[1]
            );
        });
    });
    return filteredProducts;
};

export const filterProductArrayByDeviceFilters = (
    products: Product[],
    deviceFilters: Device[]
) => {
    if (deviceFilters.length === 0) return products;
    // first we filter all products
    const filteredProducts = products.filter((product: Product) => {
        // in the filter we loop through all device filters
        return deviceFilters.some((deviceFilter: Device) => {
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

export const returnDefaultPicture = (product: Product): string => {
    const getDefaultImage = (product: Product) => {
        return product.imageURLObject.defaultColor.imageURLArray[0];
    };
    return getDefaultImage(product);
};

export const extractDefaultImage = (product: Product) => {
    if (product && product.imageURLObject) {
        const defaultImage =
            product.imageURLObject.defaultColor.imageURLArray[0];
        return defaultImage;
    } else {
        return '';
    }
};

export const convertAdressObjectToString = (
    address: Address | undefined | null,
    long = false
): string => {
    if (
        !address ||
        (!address.line1 &&
            !address.line2 &&
            !address.postalCode &&
            !address.city)
    ) {
        return '';
    }
    return `${address.line1 || ''}${
        address.line2 ? ` - ${address.line2 || ''}` : ''
    }${`, ${address.postalCode || ''}`}${` ${address.city || ''}`}${
        long ? `, ${address.state},` : ''
    }${long ? ` ${address.country}` : ''}`;
};
