interface CategoryBlockProps {
    name: string;
    description: string;
    icon: React.ReactElement;
    style: string;
}

export function CategoryBlock({
    categoryData,
}: {
    categoryData: CategoryBlockProps;
}) {
    return (
        <div
            className={`flex aspect-square flex-col items-center justify-around rounded-xl border-5  ${categoryData.style} py-6 text-center`}
        >
            <div className='space-y-2 font-bold'>
                {categoryData.icon}
                <h3>{categoryData.name}</h3>
                {/* <p>{categoryData.description}</p> */}
            </div>
        </div>
    );
}
