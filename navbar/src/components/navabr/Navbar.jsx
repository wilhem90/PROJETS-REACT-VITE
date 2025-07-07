import { useState } from 'react';
import "./Navbar.css"
import { Link } from 'react-router-dom';

function Navabr() {
    const [indexActive, setIndexActive] = useState(0)
    const items = [
        {path: "/", text: "Home"},
        {path: "/about", text: "About"},
        {path: "/logout", text: "Logout"},
    ]

   
  return(
    <header>
        <div className="logo-text">
            <span>BERMAX GLOBAL</span>
        </div>

        <nav>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <Link to={item.path} className={indexActive === index? "active": ""} onClick={() => {
                            setIndexActive(index)
                        }}>
                            {item.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
  );
}

export default Navabr;