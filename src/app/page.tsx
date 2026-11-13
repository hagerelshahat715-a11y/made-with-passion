import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div dir="rtl" className="w-full bg-white flex flex-col">
      
      <section className="w-full md:min-h-[calc(100vh-80px)] grid grid-cols-1 md:grid-cols-2 items-center bg-white shadow-lg overflow-hidden border border-[#FCE4EC]">
        
        
        <div className="w-full h-[230px] sm:h-[280px] md:h-full md:min-h-[450px] relative overflow-hidden bg-white order-1 md:order-2">
          <img 
            src="/images/products/logo1.png" 
            alt="Made with Passion" 
            className="w-full h-full object-cover"
          />
        </div>

        
        <div className="p-6 md:p-12 lg:p-16 flex flex-col items-start justify-center text-right order-2 md:order-1">
          <span className="text-xs md:text-sm font-bold text-[#D84370] bg-[#FCE4EC] px-3.5 py-1 md:px-4 md:py-1.5 rounded-full mb-4 md:mb-6">
            متجر الهدايا اليدوية
          </span>
          
          <h1 className="text-2xl md:text-5xl font-extrabold text-gray-700 mb-4 md:mb-6 leading-tight">
            اصنعي لحظاتك المميزة بكل حب
          </h1>
          
          <p className="text-gray-600 text-base md:text-xl mb-6 md:mb-8 leading-relaxed max-w-lg">
            أجمل الهدايا اليدوية المصممة خصيصاً لتناسب ذوقك وتعبر عن مشاعرك في كل المناسبات.
          </p>
          
          <div className="flex flex-wrap gap-3 md:gap-4 w-full sm:w-auto">
            <Link
              href="/products"
              style={{
                background: 'linear-gradient(135deg, #D84370 0%, #E77295 100%)',
              }}
              className="flex-1 sm:flex-initial text-center text-white py-3 px-6 md:py-3.5 md:px-8 rounded-[8px] text-sm md:text-[16px] font-bold shadow-md hover:opacity-95 transition-all"
            >
              تصفح المنتجات 
            </Link>
            <Link
              href="/about"
              className="flex-1 sm:flex-initial text-center bg-white text-[#D84370] border-2 border-[#D84370] py-3 px-6 md:py-3.5 md:px-8 rounded-[8px] text-sm md:text-[16px] font-bold shadow-sm hover:bg-[#FCE4EC]/30 transition-all"
            >
              عن المتجر
            </Link>
          </div>
        </div>

      </section>

    </div>
  );
}