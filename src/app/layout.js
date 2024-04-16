import { Inter } from "next/font/google";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SSquareIT",
  description: "provide training and premium placement support to all the IT Courses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container mx-auto px-4">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
