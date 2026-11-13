"use client";

import React from "react";
import Link from "next/link";
import { FaFacebookF, FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  const whatsappNumber = "201557423064";

  const facebookUrl = "https://www.facebook.com/share/1FL4NdMUbP/";

  const instagramUrl =
    "https://www.instagram.com/made_with_passion8?utm_source=ig_web_button_share_sheet&exln=ZDNlZDc0MzIxNw==";

  const tiktokUrl = "https://vm.tiktok.com/ZS9fmL8yLapCX-OolIY/";

  return (
    <footer
      className="bg-white text-gray-700 border-t border-[#FCE4EC] mt-auto shadow-sm"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Store Information */}
        <div className="md:col-span-1">
          <h3 className="text-xl font-bold text-[#D84370] mb-3">
            Made With Passion
          </h3>

          <p className="text-sm text-gray-500 leading-relaxed">
            هدايا ومنتجات هاند ميد مصنوعة بحب ودقة لتميز كل لحظاتكم والمناسبات السعيدة.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-md font-bold text-gray-800 mb-3">
            روابط سريعة
          </h4>

          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-[#D84370] transition">
                الرئيسية
              </Link>
            </li>

            <li>
              <Link href="/about" className="hover:text-[#D84370] transition">
                عن المتجر
              </Link>
            </li>

            <li>
              <Link href="/products" className="hover:text-[#D84370] transition">
                المنتجات
              </Link>
            </li>

            <li>
              <Link href="/contact" className="hover:text-[#D84370] transition">
                تواصل معنا
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-md font-bold text-gray-800 mb-3">
            تابعينا على
          </h4>

          <div className="flex flex-col space-y-3 text-sm">

            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 hover:text-[#1877F2] transition text-gray-600 group"
            >
              <FaFacebookF
                size={19}
                className="text-[#1877F2] group-hover:scale-110 transition-transform"
              />
              <span>Facebook</span>
            </a>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 hover:text-[#E1306C] transition text-gray-600 group"
            >
              <FaInstagram
                size={20}
                className="text-[#E1306C] group-hover:scale-110 transition-transform"
              />
              <span>Instagram</span>
            </a>

            <a
              href={tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 hover:text-black transition text-gray-600 group"
            >
              <FaTiktok
                size={19}
                className="text-black group-hover:scale-110 transition-transform"
              />
              <span>TikTok</span>
            </a>

          </div>
        </div>

        
        <div>
          <h4 className="text-md font-bold text-gray-800 mb-3">
            تواصل سريع
          </h4>

          <p className="text-sm text-gray-500 mb-3">
            للطلبات والاستفسارات المخصصة عبر الواتساب
          </p>

          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "linear-gradient(135deg, #D84370 0%, #E77295 100%)",
            }}
            className="inline-flex items-center justify-center gap-2 text-white text-sm px-4 py-2.5 rounded-xl transition font-medium shadow-md hover:opacity-95 hover:-translate-y-0.5 w-full"
          >
            <FaWhatsapp size={20} />
            <span>مراسلتنا على الواتساب</span>
          </a>
        </div>

      </div>

      
      <div className="border-t border-[#FCE4EC] text-center text-xs text-gray-400 py-4">
        © {new Date().getFullYear()} جميع الحقوق محفوظة لـ Made With Passion.
      </div>
    </footer>
  );
}