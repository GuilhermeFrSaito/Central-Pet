import "./App.css";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";

function App() {
  return (
    <>
      <section className="headerSection">
        <Header />
      </section>
      <section className="mainContent"></section>
      <section className="footerSection">
        <Footer />
      </section>
    </>
  );
}

export default App;
