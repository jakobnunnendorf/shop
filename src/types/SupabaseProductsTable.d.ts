type productsFetchData = product[] | product | null;

interface product {
    id: UUID;
    created_at: created_at;
    title: string;
    description: string | null;
    price: number;
    stock: number;
    category: productCategory;
    compatibleModels: compatibleModels;
    reviews: product_review_reference_array;
    dimensions: dimensions | null;
    imageURL_object: imageURL_object;
}

type productCategory =
    | 'phone case'
    | 'screen protector'
    | 'charging cable'
    | 'charging adapter'
    | 'tablet case'
    | 'phone holder';

type compatibleModels = device[] | null;

interface device{
    name: string;
    brand: string;
    deviceCategory: deviceCategory;
}

type deviceCategory = 'phone' | 'tablet' | 'laptop' | 'smartwatch' | 'earbuds' | 'headphones' | 'speaker';

type productColor =
    | 'schwarz'
    | 'weiß'
    | 'rot'
    | 'blau'
    | 'grün'
    | 'gelb'
    | 'lila'
    | 'rosa'
    | 'orange'
    | 'braun'
    | 'grau'
    | 'gold'
    | 'silber'
    | 'transparent';

type tailwind_productColor =
    | 'black'
    | 'white'
    | 'red-500'
    | 'blue-500'
    | 'green-500'
    | 'yellow-500'
    | 'purple-500'
    | 'pink-500'
    | 'orange-500'
    | 'gray-500'
    | 'gold-500'
    | 'silver-500'
    | 'none';

type ProductInColor = {
    imageURL_array: bucketURL<ProductImageBucket>[] | string[]; //TODO: remove string array after testing
    color_name: productColor | null;
    tailwind_color: tailwind_productColor | null;
};

interface imageURL_object {
    default_color: ProductInColor;
    color_2: ProductInColor | null;
    color_3: ProductInColor | null;
    color_4: ProductInColor | null;
    color_5: ProductInColor | null;
    color_6: ProductInColor | null;
}

type product_review_reference_array = string[];

type dimensions = {
    width: number;
    height: number;
    depth: number;
};
