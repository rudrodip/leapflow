"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { defaultNavbarConfig } from "@/config/marketing.config";
import { siteConfig } from "@/config/site.config";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

export default function MobileNavbar() {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="block md:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="bg-background/50 backdrop-blur-md">
        <SheetHeader>
          <SheetTitle className="text-left">{siteConfig.name}</SheetTitle>
        </SheetHeader>
        <div className="my-8 flex flex-col gap-3">
          {defaultNavbarConfig.map((item, index) => {
            return (
              <Link key={item.href} href={item.href}>
                <p
                  className={cn(
                    "text-sm text-primary/70 hover:text-primary transition-colors duration-75",
                    pathname === item.href ? "text-primary" : ""
                  )}
                >
                  {item.title}
                </p>
              </Link>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
}
