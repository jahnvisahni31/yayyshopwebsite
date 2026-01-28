"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Deal = {
  id: string;
  title: string;
  image: string;
  discount: string;
};


export default function DealsSection() {
  const [deals, setDeals] = useState<Deal[]>([]);

  useEffect(() => {
    fetch("/api/cards")
      .then((res) => res.json())
      .then((data) => setDeals(data));
  }, []);

  return (
    <section className="bg-green-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-green-600 flex items-center gap-2">
            🎁 Steal the Deal
          </h2>
          <p className="text-gray-600 mt-2">
            Unwrap unbeatable discounts and grab your favorite gift cards before they're gone!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {deals.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-green-200 overflow-hidden hover:shadow-lg transition"
            >
              <div className="relative h-40">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {item.discount}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-sm mb-1">
                  {item.title}
                </h3>
                <p className="text-green-600 text-sm font-medium">
                  {item.discount} - Grab the Deal Today!
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
