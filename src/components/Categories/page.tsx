"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Category = {
  id: number;
  name: string;
  icon: string;
};

export default function CategoriesSection() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data: Category[]) => setCategories(data));
  }, []);

  return (
    <section className="bg-green-50 py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Choose from Different Categories
        </h2>
        <div className="h-1 w-20 bg-green-500 mx-auto rounded-full mb-8"></div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded border border-green-200 p-6 flex flex-col items-center justify-center shadow-sm hover:shadow-green-800 transition cursor-pointer"
            >
              <div className="w-25 h-30 relative mb-4">
                <Image
                  src={cat.icon}
                  alt={cat.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-gray-800 font-medium">{cat.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
