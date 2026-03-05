import Link from "next/link";
import { navigationLinks } from "@/lib/navigation";
import { NavItem } from "./NavItem";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between py-10">
        <Link
          href="/"
          className="text-xl font-bold text-black"
        >
          SiteBase
        </Link>

        <nav className="hidden md:flex items-center gap-2 text-sm font-medium">
          {navigationLinks.map((link) => (
            <NavItem key={link.href} link={link} />
          ))}
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}