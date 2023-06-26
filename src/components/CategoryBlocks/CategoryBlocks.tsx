import { FiBatteryCharging, FiMoreHorizontal, FiShield, FiSmartphone, FiTablet } from "react-icons/fi"
import { CategoryBlock } from "./CategoryBlock"

const categories = {
    category1: {
        name: "Handyhüllen",
        description: "Schütze dein Handy mit einer Hülle",
        icon: <FiSmartphone className="m-auto h-8 w-8" />,
        color: "bg-cyan-200",
    },
    category2: {
        name: "Panzergläser",
        description: "Hochwertige Panzergläser für optimalen Schutz",
        icon: <FiShield className="m-auto h-8 w-8" />,
        color: "bg-blue-200",
    },
    category3: {
        name: "Ladekabel",
        description: "Hochwertige Ladekabel für zuverlässiges Aufladen",
        icon: <FiBatteryCharging className="m-auto h-8 w-8" />,
        color: "bg-purple-200",
    },
    category4: {
        name: "Tablet Taschen",
        description: "Schütze dein Tablet mit stilvollen Taschen",
        icon: <FiTablet className="m-auto h-8 w-8" />,
        color: "bg-red-200",
    },
    category5: {
        name: "Handy Halterungen",
        description: "Praktische Halterungen für dein Handy",
        icon: <FiSmartphone className="m-auto h-8 w-8" />,
        color: "bg-green-200",
    },
    category6: {
        name: "Sonstiges",
        description: "Verschiedenes Zubehör für deine Geräte",
        icon: <FiMoreHorizontal className="m-auto h-8 w-8" />,
        color: "bg-yellow-100",
    },
}

export function CategoryBlocks() {
    return (
        <div className="text-center">
            <h2 className="mb-8 text-3xl">Kategorien</h2>
            <div className="grid w-full grid-cols-3">
                {Object.values(categories).map((category, index) => (
                    <CategoryBlock key={index} categoryData={category} />
                ))}
            </div>
        </div>
    )
}
