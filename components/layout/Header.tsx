"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export function Header() {
  return (
    <header className="w-full border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          SiteBase
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium hover:text-primary transition">
            Home
          </Link>
          <Link href="/quem-somos" className="text-sm font-medium hover:text-primary transition">
            Quem Somos
          </Link>
          <Link href="/contato" className="text-sm font-medium hover:text-primary transition">
            Contato
          </Link>
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
              <nav className="mt-10 flex flex-col gap-6">
                <Link href="/" className="text-base font-medium">
                  Home
                </Link>
                <Link href="/quem-somos" className="text-base font-medium">
                  Quem Somos
                </Link>
                <Link href="/contato" className="text-base font-medium">
                  Contato
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
