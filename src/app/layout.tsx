import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/app/context/CartContext";

export const metadata = {
  title: "Made With Passion | متجر الهدايا الهاند ميد",
  description: "بوكيهات ورد ستان، صواني خطوبة، محافظ جلد، وكفرات موبايل مخصصة",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-[#FFF0F3] text-neutral-800 antialiased font-sans flex flex-col min-h-screen">
        <CartProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}