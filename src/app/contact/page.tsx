"use client";

import React, { useState } from "react";
import { MessageCircle, Send, Phone, MapPin, Globe, Camera, Share2, Sparkles } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const whatsappNumber = "201157435798";
  const facebookUrl = "https://www.facebook.com/share/1FL4NdMUbP/";
  const instagramUrl = "https://www.instagram.com/made_with_passion8?utm_source=ig_web_button_share_sheet&exln=ZDNlZDc0MzIxNw==";
  const tiktokUrl = "https://vm.tiktok.com/ZS9fmL8yLapCX-OolIY/";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `مرحباً، أنا ${formData.name}\nرقم الهاتف: ${formData.phone}\nالرسالة: ${formData.message}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div dir="rtl" className="min-h-screen bg-[#FFF0F3] py-12 px-4 md:px-8">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-[#FCE4EC]">
        
        
        <div className="text-center pt-10 pb-6 px-6">
          <span className="text-sm font-bold text-[#D84370] bg-[#FCE4EC] px-4 py-1.5 rounded-full inline-block mb-3">
            نسعد بتواصلك معنا 
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-wider uppercase text-[#D84370]">
            تواصل معنا
          </h1>
          <p className="text-gray-500 text-sm md:text-base mt-2">
            لديكِ استفسار، طلب خاص، أو ترغبين في تنفيذ ديزاين معين؟ نحن هنا دائماً لأجلكِ!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-12 items-start">
          
        
          <div className="space-y-6">
            <div className="bg-[#FFF0F3] p-6 rounded-2xl border border-[#FCE4EC] space-y-4">
              
              
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group hover:opacity-80 transition"
              >
                <div className="w-10 h-10 rounded-full bg-[#D84370] text-white flex items-center justify-center shadow-md">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-base">رقم الواتساب</h3>
                  <p className="text-gray-600 text-sm font-medium" dir="ltr">+20 127 295 7782</p>
                </div>
              </a>

              
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group hover:opacity-80 transition"
              >
                <div className="w-10 h-10 rounded-full bg-[#D84370] text-white flex items-center justify-center shadow-md">
                  <Globe size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-base">فيسبوك</h3>
                  <p className="text-gray-600 text-sm font-medium">Made With Passion Store</p>
                </div>
              </a>

              
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group hover:opacity-80 transition"
              >
                <div className="w-10 h-10 rounded-full bg-[#D84370] text-white flex items-center justify-center shadow-md">
                  <Camera size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-base">إنستجرام</h3>
                  <p className="text-gray-600 text-sm font-medium">@made_with_passion8</p>
                </div>
              </a>

              
              <a
                href={tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group hover:opacity-80 transition"
              >
                <div className="w-10 h-10 rounded-full bg-[#D84370] text-white flex items-center justify-center shadow-md">
                  <Share2 size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-base">تيك توك</h3>
                  <p className="text-gray-600 text-sm font-medium">Made With Passion TikTok</p>
                </div>
              </a>

              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#D84370] text-white flex items-center justify-center shadow-md">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-base">العنوان</h3>
                  <p className="text-gray-600 text-sm font-medium">الإسكندرية، مصر 🇪🇬</p>
                </div>
              </div>

            </div>

            
            <div className="p-6 rounded-2xl border-2 border-dashed border-[#FCE4EC] text-center space-y-2">
              <Sparkles className="mx-auto text-[#D84370]" size={28} />
              <h4 className="font-bold text-gray-800">خدمة العملاء والتصميم الخاص</h4>
              <p className="text-gray-500 text-sm">
                نستقبل كافة طلبات الهدايا وتجهيزات المناسبات طوال أيام الأسبوع بكل حب واهتمام.
              </p>
            </div>
          </div>

          
          <div className="bg-[#FFF0F3]/40 p-6 md:p-8 rounded-3xl border border-[#FCE4EC]">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <MessageCircle className="text-[#D84370]" size={22} />
              أرسلي لنا رسالة مباشرة
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">الاسم....</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="اكتبى اسمك هنا..."
                  className="w-full px-4 py-3 rounded-xl border border-[#FCE4EC] bg-white focus:outline-none focus:border-[#D84370] text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">رقم الهاتف</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="رقم الموبايل..."
                  className="w-full px-4 py-3 rounded-xl border border-[#FCE4EC] bg-white focus:outline-none focus:border-[#D84370] text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">الرسالة أو تفاصيل الديزاين</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="اكتبى استفسارك أو تفاصيل الهدية التي ترغبين بها..."
                  className="w-full px-4 py-3 rounded-xl border border-[#FCE4EC] bg-white focus:outline-none focus:border-[#D84370] text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                style={{
                  background: 'linear-gradient(135deg, #D84370 0%, #E77295 100%)',
                }}
                className="w-full text-white font-bold py-3.5 px-6 rounded-xl shadow-md hover:opacity-95 transition-all flex items-center justify-center gap-2 text-base"
              >
                <Send size={18} />
                <span>إرسال عبر الواتساب</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}