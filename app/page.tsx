import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Services from "@/components/Services";
import Tiers from "@/components/Tiers";
import Pricing from "@/components/Pricing";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Work />
        <Services />
        <Tiers />
        <Pricing />
        <Clients />
        <Contact />
      </main>
    </>
  );
}
