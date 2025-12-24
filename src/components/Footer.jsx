import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>AR Menü</h3>
            <p>Restoranlar için yeni nesil artırılmış gerçeklik menü sistemi</p>
            <div className="social-links">
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="LinkedIn">💼</a>
              <a href="#" aria-label="Facebook">📘</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Hızlı Linkler</h4>
            <ul>
              <li><a href="#home">Ana Sayfa</a></li>
              <li><a href="#showcase">Özellikler</a></li>
              <li><a href="#how-it-works">Nasıl Çalışır</a></li>
              <li><a href="#contact">İletişim</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Hizmetler</h4>
            <ul>
              <li><a href="#">3D Modelleme</a></li>
              <li><a href="#">AR Menü Sistemi</a></li>
              <li><a href="#">QR Kod Oluşturma</a></li>
              <li><a href="#">Entegrasyon Desteği</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>İletişim</h4>
            <ul>
              <li>📧 info@armenu.com</li>
              <li>📱 +90 555 123 45 67</li>
              <li>📍 Ankara, Türkiye</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 AR Menü. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;