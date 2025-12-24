import { motion } from 'framer-motion';
import { useState } from 'react';
import './Pricing.css';

function Pricing() {
  const [billingType, setBillingType] = useState('monthly');

  const plans = [
    {
      name: 'Başlangıç',
      icon: '🚀',
      monthlyPrice: '999',
      yearlyPrice: '9.990',
      description: 'Küçük restoranlar için ideal',
      features: [
        '10 adet 3D yemek modeli',
        'QR kod oluşturma',
        'Temel analitik raporlar',
        'Email destek',
        'Tek dil desteği'
      ],
      popular: false
    },
    {
      name: 'Profesyonel',
      icon: '⭐',
      monthlyPrice: '2.499',
      yearlyPrice: '24.990',
      description: 'Orta ölçekli işletmeler için',
      features: [
        '50 adet 3D yemek modeli',
        'Sınırsız QR kod',
        'Detaylı analitik raporlar',
        'Öncelikli destek',
        'Çok dilli destek',
        'Özel tasarım seçenekleri',
        'Menü güncellemeleri'
      ],
      popular: true
    },
    {
      name: 'Kurumsal',
      icon: '💎',
      monthlyPrice: 'Özel',
      yearlyPrice: 'Özel',
      description: 'Büyük zincirler için',
      features: [
        'Sınırsız 3D model',
        'Sınırsız QR kod',
        'Gelişmiş analitik & raporlama',
        '7/24 öncelikli destek',
        'Özel entegrasyon',
        'API erişimi',
        'Özel eğitim',
        'Hesap yöneticisi'
      ],
      popular: false
    }
  ];

  return (
    <div className="pricing-page">
      <section className="pricing-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Fiyatlandırma</h1>
            <p>İşletmenize uygun planı seçin</p>
          </motion.div>

          <motion.div 
            className="billing-toggle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <button 
              className={billingType === 'monthly' ? 'active' : ''}
              onClick={() => setBillingType('monthly')}
            >
              Aylık
            </button>
            <button 
              className={billingType === 'yearly' ? 'active' : ''}
              onClick={() => setBillingType('yearly')}
            >
              Yıllık <span className="discount-badge">%17 İndirim</span>
            </button>
          </motion.div>
        </div>
      </section>

      <section className="pricing-plans">
        <div className="container">
          <div className="plans-grid">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                className={`plan-card ${plan.popular ? 'popular' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                {plan.popular && <div className="popular-badge">En Popüler</div>}
                
                <div className="plan-header">
                  <div className="plan-icon">{plan.icon}</div>
                  <h3>{plan.name}</h3>
                  <p>{plan.description}</p>
                </div>

                <div className="plan-price">
                  {plan.monthlyPrice === 'Özel' ? (
                    <div className="custom-price">
                      <span className="price-amount">Özel Fiyat</span>
                    </div>
                  ) : (
                    <>
                      <span className="price-amount">
                        {billingType === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                      </span>
                      <span className="price-currency">₺</span>
                      <span className="price-period">
                        /{billingType === 'monthly' ? 'ay' : 'yıl'}
                      </span>
                    </>
                  )}
                </div>

                <ul className="plan-features">
                  {plan.features.map((feature, i) => (
                    <li key={i}>
                      <span className="check-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`btn-plan ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}>
                  {plan.monthlyPrice === 'Özel' ? 'İletişime Geç' : 'Başlayın'}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing-faq">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Sıkça Sorulan Sorular
          </motion.h2>
          
          <div className="faq-grid">
            <motion.div 
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h4>3D modelleri siz mi oluşturuyorsunuz?</h4>
              <p>Evet, yemeklerinizin profesyonel 3D modellerini bizim ekibimiz oluşturuyor.</p>
            </motion.div>

            <motion.div 
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4>Uygulama indirmek gerekli mi?</h4>
              <p>Hayır, müşterileriniz sadece QR kodu okutarak tarayıcı üzerinden AR deneyimini yaşayabilir.</p>
            </motion.div>

            <motion.div 
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4>Menümü ne sıklıkla güncelleyebilirim?</h4>
              <p>Profesyonel ve Kurumsal planlarda menü güncellemeleri ücretsizdir.</p>
            </motion.div>

            <motion.div 
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4>Hangi cihazlar destekleniyor?</h4>
              <p>iOS ve Android işletim sistemli tüm modern akıllı telefonlar desteklenmektedir.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pricing;