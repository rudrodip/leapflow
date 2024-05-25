"use client";

import Link from "next/link";
import { cn, isActiveCategory } from "@/lib/utils";
import { blogCategories } from "@/config/blogCategories.config";
import { usePathname } from "next/navigation";

export default function BlogCategoryBar({ rootPath = "/blog", }: { rootPath?: string }) {
  const pathname = usePathname();
  const activeCategory = blogCategories.find((category) => isActiveCategory(category.slug, pathname, rootPath));

  if (!activeCategory) return null

  return (
    <div className="">
      <div
        id="categories"
        className="flex md:inline-flex max-w-[95%] mx-auto items-center gap-2 lg:gap-4 p-1 rounded-full bg-indigo-300/30 border border-indigo-500/30"
      >
        {blogCategories.map((category, index) => {
          return (
            <Link
              key={index}
              href={rootPath + category.slug}
              className={cn(
                "p-1 lg:p-2 rounded-[inherit] text-xs lg:text-sm hover:bg-indigo-400/40 duration-300 transition-all ease-in-out",
                activeCategory.slug === category.slug
                  ? "text-slate-800 bg-gradient-to-r from-indigo-400 to-indigo-200"
                  : ""
              )}
            >
              {category.name}
            </Link>
          );
        })}
      </div>
      <h1 className="head-text mt-8 md:mt-14">{activeCategory.name}</h1>
    </div>
  );
}
