import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { Providers } from "@/app/providers";
import { siteConfig } from "@/app/config/site";
import Nav from "@/app/ui/nav";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Divider, Link } from "@nextui-org/react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Providers>
          <Nav></Nav>
          <main className="mx-auto pt-4 px-6 flex-grow">{children}</main>
          <footer className="text-gray-400 mx-auto max-w-xl my-8 flex justify-between">
            <div className="font-light text-sm sm:font-thin ">
              Copyright © 2024 | All Rights Reserved.
            </div>

            <div className="flex text-large">
              <Link
                href="https://github.com/brendalf"
                color="secondary"
                className="mx-2 text-large"
                isExternal
              >
                <FontAwesomeIcon icon={faGithub} />
              </Link>
              <Link
                href="https://linkedin.com/in/obrendalf"
                color="secondary"
                className="mx-2 text-large"
                isExternal
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
              <Link
                href="mailto:brenophp@gmail.com"
                color="secondary"
                className="mx-2 text-large"
                isExternal
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </Link>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
