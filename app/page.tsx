import { Cta } from "@/components/sections/Cta";
import { Empresa } from "@/components/sections/Empresa";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services/Services";
import { Products } from "@/components/sections/Products/Products";
import { Blog } from "@/components/sections/Blog/Blog";
import Garantia from "@/components/sections/Garantia";
import { siteSections } from "@/lib/site-sections";

export default function Home() {
  return (
    <>
      <Hero />
      <Empresa />
      {siteSections.servicos && <Services />}
      {siteSections.produtos && <Products />}
      <Cta />
      {siteSections.blog && <Blog />}
      <Garantia />
    </>
  );
}
