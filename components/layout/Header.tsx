"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navigationLinks } from "@/lib/navigation";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
    
        <Link href="/" className="text-xl font-bold">
          SiteBase
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
          {navigationLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                 title={link.name}
                className={`transition py-2 px-3 rounded-md duration-200
        ${
          isActive
            ? "bg-black text-white"
            : "text-muted-foreground hover:bg-black hover:text-white"
        }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-64">
              <nav className="mt-10 flex flex-col gap-3 text-base font-medium p-3">
                {navigationLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      title={link.name}
                      className={`transition hover:bg-black py-2 px-3 rounded-md hover:text-white duration-200 
                    ${isActive ? "text-white bg-black" : "text-muted-foreground"}`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
