import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import MainPage from "@/Pages/MainPage";
import RegisterPage from "@/Pages/RegisterPage/RegisterPage";
import LoginPage from "@/Pages/LoginPage/LoginPage";
import NotFoundPage from "@/Pages/NotFoundPage/NotFoundPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          Component={() => (
            <Layout>
              <MainPage />
            </Layout>
          )}
        />
        <Route
          path="/register"
          Component={() => (
            <Layout>
              <RegisterPage />
            </Layout>
          )}
        />
        <Route
          path="/login"
          Component={() => (
            <Layout>
              <LoginPage />
            </Layout>
          )}
        />
        <Route
          path="*"
          Component={() => (
            <Layout>
              <NotFoundPage />
            </Layout>
          )}
        />
      </Routes>
    </Router>
  );
};

export default App;
