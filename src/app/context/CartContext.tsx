'use client';

import React, { createContext, useContext, useState } from 'react';

interface CartItem {
  id: string | number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  images?: string[];
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: any) => void;
  removeFromCart: (id: string | number) => void;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: any) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true); // تفتح السلة تلقائياً عند إضافة منتج
  };

  const removeFromCart = (id: string | number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const sendToWhatsApp = () => {
    let message = "مرحباً، أود طلب المنتجات التالية:\n\n";
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} - الكمية: ${item.quantity} - السعر: ${item.price * item.quantity} ج.م\n`;
    });
    message += `\nالإجمالي الكلي: ${totalPrice} ج.م`;

    const phone = "201157435798"; 
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, isCartOpen, setIsCartOpen, totalItems, totalPrice }}
    >
      {children}

      {/* سلة التسوق الجانبية (Cart Drawer) - تظهر هنا تلقائياً عند النقر */}
      {isCartOpen && (
        <div className="fixed inset-0 z-[200] bg-black/40 backdrop-blur-sm flex justify-start" dir="rtl">
          <div className="bg-white w-full max-w-md h-full p-6 flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-300">
            <div>
              <div className="flex justify-between items-center mb-6 border-b border-[#FCE4EC] pb-4">
                <h3 className="text-xl font-bold text-gray-800">🛒 سلة المشتريات</h3>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-gray-400 hover:text-[#D84370] font-bold text-xl"
                >
                  ✕
                </button>
              </div>

              {cart.length === 0 ? (
                <p className="text-center text-gray-400 py-16">السلة فارغة حالياً.. 🌸</p>
              ) : (
                <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between items-center border-b border-[#FCE4EC] pb-3">
                      <div>
                        <h4 className="font-bold text-sm text-gray-800">{item.name}</h4>
                        <span className="text-xs text-gray-500">
                          {item.price} ج.م × {item.quantity}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-extrabold text-sm text-[#D84370]">
                          {item.price * item.quantity} ج.م
                        </span>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-rose-500 text-xs font-bold hover:bg-rose-50 p-2 rounded-lg transition"
                        >
                          حذف
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="border-t border-[#FCE4EC] pt-4">
                <div className="flex justify-between items-center mb-4 text-lg font-bold text-gray-800">
                  <span>الإجمالي الكلي:</span>
                  <span className="text-[#D84370] font-extrabold">{totalPrice} ج.م</span>
                </div>
                <button
                  onClick={sendToWhatsApp}
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3.5 rounded-xl font-bold shadow-md transition flex items-center justify-center gap-2 text-base"
                >
                  💬 إتمام الطلب عبر الواتساب
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}