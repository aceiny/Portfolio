import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Toaster } from "@/components/ui/sonner";
import type React from "react"; // Added import for React
import { personalInfo, portfolioInfo } from "@/constants/data";
export const metadata: Metadata = {
  title: `${personalInfo.name}. - ${personalInfo.role}`,
  description: portfolioInfo.portfolioDescription,
  icons: {
    icon: "/favicon.ico", // Path to your favicon
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.ico" sizes="any" />
      </head>
      <body className="bg-black text-white overflow-x-hidden">
        <div className="min-h-screen">
          <Navbar />
          <main className="pt-20 sm:pt-24 md:pt-28 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
            {children}
          </main>
        </div>
        <Toaster />
      </body>
    </html>
  );
}

// music player if you want to add :
// <MusicPlayer />
