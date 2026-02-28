"use client";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";
import { Button } from "@heroui/button";
import { User } from "@heroui/user";
import { AltArrowDownLinear } from "@solar-icons/react-perf";
import { personalInfo } from "@/constants/data";

export default function WhoamiDropdown() {
  const yearsOfExperience = new Date().getFullYear() - personalInfo.startYear;

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant="light"
          className="gap-2"
          endContent={<AltArrowDownLinear className="w-5 h-5" />}
        >
          <User
            name="whoami"
            avatarProps={{
              src:
                typeof personalInfo.avatar === "string"
                  ? personalInfo.avatar
                  : personalInfo.avatar.src,
              size: "sm",
            }}
            classNames={{
              name: "font-mono text-base",
            }}
          />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Info">
        <DropdownItem key="name" isReadOnly className="cursor-default">
          <span className="text-sm opacity-60 block mb-1">Name</span>
          <span className="font-medium text-base">{personalInfo.name}</span>
        </DropdownItem>
        <DropdownItem key="experience" isReadOnly className="cursor-default">
          <span className="text-sm opacity-60 block mb-1">Experience</span>
          <span className="font-medium text-base">
            {yearsOfExperience}+ years
          </span>
        </DropdownItem>
        <DropdownItem key="role" isReadOnly className="cursor-default">
          <span className="text-sm opacity-60 block mb-1">Role</span>
          <span className="font-medium text-base">{personalInfo.role}</span>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
