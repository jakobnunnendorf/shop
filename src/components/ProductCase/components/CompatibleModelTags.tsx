import React from 'react';

export default function CompatibleModelTags({
    compatibleModels_array,
}: {
    compatibleModels_array: compatibleModels;
}) {
    const modelNames = compatibleModels_array?.map((model: device) => {
        return model.name;
    });

    const brandSet: Set<string> = new Set();
    compatibleModels_array?.map((model: device) => brandSet.add(model.brand));
    const brands = Array.from(brandSet);

    const tagArray = brands.concat(modelNames ? modelNames : []);

    const modelNameTags = (
        <div className='flex flex-wrap items-start justify-center space-x-1 '>
            {tagArray &&
                tagArray.map((tag: string) => {
                    return (
                        <div
                            key={tag}
                            className='h-fit w-fit rounded-full border px-2 text-[9px] font-bold text-gray-500'
                        >
                            {tag}
                        </div>
                    );
                })}
        </div>
    );
    /*
    const compatibleModelsTags = (
        <div className='flex flex-wrap items-start justify-start flex-grow space-x-1 '>
            {brandNameTags}
            {modelNameTags}
        </div>
    );*/
    return modelNameTags;
}
