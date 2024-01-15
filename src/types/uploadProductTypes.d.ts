type UploadProductState = 'explain' | 'edit' | 'showcase' | 'preview' | 'ready';

interface UploadProductFormState {
    message: UploadProductState;
    errors: object;
}

type AvailableColor = [ProductColor, TailwindColor];


    