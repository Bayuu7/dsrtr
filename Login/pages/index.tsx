"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import MotionWrapper from "@/components/MotionWrapper";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/fitur");
  };

  return (
    <MotionWrapper>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 text-white px-4">
        <div className="relative bg-white/10 p-8 rounded-xl shadow-lg w-full max-w-md">
          {/* Tombol Back */}
          <Link href="/" className="absolute top-4 left-4 text-sm text-blue-400 hover:underline">
            ← Kembali
          </Link>

          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 rounded bg-white/20 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 rounded bg-white/20 focus:outline-none"
                required
              />
            </div>

            <div className="flex justify-between text-xs">
              <Link href="#" className="hover:underline">
                Forgot Password
              </Link>
              <Link href="#" className="hover:underline">
                Register
              </Link>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded font-semibold"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </MotionWrapper>
  );
}
