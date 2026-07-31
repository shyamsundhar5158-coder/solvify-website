"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        {/* Logo */}
        <Link href="/">
          <h1 className="text-3xl font-bold cursor-pointer">
            <span className="text-cyan-400">Solvify</span>
            <span className="text-white">.ai</span>
          </h1>
        </Link>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 text-white font-medium">
          <li><a href="#">Home</a></li>
          <li><a href="#services" className="hover:text-cyan-400 transition">Services</a></li>
          <li><a href="#technologies" className="hover:text-cyan-400 transition">Technologies</a></li>
          <li><a href="#products" className="hover:text-cyan-400 transition">Products</a></li>
          <li><a href="#about" className="hover:text-cyan-400 transition">About</a></li>
          <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:block bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl text-white font-semibold transition"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
}
