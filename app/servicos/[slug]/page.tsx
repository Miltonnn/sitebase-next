import { services } from "@/lib/navigation";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const service = services.find((s) => s.href.endsWith(slug));

  if (!service) return {};

  return {
    title: `${service.name} | SiteBase`,
    description: service.description,
  };
}

export default async function ServicoDetalhe({ params }: Props) {
  const { slug } = await params;

  const service = services.find((s) => s.href.endsWith(slug));

  if (!service) return notFound();

  return (
    <section>
      <Breadcrumb />
      <div className="container py-20">
        <h1 className="text-4xl font-bold mb-6">{service.name}</h1>

        <p className="text-muted-foreground text-lg max-w-2xl">
          {service.description}
        </p>
      </div>
    </section>
  );
}
