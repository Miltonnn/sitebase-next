import Link from "next/link";
import Image from "next/image";

import { navigationLinks } from "@/lib/navigation";
import { SocialIcons } from "@/components/SocialIcons";
import { siteConfig } from "@/lib/site-config";
import { getCompany } from "@/lib/services/company.service";

import { Mail, MapPin, Phone } from "lucide-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export async function Footer() {
  const company = await getCompany();

  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-t-amber-50 bg-gradient-to-r from-primary to-blue-500">
      <section className="container py-15">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 xl:gap-20">
          <div className="flex flex-col space-y-4">
            <Image
              src={company?.logo || "/assets/logo.png"}
              alt={company?.name || "SiteBase"}
              title={company?.name || "SiteBase"}
              width={60}
              height={60}
              className="brightness-0 invert"
            />
            <p className="text-md text-white">
              {company?.description}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl text-white font-semibold">Navegação</h3>

            <nav className="flex flex-col gap-2 text-md text-white">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  title={link.name}
                  className="hover:text-gray-300 transition"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl text-white font-semibold">Contato</h3>

            <div className="text-md text-white space-y-2">
              <span className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-gray-300 transition duration-300"
                  title="E-mail"
                >
                  {siteConfig.contact.email}
                </a>
              </span>
              <span className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-white" />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="hover:text-gray-300 transition duration-300"
                  title="Ligar"
                >
                  {siteConfig.contact.phone}
                </a>
              </span>
              <span className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="text-white w-4 h-4"
                />
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                  className=" hover:text-gray-300 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="WhatsApp"
                >
                  {siteConfig.contact.whatsapp}
                </a>
              </span>
              <span className="flex items-stretch gap-2">
                <MapPin className="h-4 w-4 mt-1 text-white" />
                {company?.street}, {company?.number} <br />
                {company?.neighborhood} -
                {company?.city}/
                {company?.state} <br />
                CEP: {company?.zipCode}
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl text-white font-semibold">Siga-nos!</h3>
            <SocialIcons />
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-white">
          © {year} SiteBase. Todos os direitos reservados.
        </div>
      </section>
    </footer>
  );
}
