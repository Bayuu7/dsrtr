import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-6 text-white relative z-10">
      <div className="text-2xl font-bold">DSRT</div>
      {/* Tidak ada tombol login di Landing */}
    </header>
  );
}
