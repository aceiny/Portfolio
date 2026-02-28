"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@heroui/button";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";
import { SunBold, MoonBold, MonitorBold } from "@solar-icons/react-perf";

const themes = [
  { key: "light", label: "Light", icon: SunBold },
  { key: "dark", label: "Dark", icon: MoonBold },
  { key: "system", label: "System", icon: MonitorBold },
] as const;

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button isIconOnly variant="light" size="md" aria-label="Theme">
        <SunBold className="w-5 h-5" />
      </Button>
    );
  }

  const currentIcon =
    theme === "dark" ? MoonBold : theme === "light" ? SunBold : MonitorBold;
  const CurrentIcon = currentIcon;

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button isIconOnly variant="light" size="md" aria-label="Switch theme">
          <CurrentIcon className="w-5 h-5" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Theme selection"
        selectionMode="single"
        selectedKeys={new Set([theme ?? "system"])}
        onSelectionChange={(keys) => {
          const selected = Array.from(keys)[0] as string;
          setTheme(selected);
        }}
      >
        {themes.map((t) => (
          <DropdownItem
            key={t.key}
            startContent={<t.icon className="w-5 h-5" />}
          >
            {t.label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
