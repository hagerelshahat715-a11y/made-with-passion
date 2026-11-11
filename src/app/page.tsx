import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div dir="rtl" className="w-full bg-white flex flex-col">
      
      <section className="w-full min-h-[calc(100vh-80px)] grid grid-cols-1 md:grid-cols-2 items-center bg-white shadow-lg overflow-hidden border border-[#FCE4EC]">
        
        
        <div className="p-8 md:p-12 lg:p-16 flex flex-col items-start justify-center text-right">
          <span className="text-sm font-bold text-[#D84370] bg-[#FCE4EC] px-4 py-1.5 rounded-full mb-6">
            متجر الهدايا اليدوية 
          </span>
          
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-700 mb-6 leading-tight">
            اصنعي لحظاتك المميزة بكل حب
          </h1>
          
          <p className="text-gray-600 text-lg md:text-xl mb-8 leading-relaxed max-w-lg">
            أجمل الهدايا اليدوية المصممة خصيصاً لتناسب ذوقك وتعبر عن مشاعرك في كل المناسبات.
          </p>
          
          <div className="flex flex-wrap gap-4 w-full sm:w-auto">
            <Link
              href="/products"
              style={{
                background: 'linear-gradient(135deg, #D84370 0%, #E77295 100%)',
              }}
              className="flex-1 sm:flex-initial text-center text-white py-3.5 px-8 rounded-[8px] text-[16px] font-bold shadow-md hover:opacity-95 transition-all"
            >
              تصفح المنتجات 
            </Link>
            <Link
              href="/about"
              className="flex-1 sm:flex-initial text-center bg-white text-[#D84370] border-2 border-[#D84370] py-3.5 px-8 rounded-[8px] text-[16px] font-bold shadow-sm hover:bg-[#FCE4EC]/30 transition-all"
            >
              عن المتجر
            </Link>
          </div>
        </div>

      
        <div className="w-full h-[350px] md:h-full min-h-[450px] relative overflow-hidden bg-white">
          <img 
            src="/images/products/logo1.png" 
            alt="Made with Passion" 
            className="w-full h-full object-cover"
          />
        </div>

      </section>

    </div>
  );
}