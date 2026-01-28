"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  "/heroimages/hero1.png",
  "/heroimages/hero2.png",
  "/heroimages/hero3.png",
  "/heroimages/hero4.png",
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="
        relative 
        w-full
        overflow-hidden
        h-[160px] 
        sm:h-[260px] 
        md:h-[360px] 
        lg:h-[460px]
      "
    >
      {slides.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-5" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={image}
            alt={`Hero ${index + 1}`}
            fill
            priority={index === 0}
            className="object-fill"
            sizes="80vw"
          />
        </div>
      ))}
      <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`transition-all duration-300 rounded-full
              ${
                idx === current
                  ? "bg-green-600 w-5 h-2"
                  : "bg-white/70 w-2 h-2"
              }
            `}
          />
        ))}
      </div>
    </section>
  );
}
