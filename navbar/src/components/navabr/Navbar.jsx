import { Link, useLocation } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
  const location = useLocation();

  const items = [
    { path: "/", text: "Início" },
    { path: "/about", text: "Sobre" },
    { path: "/login", text: "Sair" },
  ];

  return (
    <header>
      <div className="logo-text">
        <Link to="/"><span>BERMAX GLOBAL</span></Link>
      </div>

      <nav>
        <ul>
          {items.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className={location.pathname === item.path ? "active" : ""}
                >
                  {item.text}
                </Link>
              </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
