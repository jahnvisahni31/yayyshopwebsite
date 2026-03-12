import { menuItem } from "@/data/deals";
import Link from "next/link";

export default function CategoriesPage() {
  return (
    <div className="mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">All Categories</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {menuItem.map((cat) => (
            <div
                key={cat.name}
                className="border rounded-lg p-3 shadow hover:shadow-md"
            >
                <h2 className="font-semibold mb-3">{cat.name}</h2>
                <div className="flex flex-col gap-2">
                    {cat.section.map((item) => (
                        <Link
                            key={item.name}
                            href={item.link}
                            className="text-sm text-gray-600 hover:text-blue-600"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
            ))}
        </div>
    </div>
  );
}