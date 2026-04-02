import { Cta } from "@/components/sections/Cta";
import { Empresa } from "@/components/sections/Empresa";
import { Hero } from "@/components/sections/Hero";
import { Mvv } from "@/components/sections/Mvv";


export default function Home() {
  return (
    <>
      <Hero />
      <Empresa />
      <Mvv />
      <Cta />
    </>
  );
}
