import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ServiceCard } from "@/components/sections/Services/ServiceCard";
import { services } from "@/components/sections/Services/services.data";

export default function Servicos() {
  return (
    <section>
      <Breadcrumb />

      <div className="container py-15">
        <h2 className="text-4xl font-bold mb-20">Serviços</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.href} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}