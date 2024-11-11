import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MagnifyingGlass } from 'phosphor-react';
import logo from '../assets/fpaja.png';
import sidebarLogo from '../assets/fpaja.png';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../index.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleOutsideClick = (event) => {
      if (!event.target.closest('.dropdown-menu') && !event.target.closest('.dropdown-toggle')) {
        setDropdownOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className={`navbar navbar-expand-lg navbar-light fixed-top ${scrolled ? 'bg-dark' : 'bg-transparent'} header-container`}>
      
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Farrosindo Logo" className="logo-image" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><a className="nav-link text-white" href="/">Home</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="/pages/AboutUsBaru.jsx" >About Us</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="/pages/service.jsx" >Services</a></li>
            <li className={`nav-item dropdown ${dropdownOpen ? 'show' : ''}`}>
              <a
                className="nav-link dropdown-toggle text-white"
                id="productsDropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
                onClick={toggleDropdown}
              >
                Products
              </a>
              <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''} custom-dropdown`} aria-labelledby="productsDropdown">
  <a className="dropdown-item" href="/pages/MonsterProfile.jsx">Blend</a>
  <a className="dropdown-item" href="/pages/ConcretePump.jsx">Concrete Pump</a>
  <a className="dropdown-item" href="/pages/BatchPump.jsx">Batch Pump</a>
  <a className="dropdown-item" href="/pages/MonsterStatus.jsx">Self Loading Concrete Mixer</a>
  <a className="dropdown-item" href="/pages/Stationery.jsx">Stationery Concrete Pump</a>
  <a className="dropdown-item" href="/pages/TruckMixer.jsx">Truck Mixer</a>
  <a className="dropdown-item" href="/pages/WheelLoader.jsx">Wheel Loader</a>
</div>

            </li>

            <li className="nav-item"><a className="nav-link text-white" href="/pages/PortfolioPage.jsx">Portfolio</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="/pages/ArticlePage.jsx">Article</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="/pages/ContactUs.jsx" >Contact Us</a></li>
            <li className="nav-item">
              <button className="search-icon-button" onClick={toggleSidebar}>
                <MagnifyingGlass size={30} color="white" />
              </button>
            </li>
          </ul>
        </div>
      </div>

     
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleSidebar}>×</button>
        <div className="sidebar-logo-container">
          <img src={sidebarLogo} alt="Sidebar Logo" className="sidebar-logo" />
        </div>
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-input" />
          <button className="ok">Ok</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
