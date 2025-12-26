import './Pricing.css';

function Pricing() {
  const plans = [
    {
      name: 'Basic',
      price: '₺ 1.000',
      period: '/ay',
      description: 'Küçük işletmeler için',
      features: [
        '10 adet 3D model',
        'QR kod entegrasyonu',
        'Temel AR görüntüleme',
        'Email destek'
      ],
      popular: false
    },
    {
      name: 'Premium',
      price: '₺2.000',
      period: '/ay',
      description: 'Büyüyen işletmeler için',
      features: [
        '50 adet 3D model',
        'Gelişmiş AR özellikleri',
        'Özel tasarım',
        'Öncelikli destek',
        'Analytics dashboard'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Özel',
      period: '',
      description: 'Kurumsal çözümler için',
      features: [
        'Sınırsız 3D model',
        'Tüm AR özellikleri',
        '7/24 destek',
        'API entegrasyonu',
        'Özel geliştirme'
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="pricing-header">
          <h2>Fiyatlandırma</h2>
          <p>İhtiyacınıza uygun planı seçin ve işletmenizi dijital dünyaya taşıyın</p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">En Popüler</div>}

              <div className="plan-header">
                <h3>{plan.name}</h3>
                <p className="plan-description">{plan.description}</p>
                <div className="price">
                  <span className="amount">{plan.price}</span>
                  {plan.period && <span className="period">{plan.period}</span>}
                </div>
              </div>

              <ul className="features-list">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="#contact" className="plan-btn">
                {plan.price === 'Özel' ? 'İletişime Geçin' : 'Hemen Başla'}
              </a>
            </div>
          ))}
        </div>

        <div className="pricing-note">
          <p>Tüm planlar KDV hariç fiyatlandırılmıştır. İlk kurulum ücreti ayrıca uygulanır.</p>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
