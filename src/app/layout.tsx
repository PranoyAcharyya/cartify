import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Wrapper from "@/components/layout/wrapper/Wrapper";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Cartify | Smart Online Shopping for Everything You Love",
    template: "%s | Cartify",
  },
  description:
    "Cartify is your one-stop online shopping destination for fashion, electronics, accessories, and more. Enjoy seamless browsing, secure checkout, and exclusive deals every day.",
  keywords: [
    "Cartify",
    "online shopping",
    "ecommerce store",
    "buy products online",
    "fashion",
    "electronics",
    "accessories",
    "best deals",
    "shopping website",
  ],
  authors: [{ name: "Cartify Team" }],
  metadataBase: new URL("https://cartify-pi-seven.vercel.app/"), 

  openGraph: {
    title: "Cartify | Smart Online Shopping for Everything You Love",
    description:
      "Explore Cartify’s wide range of products including fashion, electronics, and everyday essentials. Shop smarter with great deals and fast delivery.",
    url: "https://cartify-pi-seven.vercel.app/",
    siteName: "Cartify",
    type: "website",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "Cartify | Smart Online Shopping for Everything You Love",
    description:
      "Shop the latest trends and top products on Cartify. Great prices, secure checkout, and fast delivery.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body >
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
