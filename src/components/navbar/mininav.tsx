"use client";

import { defaultNavbarConfig } from "@/config/marketing.config";
import { cn } from "@/lib/utils";
import { useRef } from "react";
import useScrolledEnough from "@/lib/hooks/useScrolledEnough";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Mininav() {
  const pathName = usePathname();
  const ref = useRef(null);
  const scrolledEnough = useScrolledEnough(300);

  return (
    <div
      ref={ref}
      className={cn(
        "inline-flex border border-indigo-800/40 rounded-full px-4 py-2 bg-background nav-gradient fixed top-2 left-1/2 -translate-x-1/2 z-[1000] transition-all transform-gpu duration-300 ease-in-out text-sm",
        scrolledEnough
          ? "opacity-100 transalte-y-0 scale-100 gap-x-5 justify-center items-center"
          : "opacity-0 -translate-y-24 scale-0"
      )}
    >
      {defaultNavbarConfig.map((item) => {
        return (
          <Link
            href={item.href}
            key={item.href}
            className={cn(
              "hover:text-primary duration-75 transition-colors",
              pathName !== item.href && "text-muted-foreground"
            )}
            aria-disabled={item.disable}
          >
            {item.title}
          </Link>
        );
      })}
      <JoinWaitlistButton />
    </div>
  );
}

const JoinWaitlistButton = () => {
  return (
    <button className="hidden bg-background no-underline group cursor-pointer relative shadow-2xl shadow-indigo-900 rounded-full p-px text-xs font-semibold leading-6 md:inline-block">
      <Link href="/#waitlist-form">
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(86,97,246,0.6)_0%,rgba(86,97,246,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </span>
        <div className="relative flex space-x-2 items-center z-10 rounded-full bg-background py-0.5 px-1 lg:px-4 ring-1 ring-blue-200/10 ">
          <span>Join waitlist</span>
          <svg
            fill="none"
            height="16"
            viewBox="0 0 24 24"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.75 8.75L14.25 12L10.75 15.25"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </svg>
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-indigo-400/0 via-indigo-800/90 to-indigo-400/0 transition-opacity duration-500 group-hover:opacity-40" />
      </Link>
    </button>
  );
};
