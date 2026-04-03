import { Cta } from "@/components/sections/Cta";
import { Empresa } from "@/components/sections/Empresa";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services/Services";
import { Mvv } from "@/components/sections/Mvv";
import { SeoProcesso } from "@/components/sections/SeoProcesso";
import Garantia from "@/components/sections/Garantia";

export default function Home() {
  return (
    <>
      <Hero />
      <Empresa />
      <Services />
      <SeoProcesso />
      <Garantia />
      <Cta />
      <Mvv />
    </>
  );
}
