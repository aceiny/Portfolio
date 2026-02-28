"use client";

import {
  Navbar as HeroNavbar,
  NavbarContent,
  NavbarMenuToggle,
} from "@heroui/navbar";
import { useState } from "react";
import WhoamiDropdown from "./WhoamiDropdown";
import NavTabs from "./NavTabs";
import NavActions from "./NavActions";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <HeroNavbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
      maxWidth="full"
      classNames={{
        wrapper: "px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24",
      }}
    >
      {/* Section 1: whoami dropdown */}
      <NavbarContent justify="start">
        <WhoamiDropdown />
      </NavbarContent>

      {/* Section 2: Navigation Tabs (desktop) */}
      <NavbarContent className="hidden lg:flex" justify="center">
        <NavTabs />
      </NavbarContent>

      {/* Section 3: Social links, CV & mobile toggle */}
      <NavbarContent justify="end" className="gap-2 sm:gap-2">
        <NavActions />

        {/* Mobile menu toggle */}
        <NavbarMenuToggle
          className="lg:hidden ml-1 sm:ml-2"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      {/* Mobile Navigation Menu */}
      <MobileMenu onClose={() => setIsMenuOpen(false)} />
    </HeroNavbar>
  );
}
