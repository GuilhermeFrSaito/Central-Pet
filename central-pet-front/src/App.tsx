import "./App.css";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import SidePanel from "./Components/SidePanel";
import MainPage from "./Pages/MainPage";

const App: React.FC = () => {
  return (
    <>
      <section className="headerSection">
        <Header />
      </section>
      <section className="mainContent">
        <main className="main-content">
          <MainPage />
        </main>
      </section>

      <SidePanel />
      <section className="footerSection">
        <Footer />
      </section>
    </>
  );
};

export default App;
