import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MyButtonOutline({ href, name, className }) {
  return (
    <Button
      variant="outline"
      size="lg"
      className={`${className} flex flex-col`}
    >
      <Link href={href}>{name}</Link>
    </Button>
  );
}
