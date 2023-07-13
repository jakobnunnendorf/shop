import supabase from '@utils/supabase';

export interface modelTree {
    [key: string]: string[];
}
interface resObject {
    compatibleModels: compatibleModels;
}
type resType = { data: resObject[] | null };

export const returnModelTree = async () => {
    const { data } = (await supabase
        .from('products')
        .select('compatibleModels')) as resType;

    const sortCompatibleModelsIntoObject = (
        compatibleModels: resObject[]
    ): modelTree => {
        const models: modelTree = {};
        compatibleModels?.forEach((dataWrapperObject) => {
            const { compatibleModels } = dataWrapperObject;
            compatibleModels?.forEach((device) => {
                if (Object.keys(models).includes(device.brand)) {
                    if (!models[device.brand].includes(device.name)) {
                        models[device.brand].push(device.name);
                    }
                } else {
                    models[device.brand] = [device.name];
                }
            });
        });
        return models;
    };

    return sortCompatibleModelsIntoObject(data as resObject[]);
};
