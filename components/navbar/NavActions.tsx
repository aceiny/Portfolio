"use client";

import { NavbarItem } from "@heroui/navbar";
import { Button } from "@heroui/button";
import { CVDownload } from "@/components/common/cv-download";
import { socialLinks } from "@/constants/contact";
import ThemeSwitcher from "./ThemeSwitcher";

export default function NavActions() {
  return (
    <div className="flex items-center gap-2 sm:gap-3">
      {/* Social Links (desktop) */}
      <div className="hidden sm:flex items-center gap-1">
        {socialLinks.map((link) => (
          <NavbarItem key={link.name}>
            <Button
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
          </NavbarItem>
        ))}
      </div>

      {/* CV Download */}
      <NavbarItem>
        <CVDownload />
      </NavbarItem>

      {/* Theme Switcher (hidden on small screens, shown in mobile menu instead) */}
      <NavbarItem className="hidden sm:flex">
        <ThemeSwitcher />
      </NavbarItem>
    </div>
  );
}
