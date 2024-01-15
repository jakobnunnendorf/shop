import { TailwindColorEnum } from 'src/enums';

type ProductsFetchData = Product[] | Product | null;

interface Product {
    id: UUID;
    createdAt: CreatedAt;
    title: string;
    description: string | null;
    price: number;
    stock: number;
    category: ProductCategory;
    compatibleModels: CompatibleModels;
    reviews: ProductReviewReferenceArray;
    dimensions: Dimensions | null;
    imageURLObject: ImageURLObject;
}

interface UploadProduct {
    id: UUID | null;
    title: string;
    description: string | null;
    price: number;
    stock: number;
    category: ProductCategory;
    compatibleModels: CompatibleModels | null;
    imageURLObject: ImageURLObject;
}

interface UploadProductDraft {
    id?: UUID;
    title?: string;
    description?: string;
    price?: number;
    stock?: number;
    category?: ProductCategory;
    compatibleModels?: CompatibleModels;
    imageURLObject?: ImageURLObject;
}

type ProductCategory =
    | 'phone case'
    | 'screen protector'
    | 'charging cable'
    | 'charging adapter'
    | 'tablet case'
    | 'phone holder';

type CompatibleModels = Device[] | null;

interface Device {
    name: string;
    brand: string;
    deviceCategory: DeviceCategory;
}

type DeviceCategory =
    | 'phone'
    | 'tablet'
    | 'laptop'
    | 'smartwatch'
    | 'earbuds'
    | 'headphones'
    | 'speaker'
    | '';

type ProductColor = keyof typeof TailwindColorEnum;

type TailwindColor =
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
    imageURLArray: BucketURL<'ProductImages'>[] | string[]; //TODO: remove string array after testing
    colorName: ProductColor | null;
    tailwindColor: TailwindColor | null;
};

interface ImageURLObject extends Record<ColorKey, ProductInColor | null> {
    defaultColor: ProductInColor;
    color2: ProductInColor | null;
    color3: ProductInColor | null;
    color4: ProductInColor | null;
    color5: ProductInColor | null;
    color6: ProductInColor | null;
}

type ProductReviewReferenceArray = UUID[];

type Dimensions = {
    width: number;
    height: number;
    depth: number;
};

type ProductStatus =
    | 'showcase'
    | 'preview'
    | 'edit'
    | 'explain'
    | 'ready'
    | 'uploading'
    | 'error';

type ColorKey =
    | 'defaultColor'
    | 'color2'
    | 'color3'
    | 'color4'
    | 'color5'
    | 'color6';
