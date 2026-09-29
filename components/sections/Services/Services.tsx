import { CatalogSection } from "../Catalog/CatalogSection";
import { services } from "./services.data";

export function Services() {
  return (
    <CatalogSection
      eyebrow="Serviços"
      title="Soluções completas para seu negócio"
      description="Oferecemos um portfólio completo de serviços digitais para atender todas as necessidades do seu negócio."
      items={services}
      allHref="/servicos"
      allLabel="Ver todos os serviços"
      className="bg-gray-50"
    />
  );
}
