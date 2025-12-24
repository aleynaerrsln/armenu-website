import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-wrapper">
          <div className="logo">
            <Link to="/">
              <h2>AR Menü</h2>
            </Link>
          </div>

          <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
            <li><Link to="/">Ana Sayfa</Link></li>
            <li><Link to="/menu">Menü</Link></li>
            <li><Link to="/pricing">Fiyatlandırma</Link></li>
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