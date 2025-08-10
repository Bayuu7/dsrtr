"use client";
import Link from "next/link";
import RainEffect from "@/components/RainEffect";
import Header from "@/components/Header";
import FeatureGrid from "@/components/FeatureGrid";
import MotionWrapper from "@/components/MotionWrapper";

export default function LandingPage() {
  return (
    <MotionWrapper>
      <div className="relative min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
        <RainEffect />
        <Header />
        <main className="relative z-10 flex flex-col items-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mt-10">DSRT</h1>
          <p className="text-lg md:text-xl mt-2">Digital Smart Revise Technology</p>

          <Link
            href="/login"
            className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold"
          >
            Coba Sekarang
          </Link>

          <section className="max-w-4xl w-full mt-12">
            <h2 className="text-2xl font-bold">Fitur Unggulan</h2>
            <FeatureGrid />
          </section>
        </main>
      </div>
    </MotionWrapper>
  );
}
