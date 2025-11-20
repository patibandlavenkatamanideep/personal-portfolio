import { ReactNode } from "react";
import Navigation from "./Navigation";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="h-screen bg-background text-foreground overflow-hidden">
      <Navigation />
      {children}
    </div>
  );
};

export default Layout;
