import { useState } from 'react';
import "./Navbar.css"

function Navabr() {
    const [indexActive, setIndexActive] = useState(0)
    const items = [
        {path: "#", text: "Home"},
        {path: "#", text: "About"},
        {path: "#", text: "Logout"},
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
                        <a href={item.path} className={indexActive === index? "active": ""} onClick={() => {
                            setIndexActive(index)
                        }}>
                            {item.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
  );
}

export default Navabr;