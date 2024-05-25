import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AnnouncementBar() {
  return (
    <Link
      href="/blog/announcing-our-waitlist"
      className="nav-gradient border-indigo-800/80 border border-b-0 rounded-full flex justify-between p-1 text-xs items-center gap-2 shine shine-hover hover:scale-105 duration-100 transition-transform transform-gpu ease-in-out cursor-pointer group"
    >
      <div className="px-[0.35rem] py-[0.125rem] bg-themePrimary rounded-xl">
        New
      </div>
      <p>Announcing our waitlist</p>
      <ArrowRight
        size={14}
        className="-translate-x-1 group-hover:-translate-x-[2px] duration-200 delay-75 transition-transform transform-gpu ease-in-out"
      />
    </Link>
  );
}
