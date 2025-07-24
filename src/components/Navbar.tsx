"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import useAuth from "../hooks/useAuth";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const router = useRouter();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Technology", href: "/technology" },
    { name: "AI Labs", href: "/ai-labs" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <nav className="bg-black backdrop-blur-sm fixed w-full top-0 z-50 border-b border-gray-800">
      <div className="w-full max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-32 h-9">
              <Image src="/images/smartNavIcon.png" alt="SmartNav.AI" fill />
            </div>
          </Link>

          {/* Desktop Navigation + Login Button in one flex row */}
          <div className="hidden md:flex items-center gap-x-8 ml-10">
            <div className="flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-orange-500 border-b-2 border-orange-500"
                      : "text-white hover:text-orange-400"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            {!user ? (
              <Link
                href="/login"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
              >
                Log In
              </Link>
            ) : (
              <>
                <Link href="/new-task">
                  <button
                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200 mr-2"
                  >
                    + New Task
                  </button>
                </Link>
                <button
                  onClick={() => {
                    const confirmed = window.confirm("Are you sure you want to log out?");
                    if (confirmed) logout();
                  }}
                  className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                >
                  Logout
                </button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 backdrop-blur-sm border-t border-gray-800">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? "text-orange-500 bg-gray-900"
                    : "text-gray-300 hover:text-white hover:bg-gray-700"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {!user ? (
              <Link
                href="/login"
                className="block px-3 py-2 text-base font-medium bg-orange-500 hover:bg-orange-600 text-white rounded-lg mx-3 mt-4 text-center transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Log In
              </Link>
            ) : (
              <>
                <Link href="/new-task">
                  <button
                    className="block w-full px-3 py-2 text-base font-medium bg-orange-500 hover:bg-orange-600 text-white rounded-lg mx-3 mt-4 text-center transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    +
                  </button>
                </Link>
                <button
                  className="block w-full px-3 py-2 text-base font-medium bg-gray-800 hover:bg-gray-700 text-white rounded-lg mx-3 mt-2 text-center transition-colors duration-200"
                  onClick={() => {
                    setIsMenuOpen(false);
                    const confirmed = window.confirm("Are you sure you want to log out?");
                    if (confirmed) logout();
                  }}
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
