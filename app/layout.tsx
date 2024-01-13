import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { Providers } from "@/app/providers";
import { siteConfig } from "@/app/config/site";
import Nav from "@/app/ui/nav";

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
          <main className="container mx-auto max-w-7xl min-h-[80svh] pt-6 px-6 flex-grow">
            {children}
          </main>
          <footer className="text-gray-400 font-light text-center sm:font-thin text-sm mt-8">
            © 2023 Breno Silva. All Rights Reserved.
          </footer>
        </Providers>
      </body>
    </html>
  );
}
