import { motion } from 'framer-motion';
import './HowItWorks.css';

function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'QR Kodu Okutun',
      description: 'Müşterileriniz menüdeki QR kodu telefonlarıyla okutarak AR deneyimini başlatır.',
      icon: '📱'
    },
    {
      number: '02',
      title: 'Yemeği 3D Görün',
      description: 'Seçtikleri yemek masalarında gerçek boyutunda 3D olarak belirir.',
      icon: '🍰'
    },
    {
      number: '03',
      title: 'Sipariş Verin',
      description: 'Yemeği beğendilerse hemen sipariş verebilirler. Memnuniyet artar!',
      icon: '✅'
    }
  ];

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <motion.div 
          className="how-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Nasıl Çalışır?</h2>
          <p>3 basit adımda AR menü deneyimi</p>
        </motion.div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="step-card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="step-number">{step.number}</div>
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {index < steps.length - 1 && <div className="step-arrow">→</div>}
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="demo-video"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="video-placeholder">
            <div className="play-button">▶</div>
            <p>Demo Videosu</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HowItWorks;