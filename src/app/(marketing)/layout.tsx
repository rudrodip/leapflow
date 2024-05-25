import Brand from "@/components/brand";
import Footer from "@/components/footer";
import DefaultNavbar from "@/components/navbar";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="w-full flex justify-center items-center bg-themeBackground">
        <DefaultNavbar />
      </header>
      <main className="flex-1 px-2 md:px-0">
        {children}
      </main>
      <div className="w-full my-12 md:my-24 lg:my-32">
        <Brand />
      </div>
      <footer className="border-t">
        <Footer />
      </footer>
    </div>
  );
}