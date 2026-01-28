"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b bg-green-100">
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between gap-3">

        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={80}
            height={80}
            className="object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-md font-medium text-gray-700">
          <Link href="/brands" className="hover:text-green-800">
            Brands
          </Link>
          <Link href="/categories" className="hover:text-green-800">
            Categories
          </Link>
        </nav>

        {/* Search */}
        <div className="lg:block flex-1 mx-6">
          <input
            type="text"
            placeholder="Search for gift cards..."
            className="w-full bg-white border rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Auth Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="../login"
            className="bg-green-600 text-white px-4 py-2 rounded font-medium hover:bg-green-700"
          >
            Log in
          </Link>

          <Link
            href="/signup"
            className="bg-gray-300 text-black px-4 py-2 rounded font-medium hover:bg-green-500"
          >
            Sign up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-green-50 border-t px-4 py-4 space-y-4">
          
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-white border rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <nav className="flex flex-col gap-3 text-gray-700 font-medium">
            <Link href="/brands" onClick={() => setOpen(false)}>
              Brands
            </Link>
            <Link href="/categories" onClick={() => setOpen(false)}>
              Categories
            </Link>
          </nav>

          <div className="flex flex-col gap-2">
            <Link
              href='../login'
              onClick={() => setOpen(false)}
              className="bg-green-600 text-white py-2 rounded text-center font-medium"
            >
              Log in
            </Link>

            <Link
              href='../signup'
              onClick={() => setOpen(false)}
              className="bg-gray-300 text-black py-2 rounded text-center font-medium"
            >
              Sign up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
