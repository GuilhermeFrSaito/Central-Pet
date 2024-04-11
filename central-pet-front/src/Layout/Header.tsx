import dog from "../assets/image/dog.png";
import "./Header.css";
import DropdownMenu from "../Components/DropdownMenu";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={dog} />
        <p>Pet Central</p>
      </div>
      <nav className="nav">
        <ul className="nav-menu">
          <DropdownMenu title="Pets" items={["Procurar", "Cadastrar"]} />
          <DropdownMenu
            title="Instituições"
            items={["Consultar", "Cadastrar Nova"]}
          />
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
