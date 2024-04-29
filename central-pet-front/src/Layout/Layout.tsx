import React, { useEffect, useRef, ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import SidePanel from "./SidePanel";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      const headerHeight = headerRef.current.clientHeight;
      document.documentElement.style.setProperty(
        "--header-height",
        `${headerHeight}`
      );
    }
  }, []);

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">{children}</main>
      <div className="side-panel">
        <SidePanel />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
