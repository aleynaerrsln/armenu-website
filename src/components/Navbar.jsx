import { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-wrapper">
          <div className="logo">
            <h2>AR Menü</h2>
          </div>

          <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
            <li><a href="#home">Ana Sayfa</a></li>
            <li><a href="#showcase">Özellikler</a></li>
            <li><a href="#how-it-works">Nasıl Çalışır</a></li>
            <li><a href="#contact">İletişim</a></li>
          </ul>

          <button className="btn btn-primary">Demo İste</button>

          <div 
            className={`hamburger ${isOpen ? 'active' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;