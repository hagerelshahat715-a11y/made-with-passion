'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useCart } from "@/app/context/CartContext";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const closeMenu = () => setIsOpen(false);

  const links = [
    { name: 'الرئيسية', path: '/' },
    { name: 'المنتجات', path: '/products' },
    { name: 'عن المتجر', path: '/about' },
    { name: 'تواصل معنا', path: '/contact' },
  ];

  const linkStyle = (path: string) =>
    `font-bold text-[17px] transition-colors duration-200 pb-1 whitespace-nowrap ${
      isMounted && pathname === path
        ? 'text-[#D84370] border-b-2 border-[#D84370]'
        : 'text-gray-600 hover:text-[#D84370]'
    }`;

  return (
    <nav
      dir="rtl"
      className="sticky top-0 z-50 bg-white text-gray-800 shadow-sm border-b border-[#FCE4EC] px-4 md:px-8 py-4 w-full h-[105px] flex items-center justify-between"
    >
      {/* اللوجو */}
      <div className="flex items-center">
        <Link href="/" onClick={closeMenu}>
          <img
            src="/images/products/Logo.png"
            alt="made-with-passion-logo"
            className="w-16 h-16 md:w-20 md:h-20 object-contain cursor-pointer"
          />
        </Link>
      </div>

     
      <ul className="hidden md:flex gap-[30px] xl:gap-[50px] list-none m-0 p-0 items-center">
        {links.map((link) => (
          <li key={link.path}>
            <Link href={link.path} className={linkStyle(link.path)}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

     
      <div className="hidden md:flex items-center">
        <button
          onClick={() => setIsCartOpen(true)}
          className="relative bg-[#FFF0F3] text-[#D84370] hover:bg-[#FCE4EC] px-4 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 transition shadow-sm border border-[#FCE4EC]"
        >
          <ShoppingBag size={18} />
          <span>السلة</span>

          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#D84370] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-extrabold shadow-md">
              {totalItems}
            </span>
          )}
        </button>
      </div>

      {/* أزرار الموبايل */}
      <div className="md:hidden flex items-center gap-2">
        <button
          onClick={() => setIsCartOpen(true)}
          aria-label="Cart"
          className="relative bg-[#FFF0F3] text-[#D84370] p-2.5 rounded-xl border border-[#FCE4EC]"
        >
          <ShoppingBag size={22} />

          {totalItems > 0 && (
            <span className="absolute -top-1.5 -right-1.5 bg-[#D84370] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              {totalItems}
            </span>
          )}
        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#D84370] focus:outline-none p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

     
      {isOpen && (
        <div
          dir="rtl"
          onClick={closeMenu}
          className="fixed inset-0 z-[100] bg-black/40 md:hidden flex justify-start"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-[320px] max-w-[85%] h-full bg-white shadow-2xl flex flex-col p-6"
          >
            <div className="flex justify-between items-center border-b border-[#FCE4EC] pb-4">
              <span className="font-bold text-xl text-[#D84370]">
                القائمة الرئيسية
              </span>

              <button onClick={closeMenu} className="text-[#D84370]">
                <X size={26} />
              </button>
            </div>

            <ul className="flex flex-col items-start gap-6 list-none m-0 p-0 pt-8">
              {links.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    onClick={closeMenu}
                    className={linkStyle(link.path)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}