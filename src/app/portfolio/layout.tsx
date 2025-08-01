import { LayoutProvider } from "@/lib/layoutcontext";

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LayoutProvider>{children}</LayoutProvider>;
}
