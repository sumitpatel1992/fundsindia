import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MyButton({ href, name, className }) {
  return (
    <Button size="lg" className={`${className} bg-primary flex flex-col`}>
      <Link href={href}>{name}</Link>
    </Button>
  );
}
