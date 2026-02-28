"use client";

import Link from "next/link";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";
import { Button } from "@heroui/button";
import { FileDownloadBold, AltArrowDownLinear } from "@solar-icons/react-perf";
import { CV_LINKS } from "@/constants/link";

interface CVDownloadProps {
  className?: string;
  buttonClassName?: string;
}

export function CVDownload({ className, buttonClassName }: CVDownloadProps) {
  return (
    <div className={className}>
      <Dropdown>
        <DropdownTrigger>
          <Button
            size="sm"
            variant="bordered"
            className={`gap-1.5 ${buttonClassName || ""}`}
            endContent={
              <AltArrowDownLinear className="w-4 h-4 hidden sm:block" />
            }
            startContent={<FileDownloadBold className="w-4 h-4" />}
          >
            <span className="hidden sm:inline">Download CV</span>
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="CV Download Options">
          {CV_LINKS.map((cvLink) => (
            <DropdownItem
              key={cvLink.language}
              startContent={<FileDownloadBold className="w-5 h-5" />}
              as={Link}
              href={cvLink.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {cvLink.language} CV
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
