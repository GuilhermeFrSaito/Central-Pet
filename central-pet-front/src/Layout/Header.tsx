import dog from "../assets/image/dog.png";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={dog} />
        <p>Pet Central</p>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <a href="/">Pets</a>
          </li>
          <li>
            <a href="/">Instituicoes</a>
          </li>
        </ul>
      </nav>
      <div className="auth">
        <>
          <a href="/register">Register</a>
          <a href="/login">Login</a>
        </>
      </div>
    </header>
  );
};

export default Header;
