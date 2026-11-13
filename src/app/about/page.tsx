"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, MessageCircle, Gift } from "lucide-react";

export default function AboutPage() {
  const whatsappNumber = "201557423064"; 
  const customDesignMessage = encodeURIComponent("مرحباً، أود إرسال ديزاين خاص لتنفيذه في متجر Made With Passion 🌸");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${customDesignMessage}`;

  return (
    <div dir="rtl" className="min-h-screen bg-[#FFF0F3] py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-[#FCE4EC]">
        
        {/* عنوان الصفحة الرئيسي */}
        <div className="text-center pt-8 pb-4 px-6">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-wider uppercase text-[#D84370]">
            Made With Passion
          </h1>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch p-6 md:p-12">
          
          
          <div className="relative w-full h-[350px] md:h-full min-h-[450px] rounded-2xl overflow-hidden shadow-md border-2 border-[#FCE4EC]">
            <img
              src="/images/products/WhatsApp Image 2026-11-09 at 1.03.19 PM.jpeg"
              alt="Made With Passion Bouquet"
              className="w-full h-full object-cover"
            />
          </div>

        
          <div className="flex flex-col justify-between text-right space-y-4">
            
            <div className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 leading-snug">
                نصنع لحظاتك المميزة بأيدينا بكل حب وأناقة
              </h2>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed font-normal">
                متجر <span className="font-bold text-[#D84370]">Made With Passion</span> متخصّص في صناعة وتقديم أجمل الهدايا المصنوعة خصيصاً لمناسباتك؛ بدءاً من <span className="font-semibold text-gray-800">بوكيهات الورد، المحافظ الجلدية المميزة، وصواني الخطوبة الفخمة</span>.
              </p>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed font-normal">
                باختصار، كل ما تحتاج إليه أو يحتاج إليه من تحبين لتكتمل فرحة مناسبتكم تجدونه لدينا بتصميمات فريدة تعبر عن مشاعركم الصادقة بكل إتقان.
              </p>
            </div>

            
            <div className="w-full space-y-30 pt-2">
              
                        
                <div className="w-[300px] flex justify-center mx-auto">
                <Link
                    href="/products"
                    style={{
                    background: 'linear-gradient(135deg, #D84370 0%, #E77295 100%)',
                    }}
                    className="inline-flex items-center justify-center gap-2 text-white px-8 py-3.5 rounded-xl font-bold shadow-md hover:opacity-95 transition-all text-base w-full"
                >
                    <Gift size={20} />
                    <span>تصفح منتجات المتجر</span>
                  </Link>
                </div>

              
              <div className="bg-[#FFF0F3] p-5 rounded-2xl border border-[#FCE4EC] w-full space-y-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="text-[#D84370]" size={20} />
                  <h3 className="font-bold text-gray-800 text-base md:text-lg">عندك ديزاين معين في بالك؟</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed font-normal">
                  لا تقلق! يمكنك إرسال التصميم أو الفكرة التي تتمنينها، وسنقوم بتنفيذها بكل إتقان واحترافية خصيصاً لكِ.
                </p>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: 'linear-gradient(135deg, #D84370 0%, #E77295 100%)',
                  }}
                  className="inline-flex items-center justify-center gap-2 text-white font-bold py-3 px-5 rounded-xl shadow-md hover:opacity-95 transition-all text-sm md:text-base w-full mt-1"
                >
                  <MessageCircle size={18} />
                  <span>ابعت ديزاينك عبر الواتساب</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}