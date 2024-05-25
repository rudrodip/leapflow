"use client";

import { defaultNavbarConfig } from "@/config/marketing.config";
import { HoverBorderGradient } from "@/components/ui/gradient-button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Icons } from "@/components/icons";
import { useRouter } from "next/navigation";

export default function DefaultNavbar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex relative justify-between w-full max-w-7xl mx-auto py-4 items-center lg:px-2 px-6 z-50">
      <Link href="/">
        <Icons.Logo />
      </Link>
      <div className="flex items-center gap-x-3">
        {defaultNavbarConfig.map((item, index) => {
          return (
            <Link key={item.href} href={item.href}>
              <p
                className={cn(
                  "text-sm font-medium text-primary/70 hover:text-primary transition-colors duration-75",
                  pathname === item.href ? "text-primary" : ""
                )}
              >
                {item.title}
              </p>
            </Link>
          );
        })}
      </div>
      <HoverBorderGradient
        containerClassName="border bg-black/10 dark:bg-white/10 p-0"
        backgroundClassname="bg-black inset-[0.5px]"
      >
        <Link href="/#waitlist">
          Join waitlist
        </Link>
      </HoverBorderGradient>
    </div>
  );
}
