import Link from "next/link";
import { navigationLinks } from "@/lib/navigation";
import { NavItem } from "./NavItem";
import Image from "next/image";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between py-10">
       <Link href="/">
        <Image
          src="/assets/logo.png" 
          alt="SiteBase"
          title="SiteBase"
          width={60}
          height={60}
          priority
        />
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