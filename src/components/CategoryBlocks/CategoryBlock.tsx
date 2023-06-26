interface CategoryBlockProps {
    name: string
    description: string
    icon: React.ReactElement
    color: string
}

export function CategoryBlock({ categoryData }: { categoryData: CategoryBlockProps }) {
    return (
        <div
            className={`w-33 flex h-32 flex-col items-center justify-around rounded-xl ${categoryData.color} py-6 text-center`}
        >
            {categoryData.icon}
            <h3>{categoryData.name}</h3>
            {/* <p>{categoryData.description}</p> */}
        </div>
    )
}
