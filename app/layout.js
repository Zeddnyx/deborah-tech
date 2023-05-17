import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Deborah Tech",
  description: "Our company specializes in crafting bespoke mobile and web applications, developing cutting-edge crypto tokens, building state-of-the-art web3 platforms, and leveraging the latest advancements in artificial intelligence to create unparalleled digital experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
