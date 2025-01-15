import React,{useState} from "react";
import logo from "../image/6744480.png";
import { Link } from "react-router-dom";


export default function Header() {


  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="main-header">
      <div className="header-content">
        <img src={logo} alt="Logo" className="header-logo" />
        <h1>FindMyBrew</h1>

       

        <nav className="navbar">
          <button className="navbar-btn" onClick={toggleMenu}>
            {isOpen ? "Close" : "Menu"}
          </button>
        </nav>
        
      </div>
      <nav className="navbar">
        
        </nav>
<ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li>
            <Link to="/menus" className="btn2">
              <span className="spn2">Menus</span>
            </Link>
          </li>
          <li>
            <Link to="/Productcard" className="btn2">
              <span className="spn2">Productcard</span>
            </Link>
          </li>
          <li>
            <Link to="/ShopContainer" className="btn2">
              <span className="spn2">ShopContainer</span>
            </Link>
          </li>
          <li>
            <Link to="/OrderBox" className="btn2">
              <span className="spn2">Orders</span>
            </Link>
          </li>
          <li>
            <Link to="/ShopList" className="btn2">
              <span className="spn2">ShopList</span>
            </Link>
          </li>
          <li>
            <Link to="/WhiteList" className="btn2">
              <span className="spn2">White List</span>
            </Link>
          </li>
          <li>
            <Link to="/login" className="btn2">
              <span className="spn2">Login</span>
            </Link>
          </li>
        </ul>
    </header>
  );
}
