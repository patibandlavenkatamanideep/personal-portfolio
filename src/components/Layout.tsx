import { ReactNode } from "react";
import Navigation from "./Navigation";
import ScrollProgress from "./ScrollProgress";
import BackToTop from "./BackToTop";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="h-screen bg-background text-foreground overflow-hidden">
      <Navigation />
      <ScrollProgress />
      {children}
      <BackToTop />
    </div>
  );
};

export default Layout;
