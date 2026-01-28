"use client";

import { JSX, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer(): JSX.Element {
  const [email, setEmail] = useState<string>("");

  const handleSubscribe = (): void => {
    if (!email) {
      alert("Please enter your email");
      return;
    }

    alert("🎉 Subscribed successfully!");
    setEmail("");
  };

  return (
    <footer className="bg-linear-to-b from-[#0b1220] to-[#060b16] text-gray-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-12 sm:py-16 grid gap-12 md:grid-cols-3">

        {/* Logo + Description */}
        <div className="space-y-4 text-center md:text-left">
          <Image
            src="/logo.svg"
            alt="yayyy logo"
            width={120}
            height={40}
            priority
            className="mx-auto md:mx-0"
          />
          <p className="text-sm text-gray-400 max-w-xs mx-auto md:mx-0">
            Your one-stop destination for digital gift cards.
          </p>
        </div>

        {/* Links */}
        <div className="text-center md:text-left">
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/terms" className="hover:text-white">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/refund" className="hover:text-white">
                Refund Policy
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Subscribe */}
        <div className="text-center md:text-left">
          <h3 className="text-white font-semibold mb-4">
            Perk & Promo Alerts
          </h3>
          <p className="text-sm text-gray-400 mb-4 max-w-sm mx-auto md:mx-0">
            Get updates on new gift cards & exclusive offers.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-0">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="
                w-full px-4 py-3 sm:py-2
                sm:rounded-l-md rounded-md
                bg-[#111827] border border-gray-600
                text-sm focus:outline-none
              "
            />
            <button
              onClick={handleSubscribe}
              className="
                px-5 py-3 sm:py-2
                bg-green-600 text-white text-sm
                rounded-md sm:rounded-l-none sm:rounded-r-md
                hover:bg-green-700 transition
              "
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 text-center text-xs sm:text-sm text-gray-500 py-5 px-4">
        &copy; {new Date().getFullYear()} Paramotor Digital Technology Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
}
