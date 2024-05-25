import { Button } from "@/components/ui/button";
import Link from "next/link";


type CTAButtonProps = {
  className?: string;
  text?: string;
  link: string;
}

export default function CTAButton({ className, text, link }: CTAButtonProps) {
  return (
    <Button size="sm" className={className} asChild>
      <Link href={link}>
        {text}
      </Link>
    </Button>
  )
}