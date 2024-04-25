import "./App.css";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import SidePanel from "./Components/SidePanel";
import MainPage from "./Pages/MainPage";
import { useEffect, useRef } from "react";

const App: React.FC = () => {
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
      <div className="main-content">
        <MainPage />
      </div>
      <div className="side-panel">
        <SidePanel />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
