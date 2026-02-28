"use client";

import { usePathname, useRouter } from "next/navigation";
import { Tabs, Tab } from "@heroui/tabs";
import { navigation } from "@/constants/data";
import type { Key } from "react";

export default function NavTabs() {
  const pathname = usePathname();
  const router = useRouter();

  const activeKey =
    navigation.find((item) => item.href === pathname)?.href ?? "/";

  const handleTabChange = (key: Key) => {
    router.push(key as string);
  };

  return (
    <Tabs
      aria-label="Navigation"
      selectedKey={activeKey}
      onSelectionChange={handleTabChange}
      variant="bordered"
      size="lg"
      classNames={{
        tabList: "gap-1",
      }}
    >
      {navigation.map((item) => (
        <Tab
          key={item.href}
          title={
            <div className="flex items-center gap-2">
              <item.icon className="w-5 h-5" />
              <span className="text-base">{item.name}</span>
            </div>
          }
        />
      ))}
    </Tabs>
  );
}
