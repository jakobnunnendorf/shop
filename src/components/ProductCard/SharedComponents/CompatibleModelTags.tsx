import React from 'react';

export default function CompatibleModelTags({
    compatibleModels_array,
    expanded,
}: {
    compatibleModels_array: compatibleModels;
    expanded?: boolean;
}) {
    const modelNames = compatibleModels_array?.map((model: device) => {
        return model.name;
    });

    const brandSet: Set<string> = new Set();
    compatibleModels_array?.map((model: device) => brandSet.add(model.brand));
    const brands = Array.from(brandSet);

    const tagArray = brands.concat(modelNames ? modelNames : []);

    const modelNameTags = (
        <div
            className={`flex flex-wrap items-start justify-center space-x-1 py-1 ${
                expanded ? ' px-8 py-2' : null
            }`}
        >
            {tagArray &&
                tagArray.map((tag: string) => {
                    return (
                        <div
                            key={tag}
                            className={`h-fit w-fit rounded-full border px-1 ${
                                expanded
                                    ? 'lg:text-md text-sm font-bold'
                                    : 'text-[9px]'
                            }  text-gray-500`}
                        >
                            {tag}
                        </div>
                    );
                })}
        </div>
    );
    return modelNameTags;
}
