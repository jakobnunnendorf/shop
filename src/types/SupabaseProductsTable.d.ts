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

interface uploadProduct {
    id: UUID | null;
    title: string;
    description: string | null;
    price: number;
    stock: number;
    category: productCategory;
    compatibleModels: compatibleModels | null;
    reviews: product_review_reference_array | null;
    dimensions: dimensions | null;
    imageURL_object: imageURL_object | null;
}

interface uploadProductDraft {
    id?: UUID | null;
    title: string | null;
    description: string | null;
    price: number | null;
    stock: number | null;
    category: productCategory | null;
    compatibleModels: compatibleModels | null;
    reviews: product_review_reference_array | null;
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

interface device {
    name: string;
    brand: string;
    deviceCategory: deviceCategory;
}

type deviceCategory =
    | 'phone'
    | 'tablet'
    | 'laptop'
    | 'smartwatch'
    | 'earbuds'
    | 'headphones'
    | 'speaker'
    | '';

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
    | 'silber'
    | 'transparent';

type tailwind_productColor =
    | 'bg-black'
    | 'bg-white'
    | 'bg-red-500'
    | 'bg-blue-500'
    | 'bg-green-500'
    | 'bg-yellow-500'
    | 'bg-purple-500'
    | 'bg-pink-500'
    | 'bg-orange-500'
    | 'bg-[#965a3e]'
    | 'bg-gray-500'
    | 'bg-slate-300'
    | 'border';

type ProductInColor = {
    imageURL_array: bucketURL<'ProductImageBucket'>[] | string[]; //TODO: remove string array after testing
    color_name: productColor | null;
    tailwind_color: tailwind_productColor | null;
};

interface imageURL_object extends Record<ColorKey, ProductInColor | null> {
    default_color: ProductInColor;
    color_2: ProductInColor | null;
    color_3: ProductInColor | null;
    color_4: ProductInColor | null;
    color_5: ProductInColor | null;
    color_6: ProductInColor | null;
}

type product_review_reference_array = UUID[];

type dimensions = {
    width: number;
    height: number;
    depth: number;
};

type productStatus =
    | 'showcase'
    | 'preview'
    | 'edit'
    | 'explain'
    | 'ready'
    | 'uploading'
    | 'error';

type colorKey =
    | 'default_color'
    | 'color_2'
    | 'color_3'
    | 'color_4'
    | 'color_5'
    | 'color_6';