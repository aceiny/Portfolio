import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "@/components/sidebar";
import type React from "react"; // Added import for React
import { personalInfo, portfolioInfo } from "@/constants/data";

export const metadata: Metadata = {
  title: `${personalInfo.name}. - ${personalInfo.role}`,
  description: portfolioInfo.portfolioDescription,
  icons: {
    icon: '/favicon.ico', // Path to your favicon
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
      <body className="bg-black text-white">
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 ml-0 lg:ml-[400px] p-4 lg:p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
