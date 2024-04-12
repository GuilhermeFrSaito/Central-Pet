import "./App.css";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import SidePanel from "./Components/SidePanel";

function App() {
  return (
    <>
      <section className="headerSection">
        <Header />
      </section>
      <main className="main-content"></main>
      <SidePanel />
      <section className="footerSection">
        <Footer />
      </section>
    </>
  );
}

export default App;
