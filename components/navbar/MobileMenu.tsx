"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavbarMenu, NavbarMenuItem } from "@heroui/navbar";
import { Button } from "@heroui/button";
import { navigation } from "@/constants/data";
import { socialLinks } from "@/constants/contact";
import ThemeSwitcher from "./ThemeSwitcher";

interface MobileMenuProps {
  onClose: () => void;
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <NavbarMenu className="gap-2 pt-4">
      {navigation.map((item) => {
        const isActive = pathname === item.href;
        return (
          <NavbarMenuItem key={item.name}>
            <Link
              href={item.href}
              onClick={onClose}
              className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg transition-colors text-base w-full ${
                isActive ? "font-semibold" : "opacity-60 hover:opacity-100"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </Link>
          </NavbarMenuItem>
        );
      })}

      {/* Mobile Theme Switcher & Social Links */}
      <div className="flex items-center justify-center gap-2 mt-3 pt-3 border-t border-divider sm:hidden">
        <ThemeSwitcher />
        <div className="w-px h-6 bg-divider" />
        {socialLinks.map((link) => (
          <Button
            key={link.name}
            as="a"
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            variant="light"
            isIconOnly
            size="md"
            aria-label={link.name}
          >
            <link.icon className="w-5 h-5" />
          </Button>
        ))}
      </div>
    </NavbarMenu>
  );
}
