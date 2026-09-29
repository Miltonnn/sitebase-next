import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CatalogCarousel } from "./CatalogCarousel";
import type { CatalogItem } from "./catalog.data";

interface CatalogSectionProps {
  eyebrow: string;
  title: string;
  description: string;
  items: CatalogItem[];
  allHref: string;
  allLabel: string;
  className?: string;
}

export function CatalogSection({
  eyebrow,
  title,
  description,
  items,
  allHref,
  allLabel,
  className,
}: CatalogSectionProps) {
  return (
    <section className={cn("py-20", className)}>
      <div className="container">
        <CatalogCarousel items={items} label={eyebrow.toLowerCase()}>
          <div className="text-left" data-aos="fade-left">
            <span className="text-primary uppercase mb-4 block font-medium text-lg">
              {eyebrow}
            </span>
            <h2 className="mb-4 text-dark font-semibold text-lg">{title}</h2>
            <p className="text-muted-foreground max-w-2xl">{description}</p>
          </div>
        </CatalogCarousel>

        <div className="flex justify-center mt-9">
          <Button asChild size="lg" className="p-7 text-lg">
            <Link href={allHref} title={eyebrow}>
              {allLabel}
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
