import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export function Empresa() {
  return (
    <section className="container py-15">
      <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-10">
        <div className="flex flex-col gap-3">
          <h2 className="text-4xl font-bold text-primary">
            {siteConfig.name}
            <span className="text-sm font-semibold block text-gray-600 tracking-widest">
              {siteConfig.description}
            </span>
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
            voluptates fuga provident, blanditiis doloremque vitae? Voluptatum
            at suscipit, officiis quos aliquid esse nulla iusto, eligendi et
            perspiciatis, enim dolorum aspernatur!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            quisquam, impedit aliquid iure obcaecati repellendus quas illum
            rerum fuga, consequuntur sunt eaque facilis culpa porro accusamus
            dignissimos cupiditate expedita reiciendis!
          </p>
          <Button asChild size="lg" className="text-md w-fit mt-2.5">
            <Link href="\quem-somos" title="Empresa">
              Saiba Mais
            </Link>
          </Button>
        </div>
        <div>
          <Image
            src="/assets/sem-image.webp"
            alt="Imagem ilustrativa"
            title="Imagem ilustrativa"
            width={600}
            height={600}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
