"use client";
import { Navbar } from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";
import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function RootLayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem>
      <HeroUIProvider>
        <div className="min-h-screen">
          <Navbar />
          <main className="pt-20 sm:pt-24 md:pt-28 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
            {children}
          </main>
        </div>
        <Toaster />
      </HeroUIProvider>
    </NextThemesProvider>
  );
}
