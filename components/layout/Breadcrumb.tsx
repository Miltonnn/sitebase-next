"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationLinks } from "@/lib/navigation";
import { ChevronRight, House } from "lucide-react";

export function Breadcrumb() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  const currentPage = navigationLinks.find((link) => link.href === pathname);

  return (
    <div className="w-full bg-gray-100">
      <div className="container py-4">
        <nav className="py-4 text-sm text-muted-foreground ">
          <ol className="flex items-center gap-1">
            <li>
              <Link
                href="/"
                className="hover:text-primary transition-colors flex items-center"
              >
                <House className="w-4 h-4 mr-1" />
                Home
              </Link>
            </li>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <li className="text-foreground font-medium">
              {currentPage?.name ?? "Página"}
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
}
