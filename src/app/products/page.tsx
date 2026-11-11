"use client";

import React, { useState } from "react";
import productsData from "@/data/products.json";
import { useCart } from "@/app/context/CartContext";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { cart, addToCart, removeFromCart, totalPrice, isCartOpen, setIsCartOpen, sendToWhatsApp } = useCart();

  
  const [activeImages, setActiveImages] = useState<{ [key: string]: number }>({});
  const [expandedDescriptions, setExpandedDescriptions] = useState<{ [key: string]: boolean }>({});

  const categories = [
    { id: "all", name: "الكل 🌸" },
    { id: "bouquets", name: "بوكيهات ورد" },
    { id: "trays", name: "صواني خطوبة" },
    { id: "wallets", name: "محافظ جلد" },
    { id: "cases", name: "كفرات موبايل" },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? productsData
      : productsData.filter((p: any) => p.category === selectedCategory);

  const handleThumbnailClick = (productId: any, index: number) => {
    setActiveImages((prev) => ({ ...prev, [productId]: index }));
  };

  const toggleReadMore = (productId: any) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  return (
    <div dir="rtl" className="min-h-screen bg-[#FFF0F3] pb-20 px-4 md:px-8 pt-8">
      
   
      <div className="max-w-7xl mx-auto text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-2">
          معرض المنتجات 
        </h1>
        <p className="text-gray-500 text-sm md:text-base">
          استكشفي أجمل الهدايا المصنوعة يدوياً بكل حب وعناية
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
      
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-sm ${
                selectedCategory === cat.id
                  ? "bg-[#D84370] text-white shadow-md scale-105"
                  : "bg-white text-gray-600 hover:bg-[#FCE4EC]/50 border border-[#FCE4EC]"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product: any) => {
            const imagesList = product.images || [product.image];
            const currentIndex = activeImages[product.id] || 0;
            const currentImage = imagesList[currentIndex];
            const isExpanded = expandedDescriptions[product.id] || false;

            return (
              <div
                key={product.id}
                className="bg-white border border-[#FCE4EC] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group p-4"
              >
                <div>
                  
                  <div className="relative w-full h-56 bg-[#FCE4EC]/30 rounded-2xl overflow-hidden mb-3 border border-[#FCE4EC]">
                    <img
                      src={currentImage}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>

                  
                  {imagesList.length > 1 && (
                    <div className="flex gap-2 mb-3 overflow-x-auto pb-1">
                      {imagesList.map((img: string, idx: number) => (
                        <button
                          key={idx}
                          onClick={() => handleThumbnailClick(product.id, idx)}
                          className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                            currentIndex === idx ? "border-[#D84370] scale-105 shadow-md" : "border-[#FCE4EC] opacity-70"
                          }`}
                        >
                          <img src={img} alt="" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}

                  <h3 className="font-bold text-lg text-gray-800 mb-1 line-clamp-1">
                    {product.name}
                  </h3>

                  <p className={`text-gray-500 text-sm mb-2 leading-relaxed ${isExpanded ? "" : "line-clamp-2"}`}>
                    {product.description}
                  </p>

                  <button
                    onClick={() => toggleReadMore(product.id)}
                    className="text-[#D84370] text-xs font-bold hover:underline mb-3 inline-block"
                  >
                    {isExpanded ? "Show Less" : "Read More"}
                  </button>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-[#FCE4EC]">
                  <span className="text-lg font-extrabold text-[#D84370]">
                    {product.price} ج.م
                  </span>
                  <button
                    onClick={() => addToCart(product)}
                    style={{
                      background: "linear-gradient(135deg, #D84370 0%, #E77295 100%)",
                    }}
                    className="text-white text-xs px-3.5 py-2 rounded-xl font-bold shadow-sm hover:opacity-95 transition"
                  >
                    أضف للسلة 🛒
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}