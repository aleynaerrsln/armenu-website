import './Partners.css';

function Partners() {
  // Logo listesi - buraya kendi logolarınızı ekleyebilirsiniz
  const logos = [
    { name: 'Partner 1', image: '/logos/partner1.jpg' },
    { name: 'Partner 2', image: '/logos/partner2.jpg' },
    { name: 'Partner 1', image: '/logos/partner1.jpg' },
    { name: 'Partner 2', image: '/logos/partner2.jpg' },
    { name: 'Partner 1', image: '/logos/partner1.jpg' },
    { name: 'Partner 2', image: '/logos/partner2.jpg' },
  ];

  return (
    <section className="partners">
      <div className="container">
        <h2 className="partners-title">İşbirliği Yaptığımız Markalar</h2>
        <p className="partners-subtitle">
          Startuplardan büyük şirketlere kadar geniş bir müşteri portföyüne hizmet sunuyoruz.
        </p>

        <div className="partners-carousel">
          <div className="partners-track">
            {/* İlk set logolar */}
            {logos.map((logo, index) => (
              <div key={`logo-1-${index}`} className="partner-logo">
                <img src={logo.image} alt={logo.name} />
              </div>
            ))}
            {/* Duplike set - kesintisiz döngü için */}
            {logos.map((logo, index) => (
              <div key={`logo-2-${index}`} className="partner-logo">
                <img src={logo.image} alt={logo.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partners;
