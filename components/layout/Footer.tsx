import Link from "next/link";
import { navigationLinks } from "@/lib/navigation";
import { SocialIcons } from "@/components/SocialIcons";
import { siteConfig } from "@/lib/site-config";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/40">
      <section className="container py-15">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-20">
          <div className="space-y-4">
            <h2 className="text-lg font-bold">SiteBase</h2>
            <p className="text-sm text-muted-foreground">
              Desenvolvendo soluções modernas e eficientes para o seu negócio.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Navegação</h3>

            <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  title={link.name}
                  className="hover:text-primary transition"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contato</h3>

            <div className="text-sm text-muted-foreground space-y-2">
              <span className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className=" hover:text-primary transition duration-300"
                >
                  {siteConfig.contact.email}
                </a>
              </span>
              <span className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className=" hover:text-primary transition duration-300"
                >
                  {siteConfig.contact.phone}
                </a>
              </span>
              <span className="flex items-stretch gap-2">
                <MapPin className="h-4 w-4 mt-1 text-primary" />
                {siteConfig.contact.address.rua} <br />
                {siteConfig.contact.address.bairro} -
                {siteConfig.contact.address.cidade}/
                {siteConfig.contact.address.estado} <br />
                CEP: {siteConfig.contact.address.cep}
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Siga-nos!</h3>
            <SocialIcons />
          </div>
        </div>

        <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
          © {year} SiteBase. Todos os direitos reservados.
        </div>
      </section>
    </footer>
  );
}
