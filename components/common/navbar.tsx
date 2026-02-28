"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { navigation, personalInfo } from "@/constants/data";
import { CVDownload } from "@/components/common/cv-download";
import { socialLinks } from "@/constants/contact";
import {
  Navbar as HeroNavbar,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/navbar";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";
import { Button } from "@heroui/button";
import { User } from "@heroui/user";
import { Tabs, Tab } from "@heroui/tabs";
import { AltArrowDownLinear } from "@solar-icons/react-perf";
import { useState, type Key } from "react";

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Calculate years of experience
  const yearsOfExperience = new Date().getFullYear() - personalInfo.startYear;

  // Find current active tab key based on pathname
  const activeKey =
    navigation.find((item) => item.href === pathname)?.href ?? "/";

  const handleTabChange = (key: Key) => {
    router.push(key as string);
  };

  return (
    <HeroNavbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
      maxWidth="full"
      classNames={{
        base: "bg-black/50 backdrop-blur-md",
        wrapper: "px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24",
        menu: "bg-gray-900/95 backdrop-blur-md pt-4",
      }}
    >
      {/* Section 1: whoami dropdown */}
      <NavbarContent justify="start">
        <div className="bg-gray-900/80 backdrop-blur-sm px-3 py-2 sm:px-4 rounded-2xl border border-gray-800">
          <Dropdown
            classNames={{
              content:
                "bg-gray-900/95 backdrop-blur-sm border border-gray-800 min-w-[260px]",
            }}
          >
            <DropdownTrigger>
              <Button
                variant="light"
                className="px-2 gap-2 text-white data-[hover=true]:bg-gray-800/50"
                endContent={
                  <AltArrowDownLinear className="w-4 h-4 text-gray-400" />
                }
              >
                <User
                  name="whoami"
                  avatarProps={{
                    src:
                      typeof personalInfo.avatar === "string"
                        ? personalInfo.avatar
                        : personalInfo.avatar.src,
                    size: "sm",
                    className: "w-7 h-7",
                  }}
                  classNames={{
                    name: "font-mono text-sm text-white",
                    description: "text-gray-400",
                  }}
                />
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Profile Info"
              itemClasses={{
                base: "text-white data-[hover=true]:bg-gray-800 py-3",
              }}
            >
              <DropdownItem key="name" isReadOnly className="cursor-default">
                <span className="text-xs text-gray-400 block mb-1">Name</span>
                <span className="font-medium">{personalInfo.name}</span>
              </DropdownItem>
              <DropdownItem
                key="experience"
                isReadOnly
                className="cursor-default"
              >
                <span className="text-xs text-gray-400 block mb-1">
                  Experience
                </span>
                <span className="font-medium">{yearsOfExperience}+ years</span>
              </DropdownItem>
              <DropdownItem key="role" isReadOnly className="cursor-default">
                <span className="text-xs text-gray-400 block mb-1">Role</span>
                <span className="font-medium">{personalInfo.role}</span>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </NavbarContent>

      {/* Section 2: Navigation Tabs (desktop) */}
      <NavbarContent className="hidden lg:flex" justify="center">
        <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-800 px-2 py-1">
          <Tabs
            aria-label="Navigation"
            selectedKey={activeKey}
            onSelectionChange={handleTabChange}
            variant="light"
            classNames={{
              tabList: "gap-1 bg-transparent",
              tab: "px-3 py-1.5 text-sm text-gray-400 data-[hover=true]:text-white data-[hover=true]:bg-gray-800/50 rounded-lg",
              cursor: "bg-gray-800 rounded-lg",
              tabContent: "group-data-[selected=true]:text-white text-gray-400",
            }}
          >
            {navigation.map((item) => (
              <Tab
                key={item.href}
                title={
                  <div className="flex items-center gap-2">
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </div>
                }
              />
            ))}
          </Tabs>
        </div>
      </NavbarContent>

      {/* Section 3: Social links, CV & mobile toggle */}
      <NavbarContent justify="end" className="gap-2">
        <div className="flex items-center gap-2 sm:gap-3 bg-gray-900/80 backdrop-blur-sm px-3 py-2 sm:px-4 rounded-2xl border border-gray-800">
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
                  size="sm"
                  className="text-gray-400 data-[hover=true]:text-white data-[hover=true]:bg-gray-800"
                  aria-label={link.name}
                >
                  <link.icon className="w-4 h-4" />
                </Button>
              </NavbarItem>
            ))}
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-6 bg-gray-800" />

          {/* CV Download */}
          <NavbarItem>
            <CVDownload buttonClassName="text-[10px] sm:text-xs px-2 sm:px-3 py-1 h-7 sm:h-8" />
          </NavbarItem>
        </div>

        {/* Mobile menu toggle */}
        <NavbarMenuToggle
          className="lg:hidden text-white"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      {/* Mobile Navigation Menu */}
      <NavbarMenu className="bg-gray-900/95 backdrop-blur-md gap-2 pt-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <NavbarMenuItem key={item.name}>
              <Link
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors text-sm w-full ${
                  isActive
                    ? "bg-gray-800 text-white"
                    : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </Link>
            </NavbarMenuItem>
          );
        })}

        {/* Mobile Social Links */}
        <div className="flex items-center justify-center gap-2 mt-3 pt-3 border-t border-gray-800 sm:hidden">
          {socialLinks.map((link) => (
            <Button
              key={link.name}
              as="a"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              variant="light"
              isIconOnly
              size="sm"
              className="text-gray-400 data-[hover=true]:text-white data-[hover=true]:bg-gray-800"
              aria-label={link.name}
            >
              <link.icon className="w-4 h-4" />
            </Button>
          ))}
        </div>
      </NavbarMenu>
    </HeroNavbar>
  );
}
