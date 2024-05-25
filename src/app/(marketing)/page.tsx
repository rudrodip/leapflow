import Hero from "@/components/hero";
import FeaturesSection from "@/components/features-section";
import IntegrationSection from "@/components/integrations/integration-section";
import IntegrationBento from "@/components/integrations/integration-bento";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center w-full">
      <div className="w-full bg-themeBackground mb-12 md:mb-24 lg:mb-[30vh]">
        <Hero />
      </div>
      <FeaturesSection />
      <IntegrationSection />
      <IntegrationBento />
    </main>
  );
}
