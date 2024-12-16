import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logoImg from "../../images/logo.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleNavbar = () => setToggleMenu(!toggleMenu);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className='navbar' id="navbar">
      <div className='container navbar-content flex'>
        <div className='brand-and-toggler flex flex-sb'>
          <Link to="/" className='navbar-brand flex'>
            <img src={logoImg} alt="site logo" />
            <span className='text-uppercase fw-7 fs-24 ls-1'>ZOSK</span>
          </Link>
          <button type="button" className='navbar-toggler-btn' onClick={handleNavbar}>
            <HiOutlineMenuAlt3 size={35} style={{ color: `${toggleMenu ? "#fff" : "#010101"}` }} />
          </button>
        </div>

        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <ul className="navbar-nav">
            <li className='nav-item'>
              <Link to="/" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to="about" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>O nas</Link>
            </li>
            {/* Zwijane menu dla dodatkowych opcji */}
            <li className='nav-item dropdown'>
              <span className='nav-link text-uppercase text-white fs-22 fw-6 ls-1' onClick={toggleDropdown}>
                Więcej ▼
              </span>
              {dropdownOpen && (
                <ul className='dropdown-menu'>
                  <li className='dropdown-item'>
                    <Link to="warehouse" className='nav-link text-white fs-18 fw-5'>Magazyn</Link>
                  </li>
                  <li className='dropdown-item'>
                    <Link to="finance" className='nav-link text-white fs-18 fw-5'>Finanse</Link>
                  </li>
                  <li className='dropdown-item'>
                    <Link to="orders" className='nav-link text-white fs-18 fw-5'>Zamówienia</Link>
                  </li>
                  <li className='dropdown-item'>
                    <Link to="sales" className='nav-link text-white fs-18 fw-5'>Sprzedaż</Link>
                  </li>
                </ul>
              )}
            </li>
            {/* Opcje Zaloguj i Zarejestruj - widoczne zawsze */}
            <li className='nav-item'>
              <Link to="login" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Zaloguj</Link>
            </li>
            <li className='nav-item'>
              <Link to="register" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Zarejestruj</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
