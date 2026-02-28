import type { Metadata } from "next";
import "./globals.css";
import type React from "react"; // Added import for React
import { personalInfo, portfolioInfo } from "@/constants/data";
import RootLayoutProvider from "@/providers/root-layout-provider";
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.ico" sizes="any" />
      </head>
      <body className="bg-background text-foreground overflow-x-hidden">
        <RootLayoutProvider>{children}</RootLayoutProvider>
        {/* <div className="min-h-screen">
          <Navbar />
          <main className="pt-20 sm:pt-24 md:pt-28 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
          </main>
        </div> */}
      </body>
    </html>
  );
}

// music player if you want to add :
// <MusicPlayer />
