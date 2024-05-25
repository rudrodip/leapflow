import { TracingBeam } from "@/components/tracing-beam";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full bg-themeBackground">
      <div className="w-full max-w-5xl mx-auto py-8 md:py-16 px-2">
        <h1 className="head-text">Changelog</h1>
        <p className="text-muted-foreground p-1 mb-10 text-lg">
          New updates and improvements to Leapflow.
        </p>
        <TracingBeam>{children}</TracingBeam>
      </div>
    </main>
  );
}
