'use server';

import { v4 as uuidv4 } from 'uuid';
import supabase from '@utils/supabase';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { replaceSpecialCharacters } from './dataManipulation';

// export async function addProductToDatabase(
//     newProduct: UploadProduct,
//     imageFile?: File
// ) {
//     newProduct.id = uuidv4() as UUID;
//     const filePath = `image_${newProduct.title}_${newProduct.id}`;
//     if (imageFile) {
//         await supabase.storage
//             .from('productImageBucket')
//             .upload(filePath, imageFile);
//         const { data: urlResponse } = await supabase.storage
//             .from('productImageBucket')
//             .getPublicUrl(filePath);
//         const imageURL =
//             urlResponse.publicUrl as BucketURL<'ProductImages'>;
//         newProduct.imageURLObject.defaultColor.imageURLArray.push(imageURL);
//     }
//     const { data } = await supabase
//         .from('products')
//         .insert([newProduct as UploadProduct]);

//     return data;
// }

export async function uploadFileToSupabaseStorage(
    bucket: BucketName,
    pathName: string,
    file: File
) {
    const { data } = await supabase.storage.from(bucket).upload(pathName, file);
    return data;
}

// const uploadAndReplaceImage = async () => {
//     // iterate through each image in the imageURL array of each color
//     const copyOfNewProduct = { ...newProduct };

//     const productId = uuidv4() as UUID;
//     copyOfNewProduct.id = productId;
//     const colorKeys = Object.keys(
//         copyOfNewProduct.imageURLObject
//     ) as ColorKey[];
//     const ColorsThatAreNotNullAndHaveAnImage = colorKeys.filter((color) => {
//         // create array of all keys where the color is not null
//         const colorObject = newProduct.imageURLObject[color];
//         return colorObject !== null && colorObject.imageURLArray.length > 0;
//     });

//     const uploadAndReplaceImageForColor = async (
//         colorKey: ColorKey,
//         newProduct: UploadProductDraft
//     ) => {
//         const imageArray =
//             newProduct.imageURLObject?[colorKey]?.imageURLArray || [];

//         let imageIndex = 0;
//         while (imageIndex < imageArray.length) {
//             const previewURL = imageArray[imageIndex];
//             const file = fileStorage[previewURL];
//             const colorName: ColorKey =
//                 newProduct.imageURLObject[colorKey]?.colorName || '';
//             const filePath: ProductFilePath = replaceSpecialCharacters(
//                 `${newProduct.title}-${productId}/${colorName}/${imageIndex}`,
//                 true
//             );
//             await supabase.storage
//                 .from('productImageBucket')
//                 .upload(filePath, file);
//             const { data } = await supabase.storage
//                 .from('productImageBucket')
//                 .getPublicUrl(filePath);
//             const publicUrl = data?.publicUrl;
//             imageArray[imageIndex] = publicUrl;
//             imageIndex++;
//         }
//     };
//     for (const colorKey of ColorsThatAreNotNullAndHaveAnImage) {
//         await uploadAndReplaceImageForColor(colorKey);
//     }
//     return copyOfNewProduct;
// };
interface FormState {
    message: string;
    errors: {};
}
export const uploadProduct = async (
    prevState: UploadProductFormState,
    formData: FormData
): Promise<UploadProductFormState> => {
    'use server';
    if (prevState.message === 'explain') return { message: 'edit', errors: {} };
    console.log('upload initiated');
    console.log(formData);
    console.log(prevState);
    return { message: 'upload initiated', errors: {} };
    // const product = await uploadAndReplaceImage();

    // const { error } = await supabase.from('products').insert([product]);
    // if (!error) {
    //     revalidatePath('/admin/produkte');
    //     redirect('/admin/produkte');
    // }
};
