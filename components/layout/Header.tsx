"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navigationLinks } from "@/lib/navigation";
import { NavItem } from "./NavItem";
import { MobileNav } from "./MobileNav";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between py-10 ">
        <Link
          href="/"
          className="text-xl font-bold text-black"
          title="SiteBase"
        >
          SiteBase
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-2 text-sm font-medium">
          {navigationLinks.map((link) => (
            <NavItem key={link.href} link={link} />
          ))}
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="
              w-64
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
                <Link
                  href="/"
                  className="text-xl font-bold text-white"
                  title="SiteBase"
                >
                  SiteBase
                </Link>
              </div>

              <nav className="mt-2 flex flex-col gap-3 text-base font-medium p-3">
                <MobileNav links={navigationLinks} />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
