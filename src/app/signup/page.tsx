"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";

interface SignupForm {
  name: string;
  surname: string;
  mobile: string;
  password: string;
}

export default function SignupPage() {
  const [form, setForm] = useState<SignupForm>({
    name: "",
    surname: "",
    mobile: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Signup successful 🎉");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-8">

        {/* Heading */}
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-bold text-green-700">
            Create Account
          </h2>
          <p className="text-sm text-gray-500">
            Join us and get started 🌱
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">

          {/* First Name */}
          <label className="block border border-green-200 rounded-xl px-4 py-3 focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-200 transition">
            <span className="text-sm font-medium text-gray-700">
              First Name
            </span>
            <input
              name="name"
              placeholder="Enter your first name"
              className="mt-1 w-full bg-transparent outline-none text-sm"
              onChange={handleChange}
            />
          </label>

          {/* Surname */}
          <label className="block border border-green-200 rounded-xl px-4 py-3 focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-200 transition">
            <span className="text-sm font-medium text-gray-700">
              Surname
            </span>
            <input
              name="surname"
              placeholder="Enter your surname"
              className="mt-1 w-full bg-transparent outline-none text-sm"
              onChange={handleChange}
            />
          </label>

          {/* Mobile */}
          <label className="block border border-green-200 rounded-xl px-4 py-3 focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-200 transition">
            <span className="text-sm font-medium text-gray-700">
              Mobile Number
            </span>
            <input
              name="mobile"
              type="tel"
              placeholder="10-digit mobile number"
              className="mt-1 w-full bg-transparent outline-none text-sm"
              onChange={handleChange}
            />
          </label>

          {/* Password */}
          <label className="block border border-green-200 rounded-xl px-4 py-3 focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-200 transition">
            <span className="text-sm font-medium text-gray-700">
              Password
            </span>
            <input
              name="password"
              type="password"
              placeholder="Minimum 6 characters"
              className="mt-1 w-full bg-transparent outline-none text-sm"
              onChange={handleChange}
            />
          </label>

          {/* Button */}
          <button
            type="submit"
            className="w-full mt-6 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 active:scale-95 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-green-600 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
