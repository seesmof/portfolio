import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio website of a frontend web developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen bg-neutral-900 flex flex-col text-neutral-50">
          <div className="h-min sticky z-20 top-0 bg-inherit">
            <Navbar />
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
