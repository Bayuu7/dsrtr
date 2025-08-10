"use client";
import Link from "next/link";
import MotionWrapper from "@/components/MotionWrapper";

export default function FiturPage() {
  return (
    <MotionWrapper>
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Halaman Fitur</h1>
        <p className="mt-2">Selamat datang! Anda sudah login.</p>
        <Link
          href="/"
          className="mt-4 px-6 py-2 bg-blue-600 rounded hover:bg-blue-700"
        >
          Kembali ke Landing
        </Link>
      </div>
    </MotionWrapper>
  );
}
