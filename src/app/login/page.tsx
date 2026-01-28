"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();

  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [notRegistered, setNotRegistered] = useState(false);

  const sendOtp = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user") || "{}");

    if (!mobile || mobile.length !== 10) {
      alert("Enter a valid 10-digit mobile number");
      return;
    }

    if (!user.mobile || user.mobile !== mobile) {
      setNotRegistered(true);
      return;
    }

    setNotRegistered(false);

    const otpCode = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedOtp(otpCode);
    console.log("Demo OTP:", otpCode);
    alert(`OTP sent (Demo): ${otpCode}`);

    setShowOtp(true);
  };

  const verifyOtp = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (otp === generatedOtp) {
      alert("Login successful 🎉");
      router.push("/dashboard");
    } else {
      alert("Invalid OTP");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-8">

        {/* Heading */}
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-bold text-green-700">
            Login
          </h2>
          <p className="text-sm text-gray-500">
            Login with your registered mobile number 🌱
          </p>
        </div>

        {/* Mobile Form */}
        {!showOtp && !notRegistered && (
          <form onSubmit={sendOtp} className="mt-8 space-y-5">
            <label className="block border border-green-200 rounded-xl px-4 py-3 focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-200 transition">
              <span className="text-sm font-medium text-gray-700">
                Mobile Number
              </span>
              <input
                type="tel"
                placeholder="10-digit mobile number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="mt-1 w-full bg-transparent outline-none text-sm"
              />
            </label>

            <button
              type="submit"
              className="w-full py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 active:scale-95 transition"
            >
              Send OTP
            </button>
          </form>
        )}

        {/* OTP Form */}
        {showOtp && (
          <form onSubmit={verifyOtp} className="mt-8 space-y-5">
            <label className="block border border-green-200 rounded-xl px-4 py-3 focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-200 transition">
              <span className="text-sm font-medium text-gray-700">
                Enter OTP
              </span>
              <input
                type="text"
                placeholder="4-digit OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="mt-1 w-full bg-transparent outline-none text-sm tracking-widest"
              />
            </label>

            <button
              type="submit"
              className="w-full py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 active:scale-95 transition"
            >
              Verify OTP
            </button>
          </form>
        )}

        {/* Not Registered */}
        {notRegistered && (
          <div className="mt-8 text-center space-y-4">
            <p className="text-red-500 font-medium">
              You are not registered yet.
            </p>
            <Link
              href="/signup"
              className="block w-full py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition"
            >
              Go to Signup
            </Link>
          </div>
        )}

        {/* Footer */}
        {!notRegistered && (
          <p className="text-sm text-center text-gray-600 mt-6">
            Don’t have an account?{" "}
            <Link
              href="/signup"
              className="text-green-600 font-semibold hover:underline"
            >
              Sign up
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}
