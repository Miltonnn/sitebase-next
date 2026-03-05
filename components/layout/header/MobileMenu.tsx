"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navigationLinks } from "@/lib/navigation";
import { MobileNav } from "./MobileNav";
import Link from "next/link";

export function MobileMenu() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Abrir menu de navegação"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </Button>
        </SheetTrigger>

        <SheetContent
          side="right"
          className="w-64
          [&>button]:text-black
          [&>button]:bg-white
          [&>button]:rounded-md
          [&>button]:p-2
          [&>button]:hover:bg-gray-600
          [&>button]:hover:text-white
          [&>button]:transition-colors
          [&>button]:duration-400"
        >
          <div className="relative bg-primary px-6 py-6">
            <Link href="/" className="text-xl font-bold text-white">
              SiteBase
            </Link>
          </div>

          <nav className="mt-2 flex flex-col gap-3 text-base font-medium p-3">
            <MobileNav links={navigationLinks} />
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
