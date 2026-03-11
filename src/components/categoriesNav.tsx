'use client';

import Link from "next/link";
import { useState } from "react";
import { menuItem } from "@/data/deals";
import { FaHome } from "react-icons/fa";

export default function CategoriesNav() {
    const [active, setActive] = useState<string | null>(null);
  
    return (
        <div
            className="w-full bg-gray-900 text-white relative items-center"
            onMouseLeave={() => setActive(null)}
        >
            <div className="flex justify-center  px-4 py-2 ">
                <div className="flex items-center gap-5 ">
                    <Link href="/" className="bg-blue-400 p-3 hover:bg-blue-500">
                        <FaHome />
                    </Link>
                    {menuItem.map((cat) => (
                        <div
                            key={cat.name}
                            onMouseEnter={() => setActive(cat.name)}
                            className="relative  items-center justify-between"
                        >
                            <span className="cursor-pointer text-sm hover:text-cyan-400 gap-2">
                                {cat.name}
                            </span>
                        </div>
                    ))}
                    {active && (
                        <div className="absolute top-full left-0 mt-2 bg-white text-black shadow-xl z-20">
                            <div className="max-w-6xl mx-auto px-2 py-3">
                                {menuItem
                                    .filter((cat) => cat.name === active)
                                    .map((cat) => (
                                        <div key={cat.name}>
                                            <div className="flex flex-col">
                                                {cat.section.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    href={item.link}
                                                    className="text-sm text-gray-600 hover:underline"
                                                >
                                                    {item.name}
                                                </Link>
                                                ))}
                                            </div>
                                        </div>
                                ))}

                            </div>
                        </div>
                    )}

                </div>
                <div className="bg-cyan-500 py-2 text-sm font-semibold hover:bg-cyan-600 gap-2 px-2">
                    <Link
                        href="/consumer/gift-cards"
                        className="bg-cyan-500 px-2 py-2 text-sm font-semibold hover:bg-cyan-600 gap-2"
                    >
                    All E-Gift Cards
                    </Link>
                </div>

            </div>
        </div>
    );
}