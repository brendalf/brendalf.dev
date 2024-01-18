import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { Providers } from "@/app/providers";
import { siteConfig } from "@/app/config/site";
import Nav from "@/app/ui/nav";
import dynamic from "next/dynamic";
import { Spinner } from "@nextui-org/react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

const VoxelScene = dynamic(() => import("@/app/ui/voxcel/scene"), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center pb-8">
      <Spinner size="lg" />
    </div>
  ),
});

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
          <main className="mx-auto max-w-xl min-h-[85svh] pt-4 px-6 flex-grow">
            <VoxelScene></VoxelScene>
            {children}
          </main>
          <footer className="text-gray-400 font-light text-center sm:font-thin text-sm my-8">
            © 2023 Breno Silva. All Rights Reserved.
          </footer>
        </Providers>
      </body>
    </html>
  );
}
