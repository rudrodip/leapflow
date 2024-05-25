import { ThemeProvider } from "@/components/theme/theme-provider";
import { Toaster } from "@/components/ui/sonner";

type RootProviderProps = {
  children: React.ReactNode;
};

export const RootProvider = ({ children }: RootProviderProps) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <Toaster richColors position="top-center" />
      {children}
    </ThemeProvider>
  );
};
