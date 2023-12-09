import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { siteConfig } from "./config/site";
import Nav from "./ui/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Providers>
          <Nav></Nav>
          <main className="container mx-auto max-w-7xl pt-6 px-6 flex-grow">
            {children}
          </main>
          <footer className="text-gray-400 font-thin text-center text-sm mt-8">
            © 2023 Breno Silva. All Rights Reserved.
          </footer>
        </Providers>
      </body>
    </html>
  );
}
