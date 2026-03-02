"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 mt-10 items-center px-4">
            <div className="grid grid-cols-3 gap-7 py-3">
                <div>
                    <img src='/image.png' width={100} className="px-2 py-4"/>
                    <h2 className="text-white text-2xl font-semibold mb-5">Gify</h2>
                    <p className="text-sm">
                        Buy gift cards, earn rewards, and enjoy exclusive offers across brands you love.
                    </p>
                </div>
                <div>
                    <h3 className="text-white font-medium mb-4 py-1 items-center">Company Profile</h3>
                    <ul className="flex flex-col gap-3 text-sm">
                        <Link href='/'>About Us</Link>
                        <Link href='/'>Blog</Link>
                        <Link href='/'>Terms of Service</Link>
                        <Link href='/'>Privacy Policy</Link>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white font-medium mb-4 py-1 items-center">Contact</h3>
                    <ul className="flex flex-col gap-2 text-sm">
                        <li>Email: support@gif.com</li>
                        <li>Phone: +919876543210</li>
                        <li>Location: India</li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-700 text-center text-sm py-4">
               @ {new Date().getFullYear()} Gify. All rights reserved.
            </div>
        </footer>
    )
}